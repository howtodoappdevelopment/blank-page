import { parseMarkdownToHtml } from '../utils/static-parser.utils';
import { precodeStaticParser } from './precode-configs';

describe('precode', () => {
  test('should parse with indent', () => {
    const html = parseMarkdownToHtml('  ```\n# code\n# code 2\n```', [
      precodeStaticParser,
    ]).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<pre class="et-precode ml-1"><code class="content">' +
      '# code<br># code 2' +
      '</code></pre>';
    expect(html).toEqual(expectedOutput);
  });
  test('should parse to the end of file', () => {
    const html = parseMarkdownToHtml('```\n# code\n# code 2\nend line', [
      precodeStaticParser,
    ]).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<pre class="et-precode ml-0"><code class="content">' +
      '# code<br># code 2<br>end line' +
      '</code></pre>';
    expect(html).toEqual(expectedOutput);
  });
  test('should parse without indent', () => {
    const html = parseMarkdownToHtml(
      '```\n# code\n# code 2\nend line\n```\nregular text   ',
      [precodeStaticParser]
    ).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<pre class="et-precode ml-0"><code class="content">' +
      '# code<br># code 2<br>end line' +
      '</code></pre>' +
      '<p class="et-p ml-0"><span class="content">regular text</span></p>';
    expect(html).toEqual(expectedOutput);
  });
  test('should parse with code type name', () => {
    const html = parseMarkdownToHtml(
      '```javascript\n# code\n# code 2\nend line\n```\nregular text   ',
      [precodeStaticParser]
    ).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<pre class="et-precode ml-0"><code class="content">' +
      '# code<br># code 2<br>end line' +
      '</code></pre>' +
      '<p class="et-p ml-0"><span class="content">regular text</span></p>';
    expect(html).toEqual(expectedOutput);
  });
  test('should parse with no content', () => {
    const html = parseMarkdownToHtml('```javascript\n```\nregular text   ', [
      precodeStaticParser,
    ]).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<pre class="et-precode ml-0"><code class="content">' +
      '&nbsp;' +
      '</code></pre>' +
      '<p class="et-p ml-0"><span class="content">regular text</span></p>';
    expect(html).toEqual(expectedOutput);
  });
});
