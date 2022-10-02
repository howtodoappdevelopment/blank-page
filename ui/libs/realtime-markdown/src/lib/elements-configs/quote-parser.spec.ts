import { parseToHtml } from '../utils/parser.utils';
import { quoteParser } from './quote-configs';

describe('quote', () => {
  test('with indent', () => {
    const html = parseToHtml(`  > content\nregular text`, [
      quoteParser,
    ]).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<p class="et-quote pl-1"><span class="content">content</span></p>' +
      '<p>regular text</p>';
    expect(html).toEqual(expectedOutput);
  });
  test('without indent', () => {
    const html = parseToHtml(`> content\nregular text`, [quoteParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    const expectedOutput =
      '<p class="et-quote pl-0"><span class="content">content</span></p>' +
      '<p>regular text</p>';
    expect(html).toEqual(expectedOutput);
  });
  test('multiline', () => {
    let html = parseToHtml(
      `> content 1\n> content 2\n  > content 3\nregular text`,
      [quoteParser]
    ).replace(/[\n\t ]*</g, '<');
    let expectedOutput =
      '<p class="et-quote pl-0">' +
      '<span class="content">content 1<br>content 2</span>' +
      '</p>' +
      '<p class="et-quote pl-1">' +
      '<span class="content">content 3</span>' +
      '</p>' +
      '<p>regular text</p>';
    expect(html).toEqual(expectedOutput);

    html = parseToHtml(`> content\n  > content`, [quoteParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    expectedOutput =
      '<p class="et-quote pl-0"><span class="content">content</span></p>' +
      '<p class="et-quote pl-1"><span class="content">content</span></p>';
    expect(html).toEqual(expectedOutput);
  });
});
