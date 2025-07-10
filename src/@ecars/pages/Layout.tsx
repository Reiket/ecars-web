import React from 'react';
import {Button} from 'ecars-web-lib';

const Layout = () => {
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
