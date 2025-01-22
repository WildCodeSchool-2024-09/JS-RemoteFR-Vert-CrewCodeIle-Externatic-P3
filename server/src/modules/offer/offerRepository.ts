import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type OffersDataType = {
  id: number;
  titre: string;
  logo: string;
  wage: number;
  description: string;
  location: string;
  is_teleworking: boolean;
  contract_type: string[];
  company_id: number;
  is_opened_to_disabled: boolean;
};

class OfferRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM offer");

    return rows as OffersDataType[];
  }

  async readByFilter(research: Partial<OffersDataType>) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * from offer WHERE titre=? AND contract_type IN (?,?,?) AND location=? AND is_teleworking=?",
      [
        research.titre,
        research.contract_type,
        research.location,
        research.is_teleworking,
      ],
    );

    return rows as OffersDataType[];
  }
}

export default new OfferRepository();
