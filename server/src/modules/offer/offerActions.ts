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
    // console.log(filteredOffers);
  } catch (err) {
    next(err);
  }
};

const readFirstnameLastname: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number.parseInt(req.params.id);
    const userName = await offerRepository.readByName(userId);
    res.send(userName);
  } catch {}
};

export default { browse, readFilteredOffers, readFirstnameLastname };
