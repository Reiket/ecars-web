import type {FC, ReactNode} from 'react';
import {AuthPage} from '@ecars/uiKit/Auth';

export interface Props {
  title: string;
  children: ReactNode;
}

export const AuthLayout: FC<Props> = ({title, children}) => (
  <AuthPage.Wrapper name="auth">
    <div className="auth__body">
      <h2 className="auth__title section-title">{title}</h2>
      {children}
    </div>
  </AuthPage.Wrapper>
);
