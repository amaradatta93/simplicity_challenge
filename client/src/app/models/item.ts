export class Item {
  id: number;
  name: string;
  votes: number;

  constructor(id: number, name: string, votes: number) {
    this.id = id;
    this.name = name;
    this.votes = votes;
  }
}
