export const removeSign = (txt: string) =>
  txt.replace(/^( ?)+(```)\n|( ?)+(```)$/gm, '');
