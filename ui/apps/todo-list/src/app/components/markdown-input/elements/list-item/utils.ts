export const removeUnorderedSign = (txt: string) =>
  txt.replace(/^( ?)+([-+*]) /gm, '');
