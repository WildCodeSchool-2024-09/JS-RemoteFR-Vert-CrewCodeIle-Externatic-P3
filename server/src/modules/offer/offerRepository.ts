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
        `SELECT * FROM offer WHERE (title LIKE CONCAT('%', ?, '%')) AND (contract_type IS NULL OR contract_type IN (${placeholder})) AND (location IS NULL OR location LIKE CONCAT('%', ?, '%')) AND (is_teleworking IS NULL OR is_teleworking = ?)`,
        [
          research.title,
          ...(research.contract_type || null),
          research.location || null,
          research.is_teleworking || null,
        ],
      );
      return rows as OffersDataType[];
    }

    if (!research.contract_type) {
      const [rows] = await databaseClient.query<Rows>(
        "SELECT * FROM offer WHERE (title LIKE CONCAT('%', ?, '%')) AND (location IS NULL OR location LIKE CONCAT('%', ?, '%')) AND (is_teleworking IS NULL OR is_teleworking = ?)",
        [
          research.title,
          research.location || null,
          research.is_teleworking || null,
        ],
      );
      return rows as OffersDataType[];
    }
  }

  async readByName(user_id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT firstname, lastname FROM user WHERE id=?",
      [user_id],
    );
    return rows;
  }
}

export default new OfferRepository();
