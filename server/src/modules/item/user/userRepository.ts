import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  address: string;
  postal_code: string;
  city: string;
  tel: string;
};

class UserRepository {
  async create(user: Omit<UserType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, email, password, address, postal_code, city, tel) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.email,
        user.password,
        user.address,
        user.postal_code,
        user.city,
        user.tel,
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

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from user");

    return rows as UserType[];
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
        user.address,
        user.postal_code,
        user.city,
        user.tel,
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
