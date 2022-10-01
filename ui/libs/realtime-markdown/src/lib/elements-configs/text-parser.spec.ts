import { parseToHtml } from '../utils/parser.utils';

describe('text parser', () => {
  test('should parse', () => {
    const content = '    \tcontent';
    const html = parseToHtml(content).replace(/[\n\t ]*</g, '<');
    expect(html).toEqual(`<p>${content}</p>`);
  });
});
