import { parseToHtml } from '../utils/static-parser.utils';
import { iStaticParser } from './i-configs';

describe('i', () => {
  test('should parse', () => {
    const content = 'content';
    let html = parseToHtml(`*${content}*`, [], [iStaticParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    let expectedOutput =
      '<p class="et-p ml-0"><span class="content"><i class="et-i">' +
      '<span class="sign">*</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">*</span>' +
      '</i></span></p>';
    expect(html).toEqual(expectedOutput);

    html = parseToHtml(` *${content}* r`, [], [iStaticParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    expectedOutput =
      '<p class="et-p ml-0"><span class="content"><i class="et-i">' +
      '<span class="sign">*</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">*</span>' +
      '</i> r</span></p>';
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = `*content *`;
    let html = parseToHtml(content, [], [iStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );

    content = ` *${content}*r`;
    html = parseToHtml(content, [], [iStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );
  });
});
