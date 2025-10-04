import {createBrowserRouter} from 'react-router';
import {PageUrls} from '@ecars/constants/page-urls';
import {UiKit} from '@ecars/pages/uiKit/UiKit';
import {PageLayout} from '@ecars/uiKit/Page/PageLayout';
import {HomePage} from '@ecars/pages/HomePage/HomePage';

export const router = createBrowserRouter([
  {
    path: PageUrls.LAYOUT,
    element: <PageLayout />,
    children: [{index: true, element: <HomePage />}],
  },
  {
    path: PageUrls.UIKIT,
    element: <UiKit />,
  },
]);
