import type { RequestHandler } from "express";
import offerRepository from "./offerRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const offers = await offerRepository.readAll();
    res.json(offers);
  } catch (err) {
    next(err);
  }
};

const readFilteredOffers: RequestHandler = async (req, res, next) => {
  try {
    const research = req.body;

    const filteredOffers = await offerRepository.readByFilter(research);
    res.send(filteredOffers);
  } catch (err) {
    next(err);
  }
};

export default { browse, readFilteredOffers };
