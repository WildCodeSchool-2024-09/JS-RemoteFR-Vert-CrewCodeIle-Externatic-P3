import argon2 from "argon2";
import type { RequestHandler } from "express";

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashed_password = await argon2.hash(password, hashingOptions);
    req.body.hashed_password = hashed_password;
    req.body.password = hashed_password;

    next();
  } catch (err) {
    next(err);
  }
};

export default hashPassword;
