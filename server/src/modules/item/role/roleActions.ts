import type { RequestHandler } from "express";
import roleRepository from "./roleRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newRole = {
      label: req.body.label,
    };
    const insertId = await roleRepository.create(newRole);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { add };
