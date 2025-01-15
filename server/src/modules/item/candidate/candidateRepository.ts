import databaseClient from "../../../../database/client";
import type { Result, Rows } from "../../../../database/client";

type Candidate = {
  cv: string;
  photo: string;
  user_id: number;
  is_disabled: boolean;
};

class CandidateRepository {
  async create(candidate: Candidate) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO candidate(cv, photo, user_id, is_disabled) VALUES(?,?,?,?)",
      [candidate.cv, candidate.photo, candidate.user_id, candidate.is_disabled],
    );
  }
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM candidate");

    return rows as Candidate[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM candidate WHERE id=?",
      [id],
    );
    return rows[0] as Candidate;
  }

  async update(candidate: Omit<Candidate, "user_id">) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE TABLE candidate SET cv= ?, photo= ?, is_disabled= ? WHERE id=?",
      [candidate.cv, candidate.photo, candidate.is_disabled],
    );
  }
}

export default new CandidateRepository();
