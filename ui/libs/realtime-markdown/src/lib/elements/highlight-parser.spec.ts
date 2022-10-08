import { highlightStaticParser } from './highlight-config';
import { parseToHtml } from '../utils/static-parser.utils';

describe('highlight', () => {
  test('should parse ^ *\n', () => {
    const content = 'content';
    let html = parseToHtml(
      `==${content}==`,
      [],
      [highlightStaticParser]
    ).replace(/[\n\t ]*</g, '<');
    let expectedOutput =
      '<p class="et-p ml-0"><span class="content"><span class="et-highlight">' +
      '<span class="sign">==</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">==</span>' +
      '</span></span></p>';
    expect(html).toEqual(expectedOutput);

    html = parseToHtml(
      `t ==${content}== r`,
      [],
      [highlightStaticParser]
    ).replace(/[\n\t ]*</g, '<');

    expectedOutput =
      '<p class="et-p ml-0"><span class="content">t<span class="et-highlight">' +
      '<span class="sign">==</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">==</span>' +
      '</span> r</span></p>';
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = `= =content==`;
    let html = parseToHtml(content, [], [highlightStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );

    content = ` ==${content}= = r`;
    html = parseToHtml(content, [], [highlightStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );

    content = ` ==${content}==r`;
    html = parseToHtml(content, [], [highlightStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );
  });
});
