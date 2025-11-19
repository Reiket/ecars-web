import {getErrorMessage} from '@ecars/services/helpers/errors';

type ErrorTestCasesType = [string, unknown, string];
type ComplexErrorTestCasesType = keyof typeof testData.getErrorMessage.complex;
const testData = {
  getErrorMessage: {
    complex: {
      serverError: {
        status: 500,
        data: {
          error: {
            status: 500,
            name: 'InternalServerError',
            message: 'Database connection failed',
            details: {},
          },
          data: null,
        },
      },
      badDataStructure: {data: {info: 'Some data'}},
      badMessageType: {message: {text: 'Not a string'}},
    },
    cases: [
      ['server error structure (RTK Query)', 'serverError', 'Database connection failed'],
      ['standard Error object', new Error('Standard error message'), 'Standard error message'],
      ['custom object with message property', {message: 'Custom object error'}, 'Custom object error'],
      ['string', 'Just a string error', 'Just a string error'],
      ['number', 12345, '12345'],
      ['null', null, 'null'],
      ['undefined', undefined, 'undefined'],
      ['empty object', {}, '[object Object]'],
      ['fallback for "data" without "error.message"', 'badDataStructure', '[object Object]'],
      ['fallback for non-string "message"', 'badMessageType', '[object Object]'],
    ] as ErrorTestCasesType[],
  },
};

describe.concurrent('getErrorMessage', () => {
  const {complex, cases} = testData.getErrorMessage;

  test.each<ErrorTestCasesType>(cases)('extracts correct message for %s', (_, input, expectedMessage) => {
    const complexValue = typeof input === 'string' ? complex[input as ComplexErrorTestCasesType] : undefined;

    const error = complexValue ?? input;

    expect(getErrorMessage(error)).toBe(expectedMessage);
  });
});
