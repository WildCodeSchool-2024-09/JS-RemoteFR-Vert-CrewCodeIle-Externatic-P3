import type { RequestHandler } from "express";

export const candidateRegister: RequestHandler = async (req, res, next) => {
  try {
    req.body.role_id = 3;
    next();
  } catch (err) {
    next(err);
  }
};

export const companyRegister: RequestHandler = async (req, res, next) => {
  try {
    req.body.role_id = 1;
    next();
  } catch (err) {
    next(err);
  }
};
