import { compare } from './compare'

export function lte (a, b, loose) {
  return compare(a, b, loose) <= 0
}
