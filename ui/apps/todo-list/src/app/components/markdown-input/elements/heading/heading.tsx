import { FunctionComponent } from 'react';

export type HeadingProps = {
  children: string;
  type: 1 | 2 | 3 | 4 | 5 | 6;
};
export const Heading: FunctionComponent<HeadingProps> = ({
  children,
  type,
}) => {
  const HeadingTag = `h${type}` as keyof JSX.IntrinsicElements;
  const sign = children.match(/^#{1,6} /g)?.shift() as string;
  return (
    <HeadingTag>
      <span className="text-gray-300 text-">{sign}</span>
      {children.replace(sign, '')}
    </HeadingTag>
  );
};
