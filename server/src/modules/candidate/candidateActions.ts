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
    console.log(photoPath);
    console.log(cvPath);
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

const add: RequestHandler = async (req, res, next) => {
  try {
    const newCandidate = {
      cv: req.body.cv,
      photo: req.body.photo,
      user_id: req.body.user_id,
      is_disabled: req.body.is_disabled,
    };
    console.log(newCandidate);
    const insertId = await CandidateRepository.create(newCandidate);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { add, uploadFiles };
