import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

type Offer = {
  id: number;
  logo: string;
};

class OffersRepository {
  async readAllOffers() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM offer");
    return rows as Offer[];
  }
}

export default new OffersRepository();
