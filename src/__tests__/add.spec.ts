import add from '@src/math/add';

describe('Add', () => {
  it('should run', () => {
    expect(add(2, 3)).toEqual(5);
  });
});
