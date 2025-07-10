import {createBrowserRouter} from 'react-router-dom';
import {PageUrls} from '@ecars/constants/page-urls';
import Layout from '@ecars/pages/Layout';

export const router = createBrowserRouter([
  {
    path: PageUrls.LAYOUT,
    element: <Layout />,
  },
]);
