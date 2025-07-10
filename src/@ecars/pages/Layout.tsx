import {Button} from 'ecars-web-lib';
import type {FC} from 'react';

const Layout: FC = () => {
  return (
    <div>
      {
        <Button
          size={'small'}
          color={'gray'}
        >
          This is button
        </Button>
      }
      <p>Hello</p>
    </div>
  );
};

export default Layout;
