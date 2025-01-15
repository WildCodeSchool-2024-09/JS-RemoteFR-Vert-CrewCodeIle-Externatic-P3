import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  adress: string;
  postal_code: number;
  city: string;
  tel: number;
  role_id: number;
  is_active: boolean;
  is_role: boolean;
};

class UserRepository {
  async create(user: Omit<UserType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, email, password, adress, postal_code, city, tel, is_active, is_role, role_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.adress,
        user.postal_code,
        user.city,
        user.tel,
        user.is_active,
        user.is_role,
        user.role_id,
      ],
    );
    return result.insertId;
  }

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await databaseClient.query<Rows>(
      `
      select * from user where id = ?
      `,
      [id],
    );

    return rows[0] as UserType;
  }

  async update(user: UserType) {
    const [result] = await databaseClient.query<Result>(
      `UPDATE user 
       SET firstname = ?, lastname = ?, email = ?, password = ?, adress = ?, postal_code = ?, city = ?, tel = ?, is_active = ?, is_role = ?, role_id = ? 
       WHERE id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.adress,
        user.postal_code,
        user.city,
        user.tel,
        user.is_active,
        user.is_role,
        user.role_id,
      ],
    );

    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from user where id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new UserRepository();
