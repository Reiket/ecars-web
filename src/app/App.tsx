import {RouterProvider} from 'react-router';
import {router} from './router';
import type {FC} from 'react';
import {Fragment} from 'react';
import {useGetCurrentUserQuery} from '@ecars/core/slices/api/authApiSlice';

export const App: FC = () => {
  useGetCurrentUserQuery();
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};
