import { parseToHtml } from '../utils/parser.utils';
import { codeParser } from './code-configs';

describe('code', () => {
  test('should parse ``', () => {
    const content = 'content';
    const html = parseToHtml(`\`${content}\``, [codeParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    const expectedOutput = `<code class="et-code">
<span class="sign">\`</span>
<span class="content">${content}</span>
<span class="sign">\`</span>
</code>`.replace(/^( *|\n|\t)*/gm, '');
    expect(html).toEqual(expectedOutput);
  });
  test("shouldn't parse ```", () => {
    let content = '```';
    let html = parseToHtml(`${content}`, [codeParser]);
    expect(html).toEqual(`${content}`);

    content = 'content';
    html = parseToHtml(`\`${content} \``, [codeParser]);
    expect(html).toEqual(`\`${content} \``);

    html = parseToHtml(`\` ${content}\``, [codeParser]);
    expect(html).toEqual(`\` ${content}\``);
  });
});
