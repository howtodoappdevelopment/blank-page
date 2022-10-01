import { parseToHtml } from '../utils/parser.utils';
import { codeParser } from './code-configs';

describe('code', () => {
  test('should parse ``', () => {
    const content = 'content';
    const html = parseToHtml(`\`${content}\``, [], [codeParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    const expectedOutput =
      '<p><code class="et-code"><span class="sign">`</span>' +
      '<span class="content">content</span>' +
      '<span class="sign">`</span>' +
      '</code></p>';
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse ```", () => {
    let content = '```';
    let html = parseToHtml(`${content}`, [], [codeParser]);
    expect(html).toEqual(`<p>${content}</p>`);

    content = 'content';
    html = parseToHtml(`\`${content} \``, [], [codeParser]);
    expect(html).toEqual(`<p>\`${content} \`</p>`);

    html = parseToHtml(`\` ${content}\``, [], [codeParser]);
    expect(html).toEqual(`<p>\` ${content}\`</p>`);
  });
});
