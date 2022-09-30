import { calcHeadingSize } from '../utils/elements.utils';
import { parseToHtml } from '../utils/parser.utils';
import { headingsParser } from './headings-configs';

describe('heading', () => {
  test('should parse heading', () => {
    const headings = Array(6).map(
      (_, index) =>
        Array(index)
          .fill(index)
          .map(() => '#')
          .join('') + ' content'
    );
    for (const heading in headings) {
      const html = parseToHtml(heading, [headingsParser]);
      const size = calcHeadingSize(heading);
      const [sign, content] = heading.split(' ');
      expect(html).toEqual(
        `<h${size}><span class="sign">${sign}</span><span class="content">${content}</span></h${size}>`
      );
    }
  });
  test("shouldn't parse heading", () => {
    const headings = Array(6).map(
      (_, index) =>
        ' ' +
        Array(index)
          .fill(index)
          .map(() => '#')
          .join('') +
        ' content'
    );
    for (const heading in headings) {
      const html = parseToHtml(heading, [headingsParser]);
      expect(html).toEqual(`<p>${heading}</p>`);
    }
  });
});
