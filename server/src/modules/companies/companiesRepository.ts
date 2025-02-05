import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

type Company = {
  id: number;
  company_name: string;
  sector: string;
  employee_number: number;
  user_id: number;
  website_link: string;
  description: string;
};

class CompaniesRepository {
  async readAllCompanies() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM company");
    return rows as Company[];
  }
  async anonymizeCompany(companyId: number) {
    await databaseClient.query(
      `
      UPDATE company 
      SET 
        company_name = '###', 
        sector = '###', 
        employee_number = NULL, 
        website_link = '###', 
        description = '###' 
      WHERE id = ?`,
      [companyId],
    );
  }
}

export default new CompaniesRepository();
