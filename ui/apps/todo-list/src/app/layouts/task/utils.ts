export const isOverdue = (dates: number[] | undefined): boolean =>
  typeof dates === 'undefined' || dates.length === 0 || dates[0] <= Date.now();
