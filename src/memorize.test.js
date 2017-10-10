import { memorize } from './memorize';

describe('memorize', () => {
  it('should memorize func1', () => {
    const f = x => [x];
    const fn = memorize(f);
    const res = fn(1);
    expect(res).toEqual([1]);
    expect(fn(1)).toBe(res);
  });

  it('should return new value if argument changed for memorized func1', () => {
    const f = x => [x];
    const fn = memorize(f);
    const res = fn({ x: 1 });
    expect(res).toEqual([{ x: 1 }]);
    expect(fn({ x: 1 })).not.toBe(res);
  });

  it('should memorize func2', () => {
    const f = (x, y) => [x, y];
    const fn = memorize(f);
    const res = fn(1, 2);
    expect(res).toEqual([1, 2]);
    expect(fn(1, 2)).toBe(res);
  });

  it('should return a new value if one of args is changed for memorize func2 (arg2)', () => {
    const f = (x, y) => [x, y];
    const fn = memorize(f);
    const a1 = { x: 1 };
    const a2 = { y: 2 };
    const res = fn(a1, a2);
    expect(res).toEqual([a1, a2]);
    expect(fn(a1, { y: 2 })).not.toBe(res);
  });

  it('should return a new value if one of args is changed for memorize func2 (arg1)', () => {
    const f = (x, y) => [x, y];
    const fn = memorize(f);
    const a1 = { x: 1 };
    const a2 = { y: 2 };
    const res = fn(a1, a2);
    expect(res).toEqual([a1, a2]);
    expect(fn({ x: 1 }, a2)).not.toBe(res);
  });

  it('should memorize func3', () => {
    const f = (x, y, z) => [x, y, z];
    const fn = memorize(f);
    const res = fn(1, 2, 3);
    expect(res).toEqual([1, 2, 3]);
    expect(fn(1, 2, 3)).toBe(res);
  });

  it('should return a new value if one of args is changed for memorize func3 (arg3)', () => {
    const f = (x, y, z) => [x, y, z];
    const fn = memorize(f);
    const a1 = { x: 1 };
    const a2 = { y: 2 };
    const a3 = { z: 3 };
    const res = fn(a1, a2, a3);
    expect(res).toEqual([a1, a2, a3]);
    expect(fn(a1, a2, { z: 3 })).not.toBe(res);
  });

  it('should return a new value if one of args is changed for memorize func3 (arg2)', () => {
    const f = (x, y, z) => [x, y, z];
    const fn = memorize(f);
    const a1 = { x: 1 };
    const a2 = { y: 2 };
    const a3 = { z: 3 };
    const res = fn(a1, a2, a3);
    expect(res).toEqual([a1, a2, a3]);
    expect(fn(a1, { y: 2 }, a3)).not.toBe(res);
  });

  it('should return a new value if one of args is changed for memorize func3 (arg1)', () => {
    const f = (x, y, z) => [x, y, z];
    const fn = memorize(f);
    const a1 = { x: 1 };
    const a2 = { y: 2 };
    const a3 = { z: 3 };
    const res = fn(a1, a2, a3);
    expect(res).toEqual([a1, a2, a3]);
    expect(fn({ x: 1 }, a2, a3)).not.toBe(res);
  });

  it('should memorize func4', () => {
    const f = (x, y, z, t) => [x, y, z, t];
    const fn = memorize(f);
    const res = fn(1, 2, 3, 4);
    expect(res).toEqual([1, 2, 3, 4]);
    expect(fn(1, 2, 3, 4)).toBe(res);
  });

  it('should return a new value if one of args is changed for memorize func4 (arg4)', () => {
    const f = (x, y, z, t) => [x, y, z, t];
    const fn = memorize(f);
    const a1 = { x: 1 };
    const a2 = { y: 2 };
    const a3 = { z: 3 };
    const a4 = { t: 4 };
    const res = fn(a1, a2, a3, a4);
    expect(res).toEqual([a1, a2, a3, a4]);
    expect(fn(a1, a2, a3, { t: 4 })).not.toBe(res);
  });

  it('should return a new value if one of args is changed for memorize func4 (arg3)', () => {
    const f = (x, y, z, t) => [x, y, z, t];
    const fn = memorize(f);
    const a1 = { x: 1 };
    const a2 = { y: 2 };
    const a3 = { z: 3 };
    const a4 = { t: 4 };
    const res = fn(a1, a2, a3, a4);
    expect(res).toEqual([a1, a2, a3, a4]);
    expect(fn(a1, a2, { z: 3 }, a4)).not.toBe(res);
  });

  it('should return a new value if one of args is changed for memorize func4 (arg2)', () => {
    const f = (x, y, z, t) => [x, y, z, t];
    const fn = memorize(f);
    const a1 = { x: 1 };
    const a2 = { y: 2 };
    const a3 = { z: 3 };
    const a4 = { t: 4 };
    const res = fn(a1, a2, a3, a4);
    expect(res).toEqual([a1, a2, a3, a4]);
    expect(fn(a1, { y: 2 }, a3, a4)).not.toBe(res);
  });

  it('should return a new value if one of args is changed for memorize func4 (arg1)', () => {
    const f = (x, y, z, t) => [x, y, z, t];
    const fn = memorize(f);
    const a1 = { x: 1 };
    const a2 = { y: 2 };
    const a3 = { z: 3 };
    const a4 = { t: 4 };
    const res = fn(a1, a2, a3, a4);
    expect(res).toEqual([a1, a2, a3, a4]);
    expect(fn({ x: 1 }, a2, a3, a4)).not.toBe(res);
  });

  it('should memorize func(...args)', () => {
    const f = (...args) => args.slice();
    const fn = memorize(f);
    const res = fn(1, 2, 3, 4, 5);
    expect(res).toEqual([1, 2, 3, 4, 5]);
    expect(fn(1, 2, 3, 4, 5)).toBe(res);
  });
});
