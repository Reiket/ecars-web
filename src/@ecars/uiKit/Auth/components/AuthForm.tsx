import type {FC, ReactNode} from 'react';
import {Fragment} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {Button, ButtonWithIcon, Icons, RouterLink} from 'ecars-web-lib';

interface Props extends ElementProps {
  buttonText: string;
  children?: ReactNode;
  linkConfig?: {
    to: string;
    label: string;
  };
  text?: string;
  isResetForm?: boolean;
}

export const AuthForm: FC<Props> = ({children, text, linkConfig, buttonText, block, isResetForm = false}) => {
  return (
    <form className="auth__form">
      {children}
      <Button
        size="big"
        color="green"
      >
        {buttonText}
      </Button>
      {!!text && (
        <p className="auth__text">
          {text}
          <RouterLink
            block={block}
            to={linkConfig?.to}
            color="green"
          >
            {linkConfig?.label}
          </RouterLink>
        </p>
      )}
      {!isResetForm && (
        <Fragment>
          <p className="auth__separator">
            <span>or</span>
          </p>
          <ButtonWithIcon
            block={block}
            LeftIcon={Icons.Google}
            size="big"
            color="white"
          >
            Authorize with Google
          </ButtonWithIcon>
        </Fragment>
      )}
    </form>
  );
};
