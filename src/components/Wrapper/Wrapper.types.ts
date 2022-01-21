import { ReactNode } from 'react';

export interface WrapperProps {
  as?: React.ElementType;
  children: ReactNode;
  restProps?: object;
}
