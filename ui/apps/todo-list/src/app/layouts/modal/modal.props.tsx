import { MutableRefObject, ReactNode } from 'react';

export type ModalProps = {
  footerContent?: ReactNode;

  /*
   * IMPORTANT!!! Props used for default footer.
   * */
  onModalCancel?: () => unknown;
  onModalSubmit?: () => unknown;
};
