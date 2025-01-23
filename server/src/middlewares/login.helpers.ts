import type { RequestHandler } from "express";

export const candidateLogin: RequestHandler = async (req, res, next) => {
  try {
    req.body.role_id = 3;
    next();
  } catch (err) {
    next(err);
  }
};

export const companyLogin: RequestHandler = async (req, res, next) => {
  try {
    req.body.role_id = 1;
    next();
  } catch (err) {
    next(err);
  }
};
