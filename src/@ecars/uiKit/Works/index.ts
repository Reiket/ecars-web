import {WorksComponent} from '@ecars/uiKit/Works/WorksComponent';
import {WorksWrapperHOC} from '@ecars/uiKit/Works/constants';
import {WorksStep} from '@ecars/uiKit/Works/components/WorksStep';
import {WorksList} from '@ecars/uiKit/Works/components/WorksList';

export const Works = Object.assign(WorksComponent, {
  Wrapper: WorksWrapperHOC,
  Step: WorksStep,
  List: WorksList,
});
