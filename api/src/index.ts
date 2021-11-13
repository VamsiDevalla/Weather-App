import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = 8000;

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
