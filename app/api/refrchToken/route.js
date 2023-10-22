import jwt from 'jsonwebtoken';
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const refreshToken = req.body.refreshToken;
  if (!refreshToken) {
    return res.status(401).end();
  }

  let payload;
  try {
    payload = jwt.verify(refreshToken, process.env.JWT_SECRET);
  } catch (e) {
    return res.status(401).end();
  }

  const user = await User.findOne({ email: payload.email });
  if (!user) {
    return res.status(401).end();
  }

  const newAccessToken = jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  const newRefreshToken = jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });

  return res.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
}