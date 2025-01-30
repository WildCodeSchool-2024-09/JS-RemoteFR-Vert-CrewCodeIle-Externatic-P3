import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";

export type CandidateType = {
  id: number;
  cv: string;
  photo: string;
  user_id: number;
  is_disabled: boolean;
};

class CandidateRepository {
  async create(candidate: Omit<CandidateType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO candidate (cv, photo, user_id, is_disabled) VALUES (?,?,?,?)",
      [candidate.cv, candidate.photo, candidate.user_id, candidate.is_disabled],
    );
    return result.insertId;
  }
}

export default new CandidateRepository();
