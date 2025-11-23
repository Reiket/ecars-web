export const NAME_VALIDATION_CONFIG = Object.freeze({
  MESSAGE: {
    REQUIRED: 'Name is required! Please write your name!',
    MIN_LENGTH: 'Name is too short! Please enter valid name!',
    MAX_LENGTH: 'Name is too long! Please enter valid name!',
    UPPERCASE: 'Name must contain one or more Uppercase letters!',
    LOWERCASE: 'Name must contain one or more Lowercase letters!',
  },
  SIZE: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 10,
  },
});

export const EMAIL_VALIDATION_CONFIG = Object.freeze({
  MESSAGE: {
    REQUIRED: 'Email is required! Please write your email!',
    INVALID: 'Email is not valid! Please enter valid email!',
  },
});

export const PASSWORD_VALIDATION_CONFIG = Object.freeze({
  MESSAGE: {
    REQUIRED: 'Password is required! Please write your password!',
    MIN_LENGTH: 'Your password is too short! Please enter a password of more than 4 characters!',
    UPPERCASE: 'Your password must contain one or more Uppercase letters!',
    LOWERCASE: 'Your password must contain one or more Lowercase letters!',
    NUMBER: 'Your password must contain one or more Numbers!',
    SPECIAL_CHARACTER: 'Your password must contain one or more Special Characters!',
  },
  SIZE: {
    MIN_LENGTH: 4,
  },
});

export const CONFIRM_PASSWORD_VALIDATION_CONFIG = Object.freeze({
  MESSAGE: {
    REQUIRED: 'Confirm password is required! Please write your confirm password!',
    DONT_MATCH: 'Passwords do not match! Please enter valid password!',
  },
});

export const POLICY_VALIDATION_CONFIG = Object.freeze({
  MESSAGE: {REQUIRED: 'Please agree Terms of Service and Privacy Policy!'},
});
