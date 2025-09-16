import type {FC} from 'react';
import {Header, Navbar} from '@ecars/uiKit/Header/index';
import {Button, Logo} from 'ecars-web-lib';
import {useBurger} from '@ecars/services/hooks/useBurger';

export const HeaderComponent: FC = () => {
  const {isBurgerActive, toggleBurger} = useBurger();
  return (
    <Header.Wrapper>
      <div className="header__body">
        <Header.Burger
          isBurger={isBurgerActive}
          onClick={toggleBurger}
        />
        <Logo src="./assets/images/logo-site/logo.svg" />
        <Navbar isBurgerActive={isBurgerActive} />
        <Header.Utils />
        <Button
          size="medium"
          color="green"
        >
          Get a quote
        </Button>
      </div>
    </Header.Wrapper>
  );
};
