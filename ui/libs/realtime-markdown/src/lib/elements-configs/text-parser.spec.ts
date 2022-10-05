import { parseToHtml } from '../utils/parser.utils';

describe('text parser', () => {
  test('should parse', () => {
    const content = '     content';
    const html = parseToHtml(content).replace(/[\n\t ]*</g, '<');
    expect(html).toEqual(`<p class="pl-2"> ${content.trimLeft()}</p>`);
  });
});
