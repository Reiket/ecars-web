import type {FC, ReactNode} from 'react';

export interface Props {
  title?: string;
  children: ReactNode;
}

export const FooterColumn: FC<Props> = ({children, title}) => (
  <div className="footer__col">
    {!!title && <h4 className="footer__list-title title-list-footer">{title}</h4>}
    {children}
  </div>
);
