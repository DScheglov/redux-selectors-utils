// @flow

export type Func1 <T1, T2> = (a: T1) => T2;
export type Func2 <T1, T2, T3> = (a: T1, b: T2) => T3;
export type Func3 <T1, T2, T3, T4> = (a: T1, b: T2, c: T3) => T4;
export type Func <T> = (...args: Array<any>) => T;
