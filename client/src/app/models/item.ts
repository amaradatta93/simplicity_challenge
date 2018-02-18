export class Item {
  id: number;
  name: string;
  votes: number;

  constructor(id, name, votes) {
    this.id = id;
    this.name = name;
    this.votes = votes;
  }
}
