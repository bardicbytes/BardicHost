export class Queue<T> {
  _store: T[] = [];
  push(val: T) {
    this._store.push(val);
  }
  pop(): T | undefined {
    return this._store.shift();
  }
  peek() : T | undefined
  {
    return this.hasTasks() ? this._store[0] : undefined;
  }

  hasTasks() : boolean
  {
    return this._store.length > 0;
  }
}