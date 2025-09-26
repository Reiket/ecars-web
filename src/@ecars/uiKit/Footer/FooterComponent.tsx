import type {FC} from 'react';
import {Copy, Footer} from '@ecars/uiKit/Footer';
import {carsLinks, companyLinks} from '@ecars/uiKit/Footer/constants';
import {SocialList} from '@ecars/uiKit/SocialList/SocialList';
import {contactsLinks} from '@ecars/uiKit/SocialList/constants';

export const FooterComponent: FC = () => (
  <Footer.Wrapper>
    <div className="footer__body">
      <div className="footer__info">
        <Footer.Column>
          <Footer.LogoBlock />
        </Footer.Column>
        <Footer.Column title="Company">
          <Footer.LinkList links={companyLinks} />
        </Footer.Column>
        <Footer.Column title="Cars">
          <Footer.LinkList links={carsLinks} />
        </Footer.Column>
        <Footer.Column title="Contacts">
          <SocialList
            items={contactsLinks}
            color="gray"
          />
        </Footer.Column>
      </div>
      <Copy />
    </div>
  </Footer.Wrapper>
);
