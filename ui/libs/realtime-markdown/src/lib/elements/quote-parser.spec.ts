import { parseToHtml } from '../utils/static-parser.utils';
import { quoteStaticParser } from './quote-configs';

describe('quote', () => {
  test('with indent', () => {
    const html = parseToHtml(`  > content\nregular text`, [
      quoteStaticParser,
    ]).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<p class="et-quote ml-1"><span class="content">content</span></p>' +
      '<p class="et-p ml-0"><span class="content">regular text</span></p>';
    expect(html).toEqual(expectedOutput);
  });
  test('without indent', () => {
    const html = parseToHtml(`> content\nregular text`, [
      quoteStaticParser,
    ]).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<p class="et-quote ml-0"><span class="content">content</span></p>' +
      '<p class="et-p ml-0"><span class="content">regular text</span></p>';
    expect(html).toEqual(expectedOutput);
  });
  test('multiline', () => {
    let html = parseToHtml(
      `> content 1\n> content 2\n  > content 3\nregular text`,
      [quoteStaticParser]
    ).replace(/[\n\t ]*</g, '<');
    let expectedOutput =
      '<p class="et-quote ml-0">' +
      '<span class="content">content 1<br>content 2</span>' +
      '</p>' +
      '<p class="et-quote ml-1">' +
      '<span class="content">content 3</span>' +
      '</p>' +
      '<p class="et-p ml-0"><span class="content">regular text</span></p>';
    expect(html).toEqual(expectedOutput);

    html = parseToHtml(`> content\n  > content`, [quoteStaticParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    expectedOutput =
      '<p class="et-quote ml-0"><span class="content">content</span></p>' +
      '<p class="et-quote ml-1"><span class="content">content</span></p>';
    expect(html).toEqual(expectedOutput);
  });
});
