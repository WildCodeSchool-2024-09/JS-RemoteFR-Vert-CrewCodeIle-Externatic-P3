import type { RequestHandler } from "express";
import offerRepository from "./offerRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const offers = await offerRepository.readAll();

    // Respond with the items in JSON format
    res.json(offers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readFilteredOffers: RequestHandler = async (req, res, next) => {
  try {
    const research = req.body;

    // if (research.titre === undefined) {
    //   research.titre === titre;
    // }
    // if (research.contract_type === undefined) {
    //   research.contract_type === contract_type;
    // }
    // if (research.location === undefined) {
    //   research.location === location;
    // }
    // if (research.is_teleworking === undefined) {
    //   research.is_teleworking === is_teleworking;
    // }

    const filteredOffers = await offerRepository.readByFilter(research);
    res.send(filteredOffers);
  } catch (err) {
    next(err);
  }
};

export default { browse, readFilteredOffers };
