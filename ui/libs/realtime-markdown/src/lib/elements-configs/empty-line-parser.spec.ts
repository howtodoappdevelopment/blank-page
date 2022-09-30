import { parseToHtml } from '../utils/parser.utils';
import { EmptyLineParser } from './empty-line-parser';

describe('empty line', () => {
  test('should parse ^ *', () => {
    let html = parseToHtml(`   `, [EmptyLineParser]);
    expect(html).toEqual(`<p>&nbsp;</p>`);

    html = parseToHtml(`          \t`, [EmptyLineParser]);
    expect(html).toEqual(`<p>&nbsp;</p>`);

    html = parseToHtml(`          \r`, [EmptyLineParser]);
    expect(html).toEqual(`<p>&nbsp;</p><p>&nbsp;</p>`);

    html = parseToHtml(`          \n`, [EmptyLineParser]);
    expect(html).toEqual(`<p>&nbsp;</p><p>&nbsp;</p>`);
  });
  test("shouldn't parse", () => {
    let content = 'r';
    let html = parseToHtml(content, [EmptyLineParser]);
    expect(html).toEqual(content);

    content = `   r\t`;
    html = parseToHtml(content, [EmptyLineParser]);
    expect(html).toEqual(content);
  });
});
