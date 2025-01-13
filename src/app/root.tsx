import type {FC, ReactNode} from 'react';

interface Root {
  children: ReactNode;
}

export const Root: FC<Root> = ({children}) => {
  return <>{children}</>;
};