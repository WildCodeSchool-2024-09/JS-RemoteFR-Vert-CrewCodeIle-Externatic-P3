import type { RequestHandler } from "express";
import companiesRepository from "./companiesRepository";

const browseCompanies: RequestHandler = async (req, res, next) => {
  try {
    const companies = await companiesRepository.readAllCompanies();
    res.json(companies);
  } catch (err) {
    next(err);
  }
};

export default { browseCompanies };
