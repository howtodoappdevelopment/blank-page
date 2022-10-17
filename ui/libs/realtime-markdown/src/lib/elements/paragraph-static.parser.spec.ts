import { parseMarkdownToHtml } from '../utils/static-parser.utils';

describe('text parser', () => {
  test('should parse', () => {
    const content = '     content';
    const html = parseMarkdownToHtml(content).replace(/[\n\t ]*</g, '<');
    expect(html).toEqual(
      `<p class="et-p ml-2"><span class="content"> ${content.trimLeft()}</span></p>`
    );
  });
});
