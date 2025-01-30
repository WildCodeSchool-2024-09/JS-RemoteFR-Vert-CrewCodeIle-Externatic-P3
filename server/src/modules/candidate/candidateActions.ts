import type { RequestHandler } from "express";

import CandidateRepository from "./CandidateRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newCandidate = {
      cv: req.body.cv,
      photo: req.body.photo,
      user_id: req.body.user_id,
      is_disabled: req.body.is_disabled,
    };
    const insertId = await CandidateRepository.create(newCandidate);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { add };
