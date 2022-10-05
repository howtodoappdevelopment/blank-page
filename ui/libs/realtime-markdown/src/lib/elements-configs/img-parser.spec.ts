import { parseToHtml } from '../utils/parser.utils';
import { imgParser } from './img-configs';

describe('img', () => {
  test('should parse ![url](http://url.com)', () => {
    const alt = 'content';
    const src = 'http://url.com';
    const html = parseToHtml(` ![${alt}](${src})`, [], [imgParser]);
    expect(html).toEqual(
      `<p class="pl-0"> <img src="${src}" alt="${alt}" class="et-img"></p>`
    );
  });
  test('should parse ![url](http://www.url.com)', () => {
    const alt = 'content';
    const src = 'http://www.url.com';
    const html = parseToHtml(` ![${alt}](${src}) `, [], [imgParser]);
    expect(html).toEqual(
      `<p class="pl-0"> <img src="${src}" alt="${alt}" class="et-img"> </p>`
    );
  });
  test('should parse ![url](https://www.url.com)', () => {
    const alt = 'content';
    const src = 'http://https://url.com';
    const html = parseToHtml(`![${alt}](${src}) `, [], [imgParser]);
    expect(html).toEqual(
      `<p class="pl-0"><img src="${src}" alt="${alt}" class="et-img"> </p>`
    );
  });
  test('should parse ![url](www.url.com)', () => {
    const alt = 'content';
    const src = 'www.url.com';
    const html = parseToHtml(` ![${alt}](${src}) `, [], [imgParser]);
    expect(html).toEqual(
      `<p class="pl-0"> <img src="${src}" alt="${alt}" class="et-img"> </p>`
    );
  });
  test('should parse ![url](url.com)', () => {
    const alt = 'content';
    const src = 'url.com';
    const html = parseToHtml(` ![${alt}](${src}) `, [], [imgParser]);
    expect(html).toEqual(
      `<p class="pl-0"> <img src="${src}" alt="${alt}" class="et-img"> </p>`
    );
  });
});
