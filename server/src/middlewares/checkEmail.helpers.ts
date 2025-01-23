import type { RequestHandler } from "express";
import userRepository from "../modules/item/user/userRepository";

export const checkEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;

    const verified = await userRepository.readByEmail(email);

    if (verified != null) {
      console.error("L'adresse mail est déjà enregistrée");
      res.sendStatus(422);
      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};
