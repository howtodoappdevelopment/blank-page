import { parseToHtml } from '../utils/parser.utils';
import { iParser } from './i-configs';

describe('i', () => {
  test('should parse', () => {
    const content = 'content';
    let html = parseToHtml(`*${content}*`, [], [iParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    let expectedOutput =
      '<p><i class="et-i">' +
      '<span class="sign">*</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">*</span>' +
      '</i></p>';
    expect(html).toEqual(expectedOutput);

    html = parseToHtml(` *${content}* r`, [], [iParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    expectedOutput =
      '<p><i class="et-i">' +
      '<span class="sign">*</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">*</span>' +
      '</i> r</p>';
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = `*content *`;
    let html = parseToHtml(content, [], [iParser]);
    expect(html).toEqual(`<p>${content}</p>`);

    content = ` *${content}*r`;
    html = parseToHtml(content, [], [iParser]);
    expect(html).toEqual(`<p>${content}</p>`);
  });
});
