import {AuthLayout} from '@ecars/uiKit/Auth/components/AuthLayout';
import {AuthPageWrapperHOC} from '@ecars/uiKit/Auth/constants';

export const AuthPage = Object.assign(AuthLayout, {
  Wrapper: AuthPageWrapperHOC,
});
