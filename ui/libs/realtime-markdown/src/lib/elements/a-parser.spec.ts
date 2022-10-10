import { parseMarkdownToHtml } from '../utils/static-parser.utils';
import { aStaticParsers } from './a-configs';

describe('a hrefs', () => {
  test('should parse [url](http://url.com)', () => {
    const url = 'http://url.com';
    const title = 'url';
    const html = parseMarkdownToHtml(`[${title}](${url})`, [], aStaticParsers);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content"><a href="${url}" class="et-a">${title}</a></span></p>`
    );
  });
  test('should parse [url](http://www.url.com)', () => {
    const url = 'http://www.url.com';
    const title = 'url';
    const html = parseMarkdownToHtml(`[${title}](${url})`, [], aStaticParsers);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content"><a href="${url}" class="et-a">${title}</a></span></p>`
    );
  });
  test('should parse [url](https://www.url.com)', () => {
    const url = 'https://www.url.com';
    const title = 'url';
    const html = parseMarkdownToHtml(`[${title}](${url})`, [], aStaticParsers);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content"><a href="${url}" class="et-a">${title}</a></span></p>`
    );
  });
  test('should parse [url](www.url.com)', () => {
    const url = 'www.url.com';
    const title = 'url';
    const html = parseMarkdownToHtml(`[${title}](${url})`, [], aStaticParsers);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content"><a href="${url}" class="et-a">${title}</a></span></p>`
    );
  });
  test('should parse http://url.com', () => {
    let url = 'http://www.url.com';
    let html = parseMarkdownToHtml(url, [], aStaticParsers);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content"><a href="${url}" class="et-a">${url}</a></span></p>`
    );

    url = ' http://www.url.com';
    html = parseMarkdownToHtml(url, [], aStaticParsers);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content"> <a href="${url.trim()}" class="et-a">${url.trim()}</a></span></p>`
    );
  });
  test('should parse https://url.com', () => {
    const url = 'https://www.url.com';
    const html = parseMarkdownToHtml(url, [], aStaticParsers);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content"><a href="${url}" class="et-a">${url}</a></span></p>`
    );
  });
  test('should parse [url]( http://url.com )', () => {
    const url = '[url]( http://url.com )';
    const html = parseMarkdownToHtml(url, [], aStaticParsers);
    expect(html).toEqual(
      '<p class="et-p ml-0"><span class="content">[url]( <a href="http://url.com" class="et-a">http://url.com</a> )</span></p>'
    );
  });
  test("shouldn't parse url.com", () => {
    let url = 'url.com';
    let html = parseMarkdownToHtml(url, [], aStaticParsers);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${url}</span></p>`
    );

    url = '<a href="http://url.com"></a>';
    html = parseMarkdownToHtml(url, [], aStaticParsers);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${url}</span></p>`
    );

    url = '[url]( url.com )';
    html = parseMarkdownToHtml(url, [], aStaticParsers);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${url}</span></p>`
    );

    url = '[url]( url.com)';
    html = parseMarkdownToHtml(url, [], aStaticParsers);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${url}</span></p>`
    );

    url = '[url](url.com )';
    html = parseMarkdownToHtml(url, [], aStaticParsers);
    expect(html).toEqual(
      `<p class="et-p ml-0"><span class="content">${url}</span></p>`
    );
  });
});
