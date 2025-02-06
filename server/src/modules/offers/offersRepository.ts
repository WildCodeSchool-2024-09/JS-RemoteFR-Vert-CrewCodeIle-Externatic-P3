import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

type Offer = {
  id: number;
  logo: string;
  titre: string;
  wage: number;
  description: string;
  location: string;
  is_teleworking: boolean;
  contract_type: string;
  is_opened_to_disabled: boolean;
};

class OffersRepository {
  async readAllOffers() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM offer");
    return rows as Offer[];
  }
  async readOffersByCompany(companyId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM offer WHERE company_id = ?",
      [companyId],
    );
    return rows as Offer[];
  }

  async readOfferByCandidat(offerId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM offer WHERE id = ?",
      [offerId],
    );
    return rows as Offer[];
  }
}

export default new OffersRepository();
