import type { RequestHandler } from "express";
import roleRepository from "../modules/item/role/roleRepository";
import userRepository from "../modules/item/user/userRepository";

export const candidateLogin: RequestHandler = async (req, res, next) => {
  try {
    req.body.role_id = 3;
    next();
  } catch (err) {
    next(err);
  }
};
