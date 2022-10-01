import { highlightParser } from './highlight-config';
import { parseToHtml } from '../utils/parser.utils';

describe('highlight', () => {
  test('should parse ^ *\n', () => {
    const content = 'content';
    let html = parseToHtml(`==${content}==`, [], [highlightParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    let expectedOutput =
      '<p><span class="et-highlight">' +
      '<span class="sign">==</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">==</span>' +
      '</span></p>';
    expect(html).toEqual(expectedOutput);

    html = parseToHtml(`t ==${content}== r`, [], [highlightParser]).replace(
      /[\n\t ]*</g,
      '<'
    );

    expectedOutput =
      '<p>t<span class="et-highlight">' +
      '<span class="sign">==</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">==</span>' +
      '</span> r</p>';
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = `= =content==`;
    let html = parseToHtml(content, [], [highlightParser]);
    expect(html).toEqual(`<p>${content}</p>`);

    content = ` ==${content}= = r`;
    html = parseToHtml(content, [], [highlightParser]);
    expect(html).toEqual(`<p>${content}</p>`);

    content = ` ==${content}==r`;
    html = parseToHtml(content, [], [highlightParser]);
    expect(html).toEqual(`<p>${content}</p>`);
  });
});
