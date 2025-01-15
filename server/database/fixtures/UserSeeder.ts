import AbstractSeeder from "./AbstractSeeder";

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeUser = {
        firstname: this.faker.person.firstName(),
        lastname: this.faker.person.lastName(),
        email: this.faker.internet.email(),
        password: this.faker.internet.password(),
        address: this.faker.address.streetAddress(),
        postal_code: this.faker.location.zipCode(),
        city: this.faker.location.city(),
        tel: this.faker.phone.number(),
        role_id: this.faker.number.int({ min: 1, max: 3 }),
        is_active: this.faker.datatype.boolean(),
        is_role: this.faker.datatype.boolean(),
      };

      this.insert(fakeUser);
    }
  }
}

export default UserSeeder;
