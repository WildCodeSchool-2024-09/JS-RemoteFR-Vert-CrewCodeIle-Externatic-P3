import type { RequestHandler } from "express";
import offersRepository from "./offersRepository";

const browseOffers: RequestHandler = async (req, res, next) => {
  try {
    const offers = await offersRepository.readAllOffers();
    res.json(offers);
  } catch (err) {
    next(err);
  }
};

const browseOffersByCompany: RequestHandler = async (req, res, next) => {
  try {
    const companyId = Number.parseInt(req.query.companyId as string);
    const offers = await offersRepository.readOffersByCompany(companyId);
    res.json(offers);
  } catch (err) {
    next(err);
  }
};

export default { browseOffers, browseOffersByCompany };
