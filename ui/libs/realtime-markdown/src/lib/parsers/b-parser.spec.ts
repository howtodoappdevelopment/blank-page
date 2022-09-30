import { bParser } from './b-configs';
import { parseToHtml } from '../utils/parser.utils';

describe('bold\\strong', () => {
  test('should parse **[^*]+**', () => {
    const content = 'bold txt';
    const html = parseToHtml(`**${content}**`, [bParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    const expectedOutput = `<b class="et-b">
      <span class="sign">**</span>
      <span class="content">${content}</span>
      <span class="sign">**</span>
    </b>`.replace(/^( *|\n|\t)*/gm, '');
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = '** test**';
    let html = parseToHtml(content, [bParser]);
    expect(html).toEqual(content);

    content = '**test **';
    html = parseToHtml(content, [bParser]);
    expect(html).toEqual(content);

    content = '****';
    html = parseToHtml(content, [bParser]);
    expect(html).toEqual(content);

    content = '********';
    html = parseToHtml(content, [bParser]);
    expect(html).toEqual(content);
  });
});
