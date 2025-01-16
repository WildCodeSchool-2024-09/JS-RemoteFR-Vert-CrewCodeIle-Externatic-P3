import AbstractSeeder from "./AbstractSeeder";

class FavoriteSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "favorite", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeFavorite = {
        offer_id: this.faker.number.int({ min: 1, max: 10 }),
        candidat_id: this.faker.number.int({ min: 1, max: 10 }),
      };

      this.insert(fakeFavorite);
    }
  }
}

export default FavoriteSeeder;
