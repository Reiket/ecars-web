import {RouterProvider} from 'react-router';
import {router} from './router';
import type {FC} from 'react';
import {Fragment} from 'react';

export const App: FC = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};
