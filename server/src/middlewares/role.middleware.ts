import type { RequestHandler } from "express";
import userRepository from "../modules/item/user/UsersRepository";

export const checkCompanyRole: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userRepository.readByEmail(email);
    if (user.role_id !== 1) {
      res.sendStatus(422);
      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};
