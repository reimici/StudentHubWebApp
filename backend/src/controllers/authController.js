const { pool } = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { nome, cognome, email, password } = req.body;

        // 1. Validazione input basilare
        if (!nome || !cognome || !email || !password) {
            return res.status(400).json({ message: 'Tutti i campi sono obbligatori' });
        }

        // 2. Controllo se l'utente esiste già
        const [existingUsers] = await pool.query('SELECT * FROM utenti WHERE email = ?', [email]);
        if (existingUsers.length > 0) {
            return res.status(409).json({ message: 'Email già registrata' });
        }

        // 3. Hashing della password (Sicurezza - AutorityAcces.pdf Slide 43)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 4. Inserimento nel Database
        const [result] = await pool.query(
            'INSERT INTO utenti (nome, cognome, email, password) VALUES (?, ?, ?, ?)',
            [nome, cognome, email, hashedPassword]
        );

        // Nota: Il Trigger SQL creerà automaticamente la riga in 'impostazioni_utente'

        res.status(201).json({ 
            message: 'Utente registrato con successo!',
            userId: result.insertId 
        });

    } catch (error) {
        console.error('Errore registrazione:', error);
        res.status(500).json({ message: 'Errore del server durante la registrazione' });
    }
};