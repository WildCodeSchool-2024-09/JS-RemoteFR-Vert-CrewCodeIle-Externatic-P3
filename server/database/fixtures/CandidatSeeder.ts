import AbstractSeeder from "./AbstractSeeder";

class CandidatSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "candidat", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeCandidat = {
        user_id: this.faker.number.int({ min: 1, max: 1000 }),
        cv: "jean-paul-tartonflon.pdf",
        photo:
          "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg",
        is_disabled: this.faker.datatype.boolean(),
      };

      this.insert(fakeCandidat);
    }
  }
}

export default CandidatSeeder;
