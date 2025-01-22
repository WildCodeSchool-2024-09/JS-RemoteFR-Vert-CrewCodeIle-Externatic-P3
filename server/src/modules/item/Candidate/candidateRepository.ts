import databaseClient from "../../../../database/client";

import type { Result } from "../../../../database/client";

type CandidateType = {
  is_disabled: boolean;
};

class CandidateRepository {
  async create(candidate: Omit<CandidateType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO candidate (is_disabled) VALUES (?)",
      [candidate.is_disabled],
    );
    return result.insertId;
  }
}

export default new CandidateRepository();
