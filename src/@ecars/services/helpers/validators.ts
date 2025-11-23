import {emailValidate, lowerLetter, passNumber, passSpecialCharacter, upperLetter} from '@ecars/services/helpers/regex';
import {
  CONFIRM_PASSWORD_VALIDATION_CONFIG,
  EMAIL_VALIDATION_CONFIG,
  NAME_VALIDATION_CONFIG,
  PASSWORD_VALIDATION_CONFIG,
  POLICY_VALIDATION_CONFIG,
} from '@ecars/constants/validation';
import type {FieldPath, FieldValues, UseFormGetValues} from 'react-hook-form';

export const nameValidator = {
  required: NAME_VALIDATION_CONFIG.MESSAGE.REQUIRED,
  maxLength: {
    value: NAME_VALIDATION_CONFIG.SIZE.MAX_LENGTH,
    message: NAME_VALIDATION_CONFIG.MESSAGE.MAX_LENGTH,
  },
  minLength: {
    value: NAME_VALIDATION_CONFIG.SIZE.MIN_LENGTH,
    message: NAME_VALIDATION_CONFIG.MESSAGE.MIN_LENGTH,
  },
  validate: {
    hasUpperCase: (value: string) => upperLetter.test(value) || NAME_VALIDATION_CONFIG.MESSAGE.UPPERCASE,
    hasLowerCase: (value: string) => lowerLetter.test(value) || NAME_VALIDATION_CONFIG.MESSAGE.LOWERCASE,
  },
} as const;

export const emailValidator = {
  required: EMAIL_VALIDATION_CONFIG.MESSAGE.REQUIRED,
  pattern: {
    value: emailValidate,
    message: EMAIL_VALIDATION_CONFIG.MESSAGE.INVALID,
  },
} as const;

export const passwordValidator = {
  required: PASSWORD_VALIDATION_CONFIG.MESSAGE.REQUIRED,
  minLength: {
    value: PASSWORD_VALIDATION_CONFIG.SIZE.MIN_LENGTH,
    message: PASSWORD_VALIDATION_CONFIG.MESSAGE.MIN_LENGTH,
  },
  validate: {
    hasNumber: (value: string) => passNumber.test(value) || PASSWORD_VALIDATION_CONFIG.MESSAGE.NUMBER,
    hasUpperCase: (value: string) => upperLetter.test(value) || PASSWORD_VALIDATION_CONFIG.MESSAGE.UPPERCASE,
    hasLowerCase: (value: string) => lowerLetter.test(value) || PASSWORD_VALIDATION_CONFIG.MESSAGE.LOWERCASE,
    hasSpecialCharacter: (value: string) =>
      passSpecialCharacter.test(value) || PASSWORD_VALIDATION_CONFIG.MESSAGE.SPECIAL_CHARACTER,
  },
} as const;

interface ConfirmPassValidatorReturn<T> {
  required: string;
  validate: (value: string, _formValues: T) => string | boolean;
}

export const confirmPassValidator = <T extends FieldValues>(
  getValues: UseFormGetValues<T>,
  fieldToMatch: FieldPath<T>,
): ConfirmPassValidatorReturn<T> => {
  return {
    required: CONFIRM_PASSWORD_VALIDATION_CONFIG.MESSAGE.REQUIRED,
    validate: (value: string, _formValues: T) => {
      const fieldValue = getValues(fieldToMatch);
      return value === fieldValue || CONFIRM_PASSWORD_VALIDATION_CONFIG.MESSAGE.DONT_MATCH;
    },
  };
};

export const checkboxValidator = {
  required: POLICY_VALIDATION_CONFIG.MESSAGE.REQUIRED,
} as const;

export const emailLoginValidator = {required: EMAIL_VALIDATION_CONFIG.MESSAGE.REQUIRED} as const;
export const passwordLoginValidator = {required: PASSWORD_VALIDATION_CONFIG.MESSAGE.REQUIRED} as const;
