import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Offers = {
  id: number;
  name: string;
};

class OffersRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "category" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM tag");

    // Return the array of categories
    return rows as Offers[];
  }
}

export default new OffersRepository();
