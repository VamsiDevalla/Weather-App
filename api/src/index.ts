import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.API_START_ON || 8000;

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
