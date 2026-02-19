import type {FC, ReactNode} from 'react';

export interface Props {
  children: ReactNode;
}

export const PageWrapper: FC<Props> = ({children}) => <div className="page">{children}</div>;
