import { parseToHtml } from '../utils/parser.utils';
import { strikeParser } from './strike-configs';

describe('strike', () => {
  test('should parse ~~~~', () => {
    const content = 'content';
    let html = parseToHtml(`~~${content}~~`, [], [strikeParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    let expectedOutput =
      '<p class="ml-0"><span class="content"><span class="et-strike">' +
      '<span class="sign">~~</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">~~</span>' +
      '</span></span></p>';
    expect(html).toEqual(expectedOutput);

    html = parseToHtml(`~~${content}~~ r`, [], [strikeParser]).replace(
      /[\n\t ]*</g,
      '<'
    );

    expectedOutput =
      '<p class="ml-0"><span class="content"><span class="et-strike">' +
      '<span class="sign">~~</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">~~</span>' +
      '</span> r</span></p>';
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = `~ ~content~~`;
    let html = parseToHtml(content, [], [strikeParser]);
    expect(html).toEqual(
      `<p class="ml-0"><span class="content">${content}</span></p>`
    );

    content = ` ~~${content}~ ~ r`;
    html = parseToHtml(content, [], [strikeParser]);
    expect(html).toEqual(
      `<p class="ml-0"><span class="content">${content}</span></p>`
    );

    content = ` ~~${content}~~r`;
    html = parseToHtml(content, [], [strikeParser]);
    expect(html).toEqual(
      `<p class="ml-0"><span class="content">${content}</span></p>`
    );
  });
});
