export interface Revertible {
  isChanged(): boolean;
  cancelChanges(): void;
}

export interface Comparable<T> {
  equals(t: T): boolean;
}

export default class Item implements Revertible, Comparable<Item> {
  equals(t: Item): boolean {
    return this.text === t.text && this.value === t.value;
  }
  isChanged(): boolean {
    return this.text !== this.freeze.text || this.value !== this.freeze.value;
  }

  cancelChanges(): void {
    this.text = this.freeze.text;
    this.value = this.freeze.value;
  }

  public text;
  public value: number = 0;

  private freeze: any;

  constructor(text: string, value: number = 0) {
    this.text = text;
    this.value = value;
    this.freeze = Object.assign({}, {text, value});
  }
}
