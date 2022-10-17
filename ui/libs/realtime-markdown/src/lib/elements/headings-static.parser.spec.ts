import { calcHeadingSize } from '../utils/elements.utils';
import { parseMarkdownToHtml } from '../utils/static-parser.utils';
import { headingsStaticParser } from './headings.parsers';

describe('heading', () => {
  test('should parse heading', () => {
    const headings = Array(6).map(
      (_, index) =>
        Array(index)
          .fill(index)
          .map(() => '#')
          .join('') + ' content\nregular text'
    );
    for (const heading in headings) {
      const html = parseMarkdownToHtml(heading, [headingsStaticParser]).replace(
        /[\n\t ]*</g,
        '<'
      );
      const size = calcHeadingSize(heading);
      const sign = heading.split(' ')[0] + ' ';
      const expectedOutput =
        `<h${size}>` +
        `<span class="sign">${sign}</span>` +
        '<span class="content">content</span>' +
        `</h${size}>` +
        '<p class="et-p ml-0">regular text</p>';
      expect(html).toEqual(expectedOutput);
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
        ' content\nregular text'
    );
    for (const heading in headings) {
      const html = parseMarkdownToHtml(heading, [headingsStaticParser]).replace(
        /[\n\t ]*</g,
        '<'
      );
      const firstLine = heading.split('\n')[0] + '\n';
      const secondLine = heading.split('\n')[1];
      expect(html).toEqual(
        `<p class="et-p ml-0">${firstLine}</p><p>${secondLine}</p>`
      );
    }
  });
});
