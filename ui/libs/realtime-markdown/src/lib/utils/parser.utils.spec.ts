import { parseToHtml } from './parser.utils';
import { headingsParser } from '../elements-configs/headings-configs';
import { bParser } from '../elements-configs/b-configs';

describe('parser utils', () => {
  test('should parse standard text', () => {
    const html = parseToHtml(`regular text\n\tregular text`);
    expect(html).toEqual(`<p>regular text</p><p>\tregular text</p>`);
  });
  test('should parse heading block element', () => {
    const html = parseToHtml(`# h1\n## h2`, [headingsParser])
      .replace(/[\n\t ]*</g, '<')
      .replace(/>[\n\t ]*/g, '>');
    const expectedOutput =
      '<h1 class="et-h1"><span class="sign">#&nbsp;</span><span class="content">h1</span></h1>' +
      '<h2 class="et-h2"><span class="sign">##&nbsp;</span><span class="content">h2</span></h2>';
    expect(html).toEqual(expectedOutput);
  });
  test('should parse heading block element and pure text', () => {
    const html = parseToHtml(`# h1\n## h2\ntext`, [headingsParser])
      .replace(/[\n\t ]*</g, '<')
      .replace(/>[\n\t ]*/g, '>');
    const expectedOutput =
      '<h1 class="et-h1"><span class="sign">#&nbsp;</span><span class="content">h1</span></h1>' +
      '<h2 class="et-h2"><span class="sign">##&nbsp;</span><span class="content">h2</span></h2>' +
      '<p>text</p>';
    expect(html).toEqual(expectedOutput);
  });
  test('should parse bold txt element', () => {
    const html = parseToHtml(`**bold**  r`, [], [bParser]).replace(
      /[\n\t ]*</g,
      '<'
    );
    const expectedOutput =
      '<p><b class="et-b">' +
      '<span class="sign">**</span>' +
      '<span class="content">bold</span>' +
      '<span class="sign">**</span>' +
      '</b>  r</p>';
    expect(html).toEqual(expectedOutput);
  });
  test('should parse multiline element', () => {
    //
  });
});
