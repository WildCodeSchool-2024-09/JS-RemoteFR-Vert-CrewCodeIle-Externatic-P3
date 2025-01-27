import argon2 from "argon2";
import type { RequestHandler } from "express";

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

export const hashPassword: RequestHandler = async (req, res, next) => {
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

export const comparePassword: RequestHandler = async (req, res, next) => {
  try {
    const { hashed_password, dbpassword } = req.body;

    const verifiedPassword = async () => {
      return await argon2.verify(hashed_password, dbpassword);
    };

    if (!verifiedPassword) {
      req.body.dbpassword = undefined;
      res.sendStatus(403).json({
        message: "Le couple email/mot de passe ne correspond pas !",
      });
      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};
