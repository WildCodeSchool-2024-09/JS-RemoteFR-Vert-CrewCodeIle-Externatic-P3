import AbstractSeeder from "./AbstractSeeder";

class FavoriteSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "favorite", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeFavorite = {
        offer_id: this.faker.number.int({ min: 1, max: 1000 }),
        candidat_id: this.faker.number.int({ min: 1, max: 1000 }),
      };

      this.insert(fakeFavorite);
    }
  }
}

export default FavoriteSeeder;
