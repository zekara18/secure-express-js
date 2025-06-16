// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/get-secret', (req, res) => {
  // بصيغة بسيطة : دايمًا نرجّع المفتاح
  res.json({ secret: 'jhfjqsdlkjdsbfflklkdhdhdejh57494959' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
