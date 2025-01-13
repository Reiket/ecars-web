import {RouterProvider} from 'react-router-dom';
import {router} from './router';
import {Root} from './root';
export const App = () => {
  return (
    <Root>
      <RouterProvider router={router} />
    </Root>
  );
};