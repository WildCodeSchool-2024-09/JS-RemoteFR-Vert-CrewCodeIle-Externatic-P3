import AbstractSeeder from "./AbstractSeeder";

class RoleSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "role", truncate: true });
  }

  async run() {
    for (let i = 0; i < 10; i++) {
      const fakeRole = {
        label: this.faker.helpers.arrayElement(["Company", "Candidat", "Admi"]),
      };

      this.insert(fakeRole);
    }
  }
}

export default RoleSeeder;
