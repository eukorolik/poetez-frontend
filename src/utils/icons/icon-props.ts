import {MouseEventHandler, CSSProperties} from 'react';

type IconProps = {
  color?: string;
  hoverColor?: string;
  onMouseEnter?: MouseEventHandler<{}>;
  onMouseLeave?: MouseEventHandler<{}>;
  style?: CSSProperties;
};

export default IconProps;
