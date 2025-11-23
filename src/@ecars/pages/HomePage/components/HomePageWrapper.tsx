import type {FC, ReactNode} from 'react';

export interface Props {
  children: ReactNode;
}

export const HomePageWrapper: FC<Props> = ({children}) => <div className="home-page">{children}</div>;
