import { parseMarkdownToHtml } from '../utils/static-parser.utils';
import { strikeStaticParser } from './strike-configs';

describe('strike', () => {
  test('should parse ~~~~', () => {
    const content = 'content';
    let html = parseMarkdownToHtml(
      `~~${content}~~`,
      [],
      [strikeStaticParser]
    ).replace(/[\n\t ]*</g, '<');
    let expectedOutput =
      '<p class="et-p ml-0"><span class="content"><span class="et-strike">' +
      '<span class="sign">~~</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">~~</span>' +
      '</span></span></p>';
    expect(html).toEqual(expectedOutput);

    html = parseMarkdownToHtml(
      `~~${content}~~ r`,
      [],
      [strikeStaticParser]
    ).replace(/[\n\t ]*</g, '<');

    expectedOutput =
      '<p class="et-p ml-0"><span class="content"><span class="et-strike">' +
      '<span class="sign">~~</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">~~</span>' +
      '</span> r</span></p>';
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = `~ ~content~~`;
    let html = parseMarkdownToHtml(content, [], [strikeStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );

    content = ` ~~${content}~ ~ r`;
    html = parseMarkdownToHtml(content, [], [strikeStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );

    content = ` ~~${content}~~r`;
    html = parseMarkdownToHtml(content, [], [strikeStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );
  });
});
