import { bParser } from './b-configs';
import { parseToHtml } from '../utils/parser.utils';

describe('bold\\strong', () => {
  test('should parse **[^*]+**', () => {
    const content = 'bold txt';
    const html = parseToHtml(`**${content}**`, [], [bParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    const expectedOutput =
      '<p class="ml-0"><b class="et-b"><span class="sign">**</span>' +
      '<span class="content">bold txt</span>' +
      '<span class="sign">**</span>' +
      '</b></p>';
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = '** test**';
    let html = parseToHtml(content, [], [bParser]);
    expect(html).toEqual(`<p class="ml-0">${content}</p>`);

    content = '**test **';
    html = parseToHtml(content, [], [bParser]);
    expect(html).toEqual(`<p class="ml-0">${content}</p>`);

    content = '****';
    html = parseToHtml(content, [], [bParser]);
    expect(html).toEqual(`<p class="ml-0">${content}</p>`);

    content = '********';
    html = parseToHtml(content, [], [bParser]);
    expect(html).toEqual(`<p class="ml-0">${content}</p>`);
  });
});
