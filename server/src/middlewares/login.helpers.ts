import argon2 from "argon2";
import type { RequestHandler } from "express";
import roleRepository from "../modules/item/role/roleRepository";
import userRepository from "../modules/item/user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.readByEmail(req.body.email);
    const role = await roleRepository.readByRole(req.body.label);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password,
    );

    if (verified) {
      const { hashed_password, ...userWithoutPassword } = user;

      const myPayLoad = {
        sub: user.id.toString(),
        label: role.label,
      };
    }
  } catch (err) {
    next(err);
  }
};

export default login;
