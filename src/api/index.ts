import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.SERVE_ON_PORT || 8081;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.send('hello URBN users');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;