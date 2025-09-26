import type {FC} from 'react';
import {WhyChoose} from '@ecars/uiKit/WhyChoose';

export const WhyChooseComponent: FC = () => (
  <WhyChoose.Wrapper name="why-choose">
    <div className="why-choose__body">
      <div className="why-choose__image">
        <img
          src="/assets/images/why/01.png"
          alt="why_choose_image"
        />
      </div>
      <div className="why-choose__content">
        <h2 className="why-choose__title section-title">Why choose us</h2>
        <p className="why-choose__text">
          Quis blandit turpis cursus in hac. In hendrerit gravida rutrum quisque. Pellentesque habitant morbi tristique
          senectus et. Eget gravida cum sociis natoque. Pharetra diam sit amet nisl suscipit adipiscing bibendum.
        </p>
        <p className="why-choose__text">
          Porttitor massa id neque aliquam. In fermentum posuere urna nec. Rhoncus aenean vel elit scelerisque mauris
          pellentesque. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Consequat id porta nibh
          venenatis cras sed.
        </p>
        <WhyChoose.List />
      </div>
    </div>
  </WhyChoose.Wrapper>
);
