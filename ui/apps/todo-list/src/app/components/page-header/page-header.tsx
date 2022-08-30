import React, { FunctionComponent, PropsWithChildren } from 'react';
import { PageHeaderProps } from './page-header.props';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { Button } from '../button/button';

export const PageHeader: FunctionComponent<
  PropsWithChildren<PageHeaderProps>
> = ({ backUrl, title, subTitle, description, extras }) => {
  // TODO: add url handling after routing setup
  return (
    <div className="flex flex-row justify-between items-start px-8 py-6">
      <div className="flex flex-col gap-y-4 items-start">
        <div className="flex flex-row gap-x-4 items-end">
          {backUrl && (
            <Button className="px-3" type="tertiary">
              <FontAwesomeIcon icon={faAngleLeft} />
            </Button>
          )}
          <h3>{title}</h3>
          <h6 className="text-gray-500">{subTitle}</h6>
        </div>
        <div className="text-gray-400">{description}</div>
      </div>
      <div className="flex flex-row gap-x-2.5">{extras}</div>
    </div>
  );
};
