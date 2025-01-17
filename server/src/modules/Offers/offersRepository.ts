import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Offers = {
  id: number;
  description: string;
  wage: number;
  salaire: string;
};

class OffersRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM offer;");

    return rows as Offers[];
  }
}

export default new OffersRepository();
