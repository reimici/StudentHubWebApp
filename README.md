# StudentHub

> Piattaforma web gamificata per la gestione della carriera universitaria. Permette di gestire gli esami, visualizzare statistiche (media, proiezione laurea) e sbloccare obiettivi per scalare la classifica XP globale.

## 📋 Descrizione del Progetto

StudentHub è una Web Application progettata per il corso di Ingegneria dei Sistemi Web. L'obiettivo è rendere meno stressante la gestione universitaria applicando principi di **Gamification** e **Data Visualization**.

L'architettura segue il pattern client-server con due entità distinte:
* **Frontend:** Vue.js + Vite + Pinia (State Management).
* **Backend:** Node.js + Express + MySQL.

## 🎨 Mockup & Design

Il design dell'interfaccia utente (UI) e il flusso dell'esperienza utente (UX) sono stati progettati su Canva. Puoi visualizzare il prototipo interattivo al seguente link:

👉 **[Visualizza il Mockup Completo su Canva](https://www.canva.com/design/DAG5nGBXND4/Boom0zBj1rBkACGib-mlAg/edit?utm_content=DAG5nGBXND4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)**

## 🚀 Tecnologie Utilizzate

* **Frontend:** Vue 3, Tailwind CSS, Chart.js (o D3.js), Axios.
* **Backend:** Express.js, JSON Web Token (JWT) per l'autenticazione sicura.
* **Database:** MySQL.
* **Tools:** Docker, Jest (Testing), ESLint + Prettier.

## 📂 Struttura della Repository

Come da Best Practices, la repository è divisa in:
* `/frontend`: Contiene la logica lato client (Vue.js).
* `/backend`: Contiene le API e la logica server-side (Express).

## 🛠 Installazione e Avvio

Per eseguire il progetto in locale, segui questi passaggi:

### Prerequisiti
* Node.js (v18+)
* MySQL Server in esecuzione

### 1. Setup Backend
```bash
cd backend
npm install
cp .env.example .env  # Configura qui le credenziali del DB
npm run dev