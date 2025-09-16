import {RouterProvider} from 'react-router';
import {router} from './router';
import {Root} from './root';
import type {FC} from 'react';

export const App: FC = () => {
  return (
    <Root>
      <RouterProvider router={router} />
    </Root>
  );
};
