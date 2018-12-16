import { SemVer } from './semver'
export { coerce } from './coerce'
export { intersects } from './intersects'
export { prerelease } from './prerelease'
export { outside } from './outside'
export { gtr } from './gtr'
export { ltr } from './ltr'
export { validRange } from './validRange'
export { minSatisfying } from './minSatisfying'
export { maxSatisfying } from './maxSatisfying'
export { Comparator, Range, satisfies, toComparators } from './Range'
export { cmp } from './cmp'
export { lte } from './lte'
export { gte } from './gte'
export { neq } from './neq'
export { eq } from './eq'
export { lt } from './lt'
export { gt } from './gt'
export { rsort } from './rsort'
export { sort } from './sort'
export { rcompare } from './rcompare'
export { compareLoose } from './compareLoose'
export { compare } from './compare'
export { patch } from './patch'
export { minor } from './minor'
export { major } from './major'
export { rcompareIdentifiers } from './rcompareIdentifiers'
export { compareIdentifiers } from './compareIdentifiers'
export { diff } from './diff'
export { inc } from './inc'
export { clean } from './clean'
export { valid } from './valid'
export { parse } from './parse'
export { src, re } from './src'

const _SemVer = SemVer
export { _SemVer as SemVer }

export default SemVer

export const SEMVER_SPEC_VERSION = '2.0.0'