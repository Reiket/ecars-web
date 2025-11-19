import {describe, expect, test} from 'vitest';
import type {FieldPath, FieldValues, UseFormGetValues} from 'react-hook-form';

import {emailValidate} from '@ecars/services/helpers/regex';
import {
  checkboxValidator,
  confirmPassValidator,
  emailLoginValidator,
  emailValidator,
  nameValidator,
  passwordLoginValidator,
  passwordValidator,
} from '@ecars/services/helpers/validators';
import {
  CONFIRM_PASSWORD_VALIDATION_CONFIG,
  EMAIL_VALIDATION_CONFIG,
  PASSWORD_VALIDATION_CONFIG,
  POLICY_VALIDATION_CONFIG,
} from '@ecars/constants/validation';
import {
  nameValidateTestCases,
  nameValidatorTestConfig,
  passwordValidateTestCases,
  passwordValidatorTestConfig,
  regexEmailTestConfig,
  regexPasswordTestConfig,
} from '@ecars/tests/constants';

const mockGetValues = <T extends FieldValues>(valueMap: Record<string, string>): UseFormGetValues<T> => {
  const implementation = (field: FieldPath<T>) => {
    return valueMap[field];
  };

  return implementation as UseFormGetValues<T>;
};

type passwordValidatorTestType = keyof typeof passwordValidator.validate;

describe('Validation Objects', () => {
  describe('nameValidator', () => {
    test('should have correct wiring from constants', () => {
      expect(nameValidator).toEqual(expect.objectContaining(nameValidatorTestConfig));
    });

    test.each(nameValidateTestCases)('validate.%s should return %p for input "%s"', (rule, input, expected) => {
      const validatorFn = nameValidator.validate[rule as keyof typeof nameValidator.validate];
      expect(validatorFn(String(input))).toBe(expected);
    });
  });

  test('should have correct wiring from constants', () => {
    expect(emailValidator.required).toBe(EMAIL_VALIDATION_CONFIG.MESSAGE.REQUIRED);
    expect(emailValidator.pattern.value).toBe(emailValidate);
    expect(emailValidator.pattern.message).toBe(EMAIL_VALIDATION_CONFIG.MESSAGE.INVALID);
  });

  describe('passwordValidator', () => {
    test('should have correct wiring from constants', () => {
      expect(passwordValidator).toEqual(expect.objectContaining(passwordValidatorTestConfig));
    });

    test.each(passwordValidateTestCases)('validate.%s should return %p for input "%s"', (rule, input, expected) => {
      const validatorFn = passwordValidator.validate[rule as passwordValidatorTestType];
      expect(validatorFn(String(input))).toBe(expected);
    });
  });

  describe('confirmPassValidator', () => {
    test('should return true if passwords match', () => {
      const getValues = mockGetValues({password: 'Password123!'});
      const validator = confirmPassValidator(getValues, 'password');
      expect(validator.validate('Password123!', {})).toBe(true);
    });

    test('should return error message if passwords do not match', () => {
      const getValues = mockGetValues({password: 'Password123!'});
      const validator = confirmPassValidator(getValues, 'password');
      expect(validator.validate('WrongPassword', {})).toBe(CONFIRM_PASSWORD_VALIDATION_CONFIG.MESSAGE.DONT_MATCH);
    });

    test('should have correct required message', () => {
      const getValues = mockGetValues({});
      const validator = confirmPassValidator(getValues, 'password');
      expect(validator.required).toBe(CONFIRM_PASSWORD_VALIDATION_CONFIG.MESSAGE.REQUIRED);
    });
  });

  describe('Simple Validators', () => {
    test('checkboxValidator should have correct required message', () => {
      expect(checkboxValidator.required).toBe(POLICY_VALIDATION_CONFIG.MESSAGE.REQUIRED);
    });

    test('emailLoginValidator should have correct required message', () => {
      expect(emailLoginValidator.required).toBe(EMAIL_VALIDATION_CONFIG.MESSAGE.REQUIRED);
    });

    test('passwordLoginValidator should have correct required message', () => {
      expect(passwordLoginValidator.required).toBe(PASSWORD_VALIDATION_CONFIG.MESSAGE.REQUIRED);
    });
  });
});

describe('Regex Validators', () => {
  describe('Email Regex Validator', () => {
    test.each(regexEmailTestConfig)('should return %s for input "%s"', (input, expected) => {
      expect(emailValidate.test(input)).toBe(expected);
    });
  });
  describe('Password Regex Validator', () => {
    regexPasswordTestConfig.forEach(({name, regex, testCases}) => {
      describe(name, () => {
        test.each(testCases)('should return %s for input "%s"', (input, expected) => {
          expect(regex.test(String(input))).toBe(expected);
        });
      });
    });
  });
});
