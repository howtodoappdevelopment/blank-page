import React, { FunctionComponent, PropsWithChildren } from 'react';
import { ModalProps } from './modal.props';
import { Button } from '../button/button';

export const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = ({
  children,
  footerContent,
  onModalCancel,
  onModalSubmit,
}) => {
  return (
    <div className="absolute w-screen h-screen bg-white/50 flex flex-col justify-center items-center">
      <div className="flex flex-col w-1/2 items-start bg-white border-2 border-gray-100 rounded-md">
        <div className="px-8 py-6">{children}</div>
        <div className="inline-block px-8 py-3 w-full">
          {!footerContent && (
            <>
              <Button onClick={onModalSubmit}>Submit</Button>
              <Button type="ghost" onClick={onModalCancel}>
                Cancel
              </Button>
            </>
          )}
          {!!footerContent && footerContent}
        </div>
      </div>
    </div>
  );
};
