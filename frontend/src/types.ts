export interface User {
  id: number | string;
  email: string;
  nome: string;
  cognome: string;
  ruolo: string;
  xp_totali?: number;
  created_at?: string;
  [key: string]: any;
}

export interface Exam {
  id: number | string;
  nome: string;
  voto: number;
  cfu: number;
  lode: boolean | number;
  data: string;
  user_id?: number | string;
}

export interface GamificationStatus {
  xp_totali: number;
  livello: {
    numero: number;
    nome: string;
  };
  progress: {
    percentuale: number;
    xp_mancanti: number;
    prossima_soglia: number;
  };
}
