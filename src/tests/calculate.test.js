import calculate from '../logic/calculate';

describe('Operate File Tests', () => {
  it('buttonName === AC', () => {
    let item = {
      total: '50',
      next: '75',
      operation: 'x',
    };

    const expectedItem = {
      total: null,
      next: null,
      operation: null,
    };
    item = calculate(item, 'AC');
    expect(item).toEqual(expectedItem);
  });
  it('buttonName === .', () => {
    let item = {
      total: '50',
      next: '75',
      operation: '.',
    };

    const expectedItem = {
      total: '50',
      next: '75.',
      operation: '.',
    };
    item = calculate(item, '.');
    expect(item).toEqual(expectedItem);
  });
});
