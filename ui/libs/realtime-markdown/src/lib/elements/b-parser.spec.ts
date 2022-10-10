import { bStaticParser } from './b-configs';
import { parseMarkdownToHtml } from '../utils/static-parser.utils';

describe('bold\\strong', () => {
  test('should parse **[^*]+**', () => {
    const content = 'bold txt';
    const html = parseMarkdownToHtml(
      `**${content}**`,
      [],
      [bStaticParser]
    ).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<p class="et-p ml-0"><span class="content"><b class="et-b"><span class="sign">**</span>' +
      '<span class="content">bold txt</span>' +
      '<span class="sign">**</span>' +
      '</b></span></p>';
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = '** test**';
    let html = parseMarkdownToHtml(content, [], [bStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );

    content = '**test **';
    html = parseMarkdownToHtml(content, [], [bStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );

    content = '****';
    html = parseMarkdownToHtml(content, [], [bStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );

    content = '********';
    html = parseMarkdownToHtml(content, [], [bStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );
  });
});
