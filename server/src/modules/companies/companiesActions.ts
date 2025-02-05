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

const readCompanyProfil: RequestHandler = async (req, res, next) => {
  try {
    const user_id = Number(req.params.id);
    const company = await companiesRepository.read(user_id);

    if (company == null) {
      res.sendStatus(404);
    } else {
      res.json(company);
    }
  } catch (err) {
    next(err);
  }
};

const uploadCompany: RequestHandler = async (req, res, next) => {
  try {
    const newCompany = {
      user_id: req.body.user_id,
      is_disabled: req.body.is_disabled,
    };
    const insertId = await companiesRepository.create(newCompany);

    res.status(201).json();
  } catch (err) {
    next(err);
  }
};

export default { browseCompanies, readCompanyProfil, uploadCompany };
