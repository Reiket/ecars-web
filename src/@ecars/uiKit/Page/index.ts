import {PageComponent} from '@ecars/uiKit/Page/PageComponent';
import {PageContainer} from '@ecars/uiKit/Page/components/PageContainer';
import {PageSection} from '@ecars/uiKit/Page/components/PageSection';

export const Page = Object.assign(PageComponent, {
  Container: PageContainer,
  Section: PageSection,
});
