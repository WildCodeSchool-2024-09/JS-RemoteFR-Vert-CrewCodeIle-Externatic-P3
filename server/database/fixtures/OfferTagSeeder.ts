import AbstractSeeder from "./AbstractSeeder";

class OfferTagSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "offer_tag", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeOfferTag = {
        offer_id: this.faker.number.int({ min: 1, max: 1000 }),
        tag_id: this.faker.number.int({ min: 1, max: 1000 }),
      };

      this.insert(fakeOfferTag);
    }
  }
}

export default OfferTagSeeder;
