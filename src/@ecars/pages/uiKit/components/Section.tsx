import type {FC, ReactNode} from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

export const Section: FC<Props> = ({title, children}) => {
  return (
    <section className="ui-kit">
      <h1 className="ui-kit__title">{title}</h1>
      {children}
    </section>
  );
};
