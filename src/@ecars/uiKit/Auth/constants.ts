import {withBlockClass} from 'ecars-web-lib';
import {AuthPageWrapper} from '@ecars/uiKit/Auth/components/AuthPageWrapper';
import {PageUrls} from '@ecars/constants/page-urls';

export const AuthPageWrapperHOC = withBlockClass(AuthPageWrapper, 'auth');

export const authFormConfig = {
  login: {
    buttonText: 'Login',
    text: 'Don’t have an account?',
    linkConfig: {to: PageUrls.REGISTRATION, label: 'Sign Up'},
  },
  registration: {
    buttonText: 'Sign Up',
    text: 'Already have an account?',
    linkConfig: {to: PageUrls.LOGIN, label: 'Login'},
  },
};
