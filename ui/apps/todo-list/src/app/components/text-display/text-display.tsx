import React, { FunctionComponent, useState } from 'react';
import { truncate } from 'lodash-es';
import { Button } from '../../layouts/button/button';
import { TextDisplayProps } from './text-display.props';

export const TextDisplay: FunctionComponent<TextDisplayProps> = ({
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
