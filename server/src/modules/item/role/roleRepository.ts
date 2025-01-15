import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

type RoleType = {
  id: number;
  label: string;
};

class RoleRepository {
  async create(role: Omit<RoleType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO role (label) VALUES (?)",
      [role.label],
    );
    return result.insertId;
  }

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await databaseClient.query<Rows>(
      `
      select * from role where id = ?
      `,
      [id],
    );

    return rows[0] as RoleType;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from role");

    return rows as RoleType[];
  }

  async update(role: RoleType) {
    const [result] = await databaseClient.query<Result>(
      `UPDATE role 
       SET label = ?
       WHERE id = ?`,
      [role.label],
    );

    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from role where id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new RoleRepository();
