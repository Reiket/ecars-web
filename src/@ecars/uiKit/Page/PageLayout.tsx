import type {FC} from 'react';
import {Fragment} from 'react';
import {Topbar} from '@ecars/uiKit/Topbar';
import {Header} from '@ecars/uiKit/Header';
import {Footer} from '@ecars/uiKit/Footer';
import {Outlet} from 'react-router';

export const PageLayout: FC = () => (
  <Fragment>
    <Topbar />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </Fragment>
);
