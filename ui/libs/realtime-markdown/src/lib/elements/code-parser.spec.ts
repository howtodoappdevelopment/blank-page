import { parseToHtml } from '../utils/static-parser.utils';
import { codeStaticParser } from './code-configs';

describe('code', () => {
  test('should parse ``', () => {
    const content = 'content';
    const html = parseToHtml(`\`${content}\``, [], [codeStaticParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    const expectedOutput =
      '<p class="et-p ml-0"><span class="content"><code class="et-code">' +
      '<span class="sign">`</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">`</span>' +
      '</code></span></p>';
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse ```", () => {
    let content = '```';
    let html = parseToHtml(`${content}`, [], [codeStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${content}</span></p>`
    );

    content = 'content';
    html = parseToHtml(`\`${content} \``, [], [codeStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">\`${content} \`</span></p>`
    );

    html = parseToHtml(`\` ${content}\``, [], [codeStaticParser]);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">\` ${content}\`</span></p>`
    );
  });
});
