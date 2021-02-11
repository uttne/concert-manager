export function assertArgumentUndefined<T>(
  arg: T,
  argName: string
): asserts arg is NonNullable<T> {
  if (arg === undefined) {
    throw new Error(`'${argName}' is undefined`);
  }
  if (arg === null) {
    throw new Error(`'${argName}' is null`);
  }
}
