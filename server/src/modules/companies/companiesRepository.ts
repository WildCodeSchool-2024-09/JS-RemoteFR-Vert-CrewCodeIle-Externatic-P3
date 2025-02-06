import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Company = {
  id: number;
  company_name: string;
  sector: string;
  employee_number?: number;
  user_id: number;
  website_link: string;
  description: string;
};

class CompaniesRepository {
  async readAllCompanies() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM company");
    return rows as Company[];
  }
}

export default new CompaniesRepository();
