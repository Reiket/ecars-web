import {HomePageComponent} from '@ecars/pages/HomePage/HomePageComponent';
import {HomePageWrapperHOC} from '@ecars/pages/HomePage/constants';

export const HomePage = Object.assign(HomePageComponent, {
  Wrapper: HomePageWrapperHOC,
});
