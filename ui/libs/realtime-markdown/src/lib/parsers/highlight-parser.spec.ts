import { highlightParser } from './highlight-config';
import { parseToHtml } from '../utils/parser.utils';

describe('highlight', () => {
  test('should parse ^ *\n', () => {
    const content = 'content';
    let html = parseToHtml(`==${content}==`, [highlightParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    let expectedOutput = `<span class="et-highlight">
        <span class="sign">==</span>
        <span class="content">${content}</span>
        <span class="sign">==</span>
      </span>`.replace(/^( *|\n|\t)*/gm, '');
    expect(html).toEqual(expectedOutput);

    html = parseToHtml(` ==${content}== r`, [highlightParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );

    expectedOutput = ` <span class="et-highlight">
        <span class="sign">==</span>
        <span class="content">${content}</span>
        <span class="sign">==</span>
      </span> r`.replace(/^( *|\n|\t)*/gm, '');
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = `= =content==`;
    let html = parseToHtml(content, [highlightParser]);
    expect(html).toEqual(content);

    content = ` ==${content}= = r`;
    html = parseToHtml(content, [highlightParser]);
    expect(html).toEqual(content);

    content = ` ==${content}==r`;
    html = parseToHtml(content, [highlightParser]);
    expect(html).toEqual(content);
  });
});
