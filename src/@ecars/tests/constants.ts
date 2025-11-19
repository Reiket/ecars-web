import {lowerLetter, passNumber, passSpecialCharacter, upperLetter} from '@ecars/services/helpers/regex';
import {NAME_VALIDATION_CONFIG, PASSWORD_VALIDATION_CONFIG} from '@ecars/constants/validation';

export const regexPasswordTestConfig = [
  {
    name: 'upperLetter',
    regex: upperLetter,
    testCases: [
      ['A', true],
      ['aBc', true],
      ['TEST', true],
      ['123Test!', true],
      ['a', false],
      ['abc', false],
      ['123test!', false],
      ['!@#', false],
      ['', false],
    ],
  },
  {
    name: 'lowerLetter',
    regex: lowerLetter,
    testCases: [
      ['a', true],
      ['AbC', true],
      ['test', true],
      ['123Test!', true],
      ['A', false],
      ['ABC', false],
      ['123TEST!', false],
      ['!@#', false],
      ['', false],
    ],
  },
  {
    name: 'passNumber',
    regex: passNumber,
    testCases: [
      ['1', true],
      ['a1b', true],
      ['Test123!', true],
      ['0', true],
      ['a', false],
      ['abc', false],
      ['Test!', false],
      ['!@#', false],
      ['', false],
    ],
  },
  {
    name: 'passSpecialCharacter',
    regex: passSpecialCharacter,
    testCases: [
      ['!', true],
      ['@', true],
      ['#', true],
      ['$', true],
      ['%', true],
      ['^', true],
      ['&', true],
      ['*', true],
      ['test!', true],
      ['Test@123', true],
      ['a', false],
      ['Test123', false],
      ['Test_123', false],
      ['Test-123', false],
      ['Test.123', false],
      ['', false],
    ],
  },
];

export const nameValidatorTestConfig = {
  required: NAME_VALIDATION_CONFIG.MESSAGE.REQUIRED,
  minLength: {
    value: NAME_VALIDATION_CONFIG.SIZE.MIN_LENGTH,
    message: NAME_VALIDATION_CONFIG.MESSAGE.MIN_LENGTH,
  },
  maxLength: {
    value: NAME_VALIDATION_CONFIG.SIZE.MAX_LENGTH,
    message: NAME_VALIDATION_CONFIG.MESSAGE.MAX_LENGTH,
  },
};

export const passwordValidatorTestConfig = {
  required: PASSWORD_VALIDATION_CONFIG.MESSAGE.REQUIRED,
  minLength: {
    value: PASSWORD_VALIDATION_CONFIG.SIZE.MIN_LENGTH,
    message: PASSWORD_VALIDATION_CONFIG.MESSAGE.MIN_LENGTH,
  },
};
export const passwordValidateTestCases = [
  ['hasNumber', 'NoNumber', PASSWORD_VALIDATION_CONFIG.MESSAGE.NUMBER],
  ['hasNumber', 'With1Number', true],
  ['hasUpperCase', 'noupper', PASSWORD_VALIDATION_CONFIG.MESSAGE.UPPERCASE],
  ['hasUpperCase', 'WithUpper', true],
  ['hasLowerCase', 'NOLOWER', PASSWORD_VALIDATION_CONFIG.MESSAGE.LOWERCASE],
  ['hasLowerCase', 'WithLower', true],
  ['hasSpecialCharacter', 'NoSpecial', PASSWORD_VALIDATION_CONFIG.MESSAGE.SPECIAL_CHARACTER],
  ['hasSpecialCharacter', 'With!Special', true],
  ['hasSpecialCharacter', 'With@Special', true],
];

export const nameValidateTestCases = [
  ['hasUpperCase', 'test', NAME_VALIDATION_CONFIG.MESSAGE.UPPERCASE],
  ['hasUpperCase', 'TEST', true],
  ['hasUpperCase', 'Test', true],
  ['hasLowerCase', 'TEST', NAME_VALIDATION_CONFIG.MESSAGE.LOWERCASE],
  ['hasLowerCase', 'test', true],
  ['hasLowerCase', 'Test', true],
];

export const regexEmailTestConfig: [string, boolean][] = [
  ['test@example.com', true],
  ['firstname.lastname@example.com', true],
  ['email@subdomain.example.com', true],
  ['firstname+lastname@example.com', true],
  ['"email"@example.com', true],
  ['1234567890@example.com', true],
  ['email@example.name', true],
  ['email@example.museum', true],
  ['email@[123.123.123.123]', true],
  ['', false],
  ['plainaddress', false],
  ['#@%@%@#.com', false],
  ['@example.com', false],
  ['Joe Smith <email@example.com>', false],
  ['email.example.com', false],
  ['email@example@example.com', false],
  ['.email@example.com', false],
  ['email.@example.com', false],
  ['email@example.com (Joe Smith)', false],
  ['email@example', false],
  ['email@example..com', false],
  ['email@.com', false],
];
