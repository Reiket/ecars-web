import {getErrorMessage} from '@ecars/services/helpers/errors';
import type {ComplexErrorTestCasesType, ErrorTestCasesType} from '@ecars/tests/constants';
import {errorTestConfig} from '@ecars/tests/constants';

describe.concurrent('getErrorMessage', () => {
  const {complex, cases} = errorTestConfig.getErrorMessage;

  test.each<ErrorTestCasesType>(cases)('extracts correct message for %s', (_, input, expectedMessage) => {
    const complexValue = typeof input === 'string' ? complex[input as ComplexErrorTestCasesType] : undefined;

    const error = complexValue ?? input;

    expect(getErrorMessage(error)).toBe(expectedMessage);
  });
});
