import { hideSignsOf, showSignOf } from '../utils/sign.utils';

export const onMouseDown = ($event: MouseEvent) => {
  hideSignsOf($event.currentTarget as HTMLElement);
  showSignOf($event.target as HTMLElement);
};
