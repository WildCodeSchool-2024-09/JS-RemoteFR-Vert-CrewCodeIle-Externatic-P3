import type { RequestHandler } from "express";
import ApplyRepository from "./ApplyRepository";

const addApply: RequestHandler = async (req, res, next) => {
  try {
    const newCandidature = {
      candidate_id: req.body.candidate_id,
      offer_id: req.body.offer_id,
    };

    const insertId = await ApplyRepository.create(newCandidature);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { addApply };
