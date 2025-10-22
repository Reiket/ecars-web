import type {FC, ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export const HomePageWrapper: FC<Props> = ({children}) => (
  <div className="home-page">
    {children}
  </div>
);

