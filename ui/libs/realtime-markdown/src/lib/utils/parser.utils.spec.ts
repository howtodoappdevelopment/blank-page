import { parseToHtml } from './parser.utils';
import { headingsParser } from '../elements-configs/headings-configs';
import { bParser } from '../elements-configs/b-configs';

describe('parser utils', () => {
  test('should parse standard text', () => {
    const html = parseToHtml(`regular text\n\tregular text`);
    expect(html).toEqual(`<p>regular text</p><p>\tregular text</p>`);
  });
  test('should parse heading block element', () => {
    const html = parseToHtml(`# h1\n## h2`, [headingsParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    expect(html).toEqual(
      '<h1 class="et-h1"><span class="sign">#&nbsp;</span><span class="content">\nh1\n</span></h1>' +
        '<h2 class="et-h2"><span class="sign">##&nbsp;</span><span class="content">\nh2\n</span></h2>'
    );
  });
  test('should parse heading block element and pure text', () => {
    const html = parseToHtml(`# h1\n## h2\n\ttext`, [headingsParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    expect(html).toEqual(
      '<h1 class="et-h1"><span class="sign">#&nbsp;</span><span class="content">\nh1\n</span></h1>' +
        '<h2 class="et-h2"><span class="sign">##&nbsp;</span><span class="content">\nh2\n</span></h2>' +
        '<p>\ttext</p>'
    );
  });
  test('should parse bold txt element', () => {
    const html = parseToHtml(`    **bold**`, [], [bParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    expect(html).toEqual(
      '<p>    <b class="et-b">\t<span class="sign">**</span>\n<span class="content">bold</span>\n<span class="sign">**</span>\n</b>\n</p>'
    );
  });
});
