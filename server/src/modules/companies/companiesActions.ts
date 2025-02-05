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

const anonymizeCompany: RequestHandler = async (req, res, next) => {
  const companyId = Number.parseInt(req.params.id);
  try {
    await companiesRepository.anonymizeCompany(companyId);
    res.status(204).send(); // Réponse sans contenu
  } catch (err) {
    console.error("Erreur lors de l'anonymisation :", err);
    next(err);
  }
};

export default { browseCompanies, anonymizeCompany };
