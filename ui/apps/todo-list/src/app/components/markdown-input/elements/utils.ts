export const countTabs = (txt: string) =>
  Math.floor((txt.match(/^ */g) as RegExpMatchArray)[0].length / 2);
