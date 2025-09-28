import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {Button} from 'ecars-web-lib';
import type {ButtonColorType} from 'ecars-web-lib/dist/components/Button/constants';

export interface Props extends ElementProps {
  icon: ReactNode;
  title: string;
  text: string;
  buttonText: string;
  buttonColor: ButtonColorType;
}

export const SendColumn: FC<Props> = ({icon, title, text, buttonText, buttonColor, block}) => (
  <div className="send__col">
    <div className="send__icon">{icon}</div>
    <h2 className="send__title block-title">{title}</h2>
    <p className="send__text">{text}</p>
    <Button
      block={block}
      size="big"
      color={buttonColor}
    >
      {buttonText}
    </Button>
  </div>
);
