import { FunctionComponent, PropsWithChildren } from 'react';
import { uniqueId } from 'lodash-es';

export const Heading: FunctionComponent<
  PropsWithChildren<{
    size: 1 | 2 | 3 | 4 | 5 | 6;
  }>
> = ({ children, size }) => {
  const HeadingTag = `h${size}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag
      id={uniqueId(`${HeadingTag}-`)}
      key={uniqueId(`${HeadingTag}-`)}
      className={HeadingTag}
    >
      {children}
    </HeadingTag>
  );
};
