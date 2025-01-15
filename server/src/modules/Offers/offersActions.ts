import type { RequestHandler } from "express";
import offersRepository from "./offersRepository";

const browse: RequestHandler = async (req, res) => {
  const offersFromDB = await offersRepository.readAll();
  res.json(offersFromDB);
};

export default { browse };
