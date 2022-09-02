import React, { forwardRef, PropsWithChildren } from 'react';
import { ModalProps } from './modal.props';
import { Button } from '../button/button';

export const Modal = forwardRef<
  HTMLDivElement | null,
  PropsWithChildren<ModalProps>
>(({ children, footerContent, onModalCancel, onModalSubmit }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute w-screen h-screen bg-white/50 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col w-3/5 items-start bg-white border-2 border-gray-100 rounded-md">
        <div className="content px-8 py-6 w-full">{children}</div>
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
});
Modal.displayName = 'Modal';
