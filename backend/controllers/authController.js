const User = require('../models/User');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao fazer login' });
  }
};

module.exports = { login };
