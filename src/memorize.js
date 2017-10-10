import type { Func1, Func2, Func3, Func } from '../Types/funcs';

export const memorize1 = <A, R>(func: Func1<A, R>): Func1<A, R> => {
  let _a: A;
  let _r: R;
  return (a: A): R => {
    if (a !== _a) {
      _a = a;
      _r = func(_a);
    }
    return _r;
  };
};

export const memorize2 = <A, B, R>(func: Func2<A, B, R>): Func2<A, B, R> => {
  let _a: A;
  let _b: B;
  let _r: R;
  return (a: A, b: B): R => {
    if (a !== _a || b !== _b) {
      _a = a;
      _b = b;
      _r = func(_a, _b);
    }
    return _r;
  };
};

export const memorize3 = <A, B, C, R>(func: Func3<A, B, C, R>): Func3<A, B, C, R> => {
  let _a: A;
  let _b: B;
  let _c: C;
  let _r: R;
  return (a: A, b: B, c: C): R => {
    if (a !== _a || b !== _b || c !== _c) {
      _a = a;
      _b = b;
      _c = c;
      _r = func(_a, _b, _c);
    }
    return _r;
  };
};

const shallowCompare = (args: any[], _args?: ?any[]): boolean => (
  _args == null ||
  _args.length !== args.length ||
  _args.some((a, i) => a !== args[i])
);

export const memorizeN = <T, _> (func: Func<T>): Func<T> => {
  let _a: any[];
  let _r: T;
  return (...a: any[]): R => {
    if (shallowCompare(a, _a)) {
      _a = a;
      _r = func(..._a);
    }
    return _r;
  };
};

const memorizers = [memorizeN, memorize1, memorize2, memorize3];

export type MemorizableType <A, B, C, R> = (
  () => any | Func1<A, R> | Func2<A, B, R> | Func3<A, B, C, R> | Func<R>
);

const memorize = <A, B, C, R>(func: MemorizableType<A, B, C, R>): MemorizableType<A, B, C, R> => (
  (memorizers[func.length] || memorizeN)(func)
);

export { memorize };
