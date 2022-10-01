export const duplicateIterable = <T>(
  iterable: Iterable<T>
): [IterableIterator<T>, IterableIterator<T>] => {
  const source = iterable[Symbol.iterator]();
  const buffers = [[], []]; // substitute in queue type for efficiency
  const DONE = Object.create(null);

  const next = (i) => {
    if (buffers[i].length !== 0) {
      return buffers[i].shift();
    }

    const x = source.next();

    if (x.done) {
      return DONE;
    }

    buffers[1 - i].push(x.value);
    return x.value;
  };

  return buffers.map(function* (_, i) {
    for (;;) {
      const x = next(i);

      if (x === DONE) {
        break;
      }

      yield x;
    }
  }) as unknown as [IterableIterator<T>, IterableIterator<T>];
};
