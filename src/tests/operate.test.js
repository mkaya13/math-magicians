import operate from '../logic/operate';

describe('Task 1 checks the operate 5 basic operations', () => {
  it('sum', () => {
    const inputData = ['5', '7', '+'];
    expect(operate(...inputData)).toMatch('12');
  });
  it('subtraction', () => {
    const inputData = ['20', '10', '-'];
    expect(operate(...inputData)).toMatch('10');
  });
  it('multiplication', () => {
    const inputData = ['4', '9', 'x'];
    expect(operate(...inputData)).toMatch('36');
  });
  it('division', () => {
    const inputData = ['50', '10', '÷'];
    expect(operate(...inputData)).toMatch('5');
  });
  it('modulo operation', () => {
    const inputData = ['20', '7', '%'];
    expect(operate(...inputData)).toMatch('6');
  });
});
