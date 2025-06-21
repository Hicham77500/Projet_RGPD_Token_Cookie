import { signToken } from '../utils/jwt.js';

export function login(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email requis.' });
  }

  const token = signToken({ email });
  res.json({ token });
}

export function getProtected(req, res) {
  res.json({ message: `Bienvenue, ${req.user.email}` });
}