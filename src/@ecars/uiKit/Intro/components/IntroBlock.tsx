import type {FC} from 'react';
import {Intro} from '@ecars/uiKit/Intro';
import {Button} from 'ecars-web-lib';
import {SocialList} from '@ecars/uiKit/SocialList/SocialList';
import {contactsLinks} from '@ecars/uiKit/SocialList/constants';

export const IntroBlock: FC = () => {
  return (
    <Intro.Wrapper name="intro-block">
      <div className="intro-block__body">
        <h1 className="intro-block__title page-title">Car import services with delivery to your doorstep.</h1>
        <div className="intro-block__block">
          <Button
            size="big"
            color="green"
          >
            Get a quote
          </Button>
          <SocialList
            items={contactsLinks}
            color="dark"
          />
        </div>
      </div>
    </Intro.Wrapper>
  );
};
