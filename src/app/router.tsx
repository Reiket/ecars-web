import {createBrowserRouter} from 'react-router-dom';
import {PageUrls} from '@ecars/constants/page-urls';
import Layout from '@ecars/pages/Layout/Layout';
import {UiKit} from '@ecars/pages/uiKit/UiKit';

export const router = createBrowserRouter([
  {
    path: PageUrls.LAYOUT,
    element: <Layout />,
  },
  {
    path: PageUrls.UIKIT,
    element: <UiKit />,
  },
]);
