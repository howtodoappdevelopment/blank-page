import { parseMarkdownToHtml } from '../utils/static-parser.utils';
import { imgStaticParser } from './img-configs';

describe('img', () => {
  test('should parse ![url](http://url.com)', () => {
    const alt = 'content';
    const src = 'http://url.com';
    const html = parseMarkdownToHtml(
      ` ![${alt}](${src})`,
      [],
      [imgStaticParser]
    );
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content"> <img src="${src}" alt="${alt}" class="et-img"></span></p>`
    );
  });
  test('should parse ![url](http://www.url.com)', () => {
    const alt = 'content';
    const src = 'http://www.url.com';
    const html = parseMarkdownToHtml(
      ` ![${alt}](${src}) `,
      [],
      [imgStaticParser]
    );
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content"> <img src="${src}" alt="${alt}" class="et-img"> </span></p>`
    );
  });
  test('should parse ![url](https://www.url.com)', () => {
    const alt = 'content';
    const src = 'http://https://url.com';
    const html = parseMarkdownToHtml(
      `![${alt}](${src}) `,
      [],
      [imgStaticParser]
    );
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content"><img src="${src}" alt="${alt}" class="et-img"> </span></p>`
    );
  });
  test('should parse ![url](www.url.com)', () => {
    const alt = 'content';
    const src = 'www.url.com';
    const html = parseMarkdownToHtml(
      ` ![${alt}](${src}) `,
      [],
      [imgStaticParser]
    );
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content"> <img src="${src}" alt="${alt}" class="et-img"> </span></p>`
    );
  });
  test('should parse ![url](url.com)', () => {
    const alt = 'content';
    const src = 'url.com';
    const html = parseMarkdownToHtml(
      ` ![${alt}](${src}) `,
      [],
      [imgStaticParser]
    );
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content"> <img src="${src}" alt="${alt}" class="et-img"> </span></p>`
    );
  });
});
