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
      '<p class="pl-0"><code class="et-code">' +
      '<span class="content">content</span>' +
      '</code></p>';
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse ```", () => {
    let content = '```';
    let html = parseToHtml(`${content}`, [], [codeParser]);
    expect(html).toEqual(`<p class="pl-0">${content}</p>`);

    content = 'content';
    html = parseToHtml(`\`${content} \``, [], [codeParser]);
    expect(html).toEqual(`<p class="pl-0">\`${content} \`</p>`);

    html = parseToHtml(`\` ${content}\``, [], [codeParser]);
    expect(html).toEqual(`<p class="pl-0">\` ${content}\`</p>`);
  });
});
