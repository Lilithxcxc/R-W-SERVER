// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mygame', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// ดึงข้อมูลผู้ใช้ทั้งหมด
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// ดึงข้อมูลผู้ใช้คนเดียว
app.get('/api/users/:username', async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
