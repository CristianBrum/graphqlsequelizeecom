const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const encryptPassword = (pass) => {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(8).toString('hex');
    crypto.scrypt(pass, salt, 64, (error, hash) => {
      if (error) reject(error);
      resolve(`${salt}:${hash.toString('hex')}`);
    });
  });
};

const decryptPassword = (pass, passCript) => {
  return new Promise((resolve, reject) => {
    const [salt, hash] = passCript.split(':');
    crypto.scrypt(pass, salt, 64, (error, hashVerify) => {
      if (error) reject(error);
      resolve(hash === hashVerify.toString('hex'));
    });
  });
};

const createToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' });

const verifyToken = (token) => {
  try {
    if (token) {
      return jwt.verify(token, process.env.JWT_SECRET);
    }
    return null;
  } catch (error) {
    return null;
  }
};

module.exports = {
  encryptPassword,
  decryptPassword,
  createToken,
  verifyToken,
};
