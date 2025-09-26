import {WhyChooseWrapperHOC} from '@ecars/uiKit/WhyChoose/constants';
import {WhyChooseComponent} from '@ecars/uiKit/WhyChoose/WhyChooseComponent';
import {WhyChooseItem} from '@ecars/uiKit/WhyChoose/components/WhyChooseItem';
import {WhyChooseList} from '@ecars/uiKit/WhyChoose/components/WhyChooseList';

export const WhyChoose = Object.assign(WhyChooseComponent, {
  Wrapper: WhyChooseWrapperHOC,
  Item: WhyChooseItem,
  List: WhyChooseList,
});
