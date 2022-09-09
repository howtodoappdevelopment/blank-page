import { FunctionComponent, PropsWithChildren } from 'react';

export const Heading: FunctionComponent<
  PropsWithChildren<{
    size: 1 | 2 | 3 | 4 | 5 | 6;
  }>
> = ({ children, size }) => {
  const HeadingTag = `h${size}` as keyof JSX.IntrinsicElements;
  return <HeadingTag>{children}</HeadingTag>;
};
