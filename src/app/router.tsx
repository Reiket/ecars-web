import {createBrowserRouter} from 'react-router';
import {PageUrls} from '@ecars/constants/page-urls';
import {UiKit} from '@ecars/pages/uiKit/UiKit';
import {PageLayout} from '@ecars/uiKit/Page/PageLayout';

import {HomePage} from '@ecars/pages/HomePage';
import {LoginPage} from '@ecars/pages/LoginPage/LoginPage';
import {RegistrationPage} from '@ecars/pages/RegistrationPage/RegistrationPage';
import {ResetPasswordPage} from '@ecars/pages/ResetPasswordPage/ResetPasswordPage';
import {CheckEmailPage} from '@ecars/pages/CheckEmailPage/CheckEmailPage';
import {NewPasswordPage} from '@ecars/pages/NewPasswordPage/NewPasswordPage';
import {SuccessRestPasswordPage} from '@ecars/pages/SuccessRestPasswordPage/SuccessRestPasswordPage';

export const router = createBrowserRouter([
  {
    path: PageUrls.LAYOUT,
    element: <PageLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: PageUrls.LOGIN, element: <LoginPage />},
      {path: PageUrls.REGISTRATION, element: <RegistrationPage />},
      {path: PageUrls.RESET_PASSWORD, element: <ResetPasswordPage />},
      {path: PageUrls.CHECK_EMAIL, element: <CheckEmailPage />},
      {path: PageUrls.SET_NEW_PASS, element: <NewPasswordPage />},
      {path: PageUrls.SUCCESS_REST_PASS, element: <SuccessRestPasswordPage />},
    ],
  },
  {
    path: PageUrls.UIKIT,
    element: <UiKit />,
  },
]);
