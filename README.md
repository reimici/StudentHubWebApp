# StudentHub

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

> **Piattaforma web gamificata per la gestione della carriera universitaria.**

StudentHub è un'applicazione web sviluppata per il corso di *Ingegneria dei Sistemi Web* presso l'Alma Mater Studiorum - Università di Bologna. Il progetto mira a trasformare la gestione degli esami universitari in un'esperienza coinvolgente attraverso meccaniche di **Gamification** e **Data Visualization**.

---

## 📑 Indice

1. [Descrizione del Progetto](#-descrizione-del-progetto)
2. [Architettura e Tecnologie](#-architettura-e-tecnologie)
3. [Struttura del Progetto](#-struttura-del-progetto)
4. [Installazione e Avvio](#-installazione-e-avvio)
5. [Database Schema](#-database-schema)
6. [API Endpoints](#-api-endpoints)
7. [Mockup & Design](#-mockup--design)
8. [Team di Sviluppo](#-team-di-sviluppo)

---

## 📋 Descrizione del Progetto

L'applicazione permette agli studenti di monitorare il proprio andamento accademico, visualizzare statistiche avanzate (media ponderata, proiezioni di laurea) e competere in una classifica globale basata su Punti Esperienza (XP).

### Funzionalità Principali

* **Gestione Carriera:** Inserimento, visualizzazione ed eliminazione degli esami sostenuti con calcolo automatico della media.
* **Gamification:** Sistema di livelli, barra di progresso XP e badge sbloccabili (obiettivi) in base ai risultati ottenuti.
* **Statistiche:** Grafici interattivi per visualizzare l'andamento dei voti nel tempo.
* **Leaderboard:** Classifica globale aggiornata in tempo reale per confrontarsi con altri studenti.
* **Personalizzazione:** Possibilità di modificare il tema dell'interfaccia (es. modalità semaforo RGB per i voti) tramite le impostazioni utente.
* **Amministrazione:** Pannello dedicato agli amministratori per la gestione dell'utenza e la visualizzazione di statistiche globali.

---

## 🏗 Architettura e Tecnologie

Il progetto segue un'architettura **Client-Server** disaccoppiata, comunicante tramite API RESTful.

### Frontend (Client-Side)
Sviluppato con **Vue.js 3** (Composition API) e **Vite** per garantire prestazioni elevate.
* **State Management:** Pinia (per la gestione di utente, autenticazione e impostazioni).
* **Routing:** Vue Router (con Navigation Guards per la protezione delle rotte).
* **UI/UX:** Tailwind CSS per lo styling responsive.
* **Visualizzazione Dati:** Chart.js per la generazione dei grafici.
* **HTTP Client:** Axios.

### Backend (Server-Side)
Sviluppato in **Node.js** con framework **Express** e linguaggio **TypeScript**.
* **Sicurezza:** Autenticazione tramite **JWT (JSON Web Token)** salvati in cookie `HttpOnly` e hashing delle password con **Bcrypt**.
* **Database:** Interazione con MySQL tramite il driver `mysql2` e gestione delle connessioni con Connection Pool.

---

## 📂 Struttura del Progetto

```text
StudentHub/
├── .git/
├── .gitignore             # File per escludere node_modules e file di sistema
├── .dockerignore          # File esclusi dal contesto Docker
├── docker-compose.yml     # Orchestrazione container (Backend + Frontend + DB)
├── LICENSE                # Licenza MIT del progetto
├── README.md              # Documentazione principale
│
├── backend/               # Logica Server (Express + MySQL)
│   ├── Dockerfile         # Definizione immagine Docker Backend
│   ├── .env.example       # Template configurazione sicura
│   ├── .env               # Password DB (IGNORATO DA GIT)
│   ├── package.json       # Dipendenze backend
│   ├── server.ts          # Entry point del server API
│   │
│   ├── sql/               # Script Database
│   │   ├── init.sql       # Script creazione Tabelle
│   │   └── seed.sql       # Dati di prova iniziali
│   │
│   └── src/               # Codice sorgente Backend
│       ├── config/        # Configurazione DB
│       ├── controllers/   # Logica di business
│       ├── middleware/    # Protezione rotte (JWT)
│       └── routes/        # Definizione endpoint API
│
└── frontend/              # Interfaccia Utente (Vue.js + Vite)
    ├── Dockerfile         # Definizione immagine Docker Frontend
    ├── index.html         # Entry point HTML
    ├── package.json       # Dipendenze frontend
    ├── vite.config.js     # Configurazione Vite
    │
    └── src/
        ├── App.vue        # Componente Root
        ├── main.js        # Entry point JavaScript
        ├── style.css      # Stili globali (Tailwind)
        │
        ├── api/           # Chiamate HTTP (Axios)
        ├── assets/        # Immagini e icone
        ├── components/    # Componenti riutilizzabili (NavBar, Card...)
        ├── pages/         # Viste principali (Home, Login, Dashboard...)
        ├── router/        # Gestione navigazione
        └── stores/        # State Management (Pinia)
```

---

## 🛠 Installazione e Avvio

### 🐳 Installazione e Avvio Rapido (Consigliato)

Se hai **Docker** installato, puoi avviare l'intero progetto con un singolo comando, senza dover installare Node.js o MySQL manualmente.

1.  Assicurati che Docker Desktop sia in esecuzione.
2.  Dalla root del progetto, esegui:
```bash
docker compose up --build
```
3.  Attendi qualche istante. Una volta terminato, l'app sarà disponibile su:
    *   **Frontend:** [http://localhost:5173](http://localhost:5173)
    *   **Backend API:** [http://localhost:3000](http://localhost:3000)
    *   **Database:** Accessibile sulla porta 3306

> **Nota:** Il database viene inizializzato automaticamente con i dati di prova al primo avvio.

### 🛠 Installazione Manuale

Prerequisiti: **Node.js** (v18+) e **MySQL Server** installati.

#### 1. Configurazione Database
Eseguire gli script SQL presenti nella cartella `/backend/sql` nel seguente ordine:
1.  `init.sql`: Crea il database, le tabelle e i trigger.
2.  `seed.sql`: Popola il database con dati di prova (livelli, obiettivi, utenti demo).

#### 2. Setup Backend
```bash
cd backend
npm install
# Creare un file .env basato sulle proprie configurazioni (vedi .env.example se presente)
# DB_HOST=localhost, DB_USER=root, DB_NAME=studenthub_db...
npm run dev
```

#### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 🗄 Database Schema

Il database relazionale **MySQL** è strutturato nelle seguenti tabelle principali:

1.  **`utenti`**: Gestione credenziali, anagrafica, ruolo (Studente/Admin) e XP totali.
2.  **`esami`**: Storico degli esami sostenuti, collegati all'utente tramite Foreign Key. Include un vincolo `CHECK` per voti tra 18 e 30.
3.  **`livelli`**: Tabella di lookup per determinare il livello utente in base agli intervalli di XP.
4.  **`obiettivi`**: Catalogo dei badge ottenibili (es. "Primo 30", "Giro di Boa").
5.  **`obiettivi_sbloccati`**: Tabella ponte (molti-a-molti) che collega utenti e obiettivi conseguiti.
6.  **`impostazioni_utente`**: Preferenze grafiche dell'utente (es. soglie colori voti), generata automaticamente via **Trigger** alla registrazione.

---

## 🔌 API Endpoints

Il backend espone le seguenti API REST. Tutte le rotte (eccetto Auth) sono protette da middleware di autenticazione.

### 🔐 Autenticazione (`/api/auth`)
| Metodo | Endpoint | Descrizione |
| :--- | :--- | :--- |
| **POST** | `/register` | Registrazione nuovo utente e creazione settings di default. |
| **POST** | `/login` | Accesso e rilascio token JWT (HttpOnly cookie). |
| **POST** | `/logout` | Invalidazione sessione e rimozione cookie. |

### 🎓 Esami (`/api/exams`)
| Metodo | Endpoint | Descrizione |
| :--- | :--- | :--- |
| **GET** | `/` | Recupera la lista esami. Supporta query params per filtri: `?sortBy=data&order=DESC&year=2024`. |
| **POST** | `/` | Inserisce una lista di nuovi esami e calcola gli XP guadagnati. |
| **DELETE** | `/:id` | Elimina un esame specifico e ricalcola gli XP totali. |

### 📊 Statistiche e Utenti (`/api/stats`, `/api/users`)
| Metodo | Endpoint | Descrizione |
| :--- | :--- | :--- |
| **GET** | `/api/stats` | Restituisce media aritmetica, ponderata, base di laurea e dati per i grafici. |
| **GET** | `/api/users/leaderboard` | Restituisce la classifica globale degli studenti ordinata per XP. |

### 🏆 Gamification (`/api/gamification`)
| Metodo | Endpoint | Descrizione |
| :--- | :--- | :--- |
| **GET** | `/status` | Restituisce il livello corrente, XP totali e la percentuale di progresso al livello successivo. |
| **GET** | `/badges` | Restituisce il catalogo completo degli obiettivi. |
| **GET** | `/my-badges` | Restituisce solo gli obiettivi già sbloccati dall'utente. |

### ⚙️ Impostazioni (`/api/settings`)
| Metodo | Endpoint | Descrizione |
| :--- | :--- | :--- |
| **GET** | `/` | Recupera le preferenze utente (tema voti, soglie RGB). |
| **PUT** | `/` | Aggiorna le preferenze utente. |

### 🛡️ Admin (`/api/admin`)
| Metodo | Endpoint | Descrizione |
| :--- | :--- | :--- |
| **GET** | `/users` | Lista completa di tutti gli utenti registrati. |
| **GET** | `/stats/exam-count` | Statistiche sul numero totale di esami inseriti. |
| **GET** | `/stats/ranking` | Visualizzazione classifica globale lato admin. |
| **PUT** | `/users/:id/role` | (SuperAdmin) Modifica il ruolo di un utente. |
| **POST** | `/register` | (SuperAdmin) Creazione manuale di nuovi account Admin. |
| **DELETE** | `/users/:id` | (SuperAdmin) Elimina un account amministratore. |

---

## 🎨 Mockup & Design

Il design dell'interfaccia utente (UI) e il flusso dell'esperienza utente (UX) sono stati realizzati a cura di **Rei Mici**.

Qui puoi consultare l'evoluzione grafica del progetto:

* 👉 **[Primo Mockup (Pre-revisione)](https://www.canva.com/design/DAG5nGBXND4/Boom0zBj1rBkACGib-mlAg/edit?utm_content=DAG5nGBXND4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)**: La bozza iniziale presentata e discussa in aula con professori e colleghi.
* 👉 **[Mockup Finale (Definitivo)](https://www.canva.com/design/DAG6QVv9ajQ/6sjTh2q4dOybFtLEprm3mQ/edit?utm_content=DAG6QVv9ajQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)**: La versione aggiornata e consolidata in seguito ai feedback ricevuti.

---

## 👥 Team di Sviluppo

Progetto sviluppato per il corso Ingegneria dei Sistemi Web anno accademico 2025/2026:

* **Diego Andruccioli**
* **Rei Mici**
* **Giovanni Morelli** 
