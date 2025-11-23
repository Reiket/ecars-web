import type {FC, FormEvent, ReactNode} from 'react';
import {Fragment} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {Button, ButtonWithIcon, Icons, RouterLink} from 'ecars-web-lib';

interface Props extends ElementProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void> | void;
  buttonText: string;
  children?: ReactNode;
  isLoading?: boolean;
  linkConfig?: {
    to: string;
    label: string;
  };
  text?: string;
  isResetForm?: boolean;
}

export const AuthForm: FC<Props> = ({
  children,
  text,
  linkConfig,
  isLoading,
  onSubmit,
  buttonText,
  block,
  isResetForm = false,
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    void onSubmit(event);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="auth__form"
    >
      {children}
      <Button
        size="big"
        type="submit"
        color="green"
        disabled={isLoading}
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
