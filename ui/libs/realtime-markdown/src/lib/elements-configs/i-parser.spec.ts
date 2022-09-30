import { parseToHtml } from '../utils/parser.utils';
import { iParser } from './i-configs';

describe('i', () => {
  test('should parse', () => {
    const content = 'content';
    let html = parseToHtml(`*${content}*`, [iParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    let expectedOutput = `<i class="et-i">
        <span class="sign">*</span>
        <span class="content">${content}</span>
        <span class="sign">*</span>
      </i>`.replace(/^( *|\n|\t)*/gm, '');
    expect(html).toEqual(expectedOutput);

    html = parseToHtml(` *${content}* r`, [iParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    expectedOutput = `<i class="et-i">
        <span class="sign">*</span>
        <span class="content">${content}</span>
        <span class="sign">*</span>
      </i> r`.replace(/^( *|\n|\t)*/gm, '');
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = `*content *`;
    let html = parseToHtml(content, [iParser]);
    expect(html).toEqual(content);

    content = ` *${content}*r`;
    html = parseToHtml(content, [iParser]);
    expect(html).toEqual(content);
  });
});
