const jwt = require('jsonwebtoken');

const adminMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Acesso não autorizado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Acesso restrito a administradores' });
    }

    next();
  } catch (err) {
    return res.status(400).json({ message: 'Token inválido' });
  }
};

module.exports = adminMiddleware;
