import type { RequestHandler } from "express";
import userRepository from "../modules/item/user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.readByEmail(req.body.email);

    if (user !== null) {
      res.sendStatus(422);
      throw new Error("Adresse mail déjà existante");
    }
  } catch (err) {
    next(err);
  }
};

export default login;
