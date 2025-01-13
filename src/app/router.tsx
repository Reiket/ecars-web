import {createBrowserRouter} from 'react-router-dom';
import {PageUrls} from '@ecars/constants/page-urls';

export const router = createBrowserRouter([
  {
    path: PageUrls.LAYOUT,
    element: <div>2</div>,
  },
]);
