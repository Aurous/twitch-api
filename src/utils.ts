// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonToURLEncoded(object: Record<string, any>) {
  return Object
    .entries(object)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}
