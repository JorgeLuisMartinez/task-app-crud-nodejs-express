import { config } from 'dotenv';

config();

// exportando variables de entorno
export const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/test';
export const serverPort = process.env.SERVER_PORT;