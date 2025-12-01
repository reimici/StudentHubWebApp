const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { testConnection } = require('./src/config/db');
// Importa le rotte
const authRoutes = require('./src/routes/authRoutes');

// Configurazione base
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // <--- Abilita CORS per far parlare Frontend e Backend
app.use(express.json());

// Test connessione DB
testConnection();

// Rotte API
app.use('/api/auth', authRoutes); // <--- Monta le rotte di autenticazione

// Rotta base
app.get('/', (req, res) => {
    res.send('API StudentHub is running...');
});

// Avvio server
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});