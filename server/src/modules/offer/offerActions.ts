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
    const { titre, contract_type, location, is_teleworking } = req.body;
    const research = { titre, contract_type, location, is_teleworking };

    if (titre === undefined) {
      research.titre === titre;
    }
    if (contract_type === undefined) {
      research.contract_type === contract_type;
    }
    if (location === undefined) {
      research.location === location;
    }
    if (is_teleworking === undefined) {
      research.is_teleworking === is_teleworking;
    }

    const filteredOffers = await offerRepository.readByFilter(research);
    res.send(filteredOffers);
  } catch (err) {
    next(err);
  }
};

export default { browse, readFilteredOffers };
