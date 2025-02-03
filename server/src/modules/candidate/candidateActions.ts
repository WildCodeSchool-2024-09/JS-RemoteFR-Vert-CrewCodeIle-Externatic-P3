import type { RequestHandler } from "express";
import path from "node:path";
import CandidateRepository from "./CandidateRepository";

const uploadFiles: RequestHandler = async (req, res, next) => {
  try {
    const { photo, cv } = req.files as {
      photo: Express.Multer.File[];
      cv: Express.Multer.File[];
    };
    const photoPath = path.join(__dirname, "uploads", photo[0].filename);
    const cvPath = path.join(__dirname, "uploads", cv[0].filename);

    const newCandidate = {
      cv: cvPath,
      photo: photoPath,
      user_id: req.body.user_id,
      is_disabled: req.body.is_disabled,
    };
    const insertId = await CandidateRepository.create(newCandidate);

    res.status(201).json();
  } catch (err) {
    next(err);
  }
};

export default { uploadFiles };
