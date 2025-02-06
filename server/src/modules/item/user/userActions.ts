import type { RequestHandler } from "express";

import userRepository from "./UsersRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      hashed_password: req.body.hashed_password,
      address: req.body.address,
      postal_code: req.body.postal_code,
      city: req.body.city,
      tel: req.body.tel,
      is_active: req.body.is_active,
      is_role: req.body.is_role,
      role_id: req.body.role_id,
    };
    const insertId = await userRepository.create(newUser);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const browseCandidates: RequestHandler = async (req, res, next) => {
  try {
    const role = await userRepository.getRoleByLabel("Candidat");
    if (role) {
      const candidates = await userRepository.getAllCandidates(role.id);
      res.json(candidates);
    } else {
      res.status(404).json({ message: "Rôle 'candidate' non trouvé." });
    }
  } catch (err) {
    next(err);
  }
};

const browseCompanies: RequestHandler = async (req, res, next) => {
  try {
    const role = await userRepository.getRoleByLabel("Company");
    if (role) {
      const companies = await userRepository.getAllCompanies(role.id);
      res.json(companies);
    } else {
      res.status(404).json({ message: "Rôle 'company' non trouvé." });
    }
  } catch (err) {
    next(err);
  }
};

const anonymizeCandidate: RequestHandler = async (req, res, next) => {
  const candidateId = Number.parseInt(req.params.id);

  try {
    await userRepository.anonymizeCandidate(candidateId);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

const anonymizeCompany: RequestHandler = async (req, res, next) => {
  const companyId = Number.parseInt(req.params.id);

  try {
    await userRepository.anonymizeCompany(companyId);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

export default {
  add,
  browseCandidates,
  browseCompanies,
  anonymizeCandidate,
  anonymizeCompany,
};
