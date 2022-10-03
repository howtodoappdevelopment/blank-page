import { parseToHtml } from '../utils/parser.utils';
import { precodeParser } from './precode-configs';

describe('precode', () => {
  test('should parse with indent', () => {
    const html = parseToHtml('  ```\n# code\n# code 2\n```', [
      precodeParser,
    ]).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<pre class="et-precode pl-1"><code class="content">' +
      '# code<br># code 2' +
      '</code></pre>';
    expect(html).toEqual(expectedOutput);
  });
  test('should parse to the end of file', () => {
    const html = parseToHtml('```\n# code\n# code 2\nend line', [
      precodeParser,
    ]).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<pre class="et-precode pl-0"><code class="content">' +
      '# code<br># code 2<br>end line' +
      '</code></pre>';
    expect(html).toEqual(expectedOutput);
  });
  test('should parse without indent', () => {
    const html = parseToHtml(
      '```\n# code\n# code 2\nend line\n```\nregular text   ',
      [precodeParser]
    ).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<pre class="et-precode pl-0"><code class="content">' +
      '# code<br># code 2<br>end line' +
      '</code></pre>' +
      '<p>regular text</p>';
    expect(html).toEqual(expectedOutput);
  });
  test('should parse with code type name', () => {
    const html = parseToHtml(
      '```javascript\n# code\n# code 2\nend line\n```\nregular text   ',
      [precodeParser]
    ).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<pre class="et-precode pl-0"><code class="content">' +
      '# code<br># code 2<br>end line' +
      '</code></pre>' +
      '<p>regular text</p>';
    expect(html).toEqual(expectedOutput);
  });
  test('should parse with no content', () => {
    const html = parseToHtml('```javascript\n```\nregular text   ', [
      precodeParser,
    ]).replace(/[\n\t ]*</g, '<');
    const expectedOutput =
      '<pre class="et-precode pl-0"><code class="content">' +
      '&nbsp;' +
      '</code></pre>' +
      '<p>regular text</p>';
    expect(html).toEqual(expectedOutput);
  });
});
