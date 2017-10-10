import type { Func1, Func2, Func3, Func } from '../Types/funcs';
import { MemorizableType } from './memorize';

type Decorator = MemorizableType => MemorizableType;

export const combineN1Selectors = <A, R> (
  a: Func<A>, s: Func1<A, R>, m?: Decorator = null
): Func<R> => {
  const _s = m != null && m(s) || s;
  return (...args) => _s(a(...args));
};

export const combineN2Selectors = <A, B, R> (
  a: Func<A>, b: Func<B>, s: Func2<A, B, R>, m?: Decorator = null
): Func<R> => {
  const _s = m != null && m(s) || s;
  return (...args) => _s(a(...args), b(...args));
};

export const combineN3Selectors = <A, B, C, R> (
  a: Func<A>, b: Func<B>, c: Func<C>, s: Func3<A, B, C, R>, m?: Decorator = null
): Func<R> => {
  const _s = m != null && m(s) || s;
  return (...args) => _s(a(...args), b(...args), c(...args));
};

const apply = args => func => func(...args);

export const combineNNSelectors = <R> (
  inputs: Array<() => mixed>, s: Func<R>, m?: Decorator = null
): Func<R> => {
  const _s = m != null && m(s) || s;
  return (...args) => _s(...inputs.map(apply(args)));
};
