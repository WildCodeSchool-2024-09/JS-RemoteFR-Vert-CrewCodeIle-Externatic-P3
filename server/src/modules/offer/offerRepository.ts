import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type OffersDataType = {
  id: number;
  title: string;
  logo: string;
  wage: number;
  description: string;
  location?: string;
  is_teleworking?: boolean;
  contract_type?: [];
  company_id: number;
  is_opened_to_disabled: boolean;
};

class OfferRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM offer");

    return rows as OffersDataType[];
  }

  async readByFilter(research: Partial<OffersDataType>) {
    if (research.contract_type) {
      const placeholder = research.contract_type.map(() => "?").join(",");

      const [rows] = await databaseClient.query<Rows>(
        `SELECT * FROM offer WHERE title=? AND contract_type IN (${placeholder}) AND location=? AND is_teleworking=?`,
        [
          research.title,
          ...research.contract_type,
          research.location,
          research.is_teleworking,
        ],
      );
      return rows as OffersDataType[];
    }

    if (research.contract_type === undefined) {
      const [rows] = await databaseClient.query<Rows>(
        "SELECT * FROM offer WHERE titre=? AND location=? AND is_teleworking=?",
        [research.title, research.location, research.is_teleworking],
      );
      return rows as OffersDataType[];
    }
  }
}

export default new OfferRepository();
