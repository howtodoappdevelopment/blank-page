import { parseToHtml } from '../utils/parser.utils';
import { strikeParser } from './strike-configs';

describe('strike', () => {
  test('should parse ~~~~', () => {
    const content = 'content';
    let html = parseToHtml(`~~${content}~~`, [strikeParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    let expectedOutput = `<span class="et-strike">
        <span class="sign">~~</span>
        <span class="content">${content}</span>
        <span class="sign">~~</span>
      </span>`.replace(/^( *|\n|\t)*/gm, '');
    expect(html).toEqual(expectedOutput);

    html = parseToHtml(` ~~${content}~~ r`, [strikeParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );

    expectedOutput = ` <span class="et-strike">
        <span class="sign">~~</span>
        <span class="content">${content}</span>
        <span class="sign">~~</span>
      </span> r`.replace(/^( *|\n|\t)*/gm, '');
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse", () => {
    let content = `~ ~content~~`;
    let html = parseToHtml(content, [strikeParser]);
    expect(html).toEqual(content);

    content = ` ~~${content}~ ~ r`;
    html = parseToHtml(content, [strikeParser]);
    expect(html).toEqual(content);

    content = ` ~~${content}~~r`;
    html = parseToHtml(content, [strikeParser]);
    expect(html).toEqual(content);
  });
});
