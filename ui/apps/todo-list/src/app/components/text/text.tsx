import React, { FunctionComponent, useState } from 'react';
import { truncate } from 'lodash-es';
import { Button } from '../../layouts/button/button';
import { TextProps } from './text.props';

export const Text: FunctionComponent<TextProps> = ({
  text,
  maxLength = 512,
}) => {
  const shortDescription = truncate(text, {
    length: maxLength,
    omission: '...',
    separator: ' ',
  });
  const isDescriptionShort = shortDescription.length < (text || '')?.length;
  const [showMoreDescription, setShowMoreDescription] = useState(false);

  return (
    <span>
      {showMoreDescription ? text : shortDescription}
      &nbsp; &nbsp;
      {isDescriptionShort && (
        <Button
          type="url"
          size="small"
          onClick={() => setShowMoreDescription(!showMoreDescription)}
        >
          {showMoreDescription ? 'Show less' : 'Show more'}
        </Button>
      )}
    </span>
  );
};
