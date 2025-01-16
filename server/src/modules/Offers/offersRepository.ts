import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Offers = {
  id: number;
  name: string;
  ville: string;
  salaire: string;
};

class OffersRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM tag ORDER BY id DESC LIMIT 6 ;",
    );

    return rows as Offers[];
  }
}

export default new OffersRepository();
