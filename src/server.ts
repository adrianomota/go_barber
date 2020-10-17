import express from 'express';

const app = express();

app.use(express.json());

const PORT = 3333 || process.env.PORT;

app.get('/', (req, res) => {
  return res.json({ ok: 'Hello world 🌎' });
});

app.listen(3333, () => {
  console.log(`🚀 Server running on PORT ${PORT} 😎`);
});
