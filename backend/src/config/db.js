const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// Carica le variabili dal file .env
dotenv.config();

// Creiamo un "Pool" di connessioni
// È meglio di una connessione singola perché gestisce più richieste simultanee
// e mantiene la connessione viva automaticamente.
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Funzione helper per testare la connessione all'avvio
const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connessione al Database MySQL riuscita!');
        connection.release(); // Rilascia la connessione nel pool
    } catch (error) {
        console.error('Errore di connessione al Database:', error.message);
    }
};

module.exports = {
    pool,
    testConnection
};