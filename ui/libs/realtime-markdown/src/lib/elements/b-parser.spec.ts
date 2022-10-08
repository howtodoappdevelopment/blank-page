import { bParser } from './b-configs';
import { parseToHtml } from '../utils/static-parser.utils';

describe('bold\\strong', () => {
  test('should parse **[^*]+**', () => {
    const content = 'bold txt';
    const html = parseToHtml(`**${content}**`, [], [bParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    const expectedOutput =
      '<p class="et-p ml-0"><span class="content"><b class="et-b"><span class="sign">**</span>' +
      '<span class="content">bold txt</span>' +
      '<span class="sign">**</span>' +
      '</b></span></p>';
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = '** test**';
    let html = parseToHtml(content, [], [bParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );

    content = '**test **';
    html = parseToHtml(content, [], [bParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );

    content = '****';
    html = parseToHtml(content, [], [bParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );

    content = '********';
    html = parseToHtml(content, [], [bParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );
  });
});
