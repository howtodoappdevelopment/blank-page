import { parseToHtml } from '../utils/parser.utils';
import { aParsers } from './a-configs';

describe('a hrefs', () => {
  test('should parse [url](http://url.com)', () => {
    const url = 'http://url.com';
    const title = 'url';
    const html = parseToHtml(`[${title}](${url})`, [], aParsers);
    expect(html).toEqual(`<p><a href="${url}" class="et-a">${title}</a></p>`);
  });
  test('should parse [url](http://www.url.com)', () => {
    const url = 'http://www.url.com';
    const title = 'url';
    const html = parseToHtml(`[${title}](${url})`, [], aParsers);
    expect(html).toEqual(`<p><a href="${url}" class="et-a">${title}</a></p>`);
  });
  test('should parse [url](https://www.url.com)', () => {
    const url = 'https://www.url.com';
    const title = 'url';
    const html = parseToHtml(`[${title}](${url})`, [], aParsers);
    expect(html).toEqual(`<p><a href="${url}" class="et-a">${title}</a></p>`);
  });
  test('should parse [url](www.url.com)', () => {
    const url = 'www.url.com';
    const title = 'url';
    const html = parseToHtml(`[${title}](${url})`, [], aParsers);
    expect(html).toEqual(`<p><a href="${url}" class="et-a">${title}</a></p>`);
  });
  test('should parse http://url.com', () => {
    let url = 'http://www.url.com';
    let html = parseToHtml(url, [], aParsers);
    expect(html).toEqual(`<p><a href="${url}" class="et-a">${url}</a></p>`);

    url = ' http://www.url.com';
    html = parseToHtml(url, [], aParsers);
    expect(html).toEqual(
      `<p> <a href="${url.trim()}" class="et-a">${url.trim()}</a></p>`
    );
  });
  test('should parse https://url.com', () => {
    const url = 'https://www.url.com';
    const html = parseToHtml(url, [], aParsers);
    expect(html).toEqual(`<p><a href="${url}" class="et-a">${url}</a></p>`);
  });
  test('should parse [url]( http://url.com )', () => {
    const url = '[url]( http://url.com )';
    const html = parseToHtml(url, [], aParsers);
    expect(html).toEqual(
      '<p>[url]( <a href="http://url.com" class="et-a">http://url.com</a> )</p>'
    );
  });
  test("shouldn't parse url.com", () => {
    let url = 'url.com';
    let html = parseToHtml(url, [], aParsers);
    expect(html).toEqual(`<p>${url}</p>`);

    url = '<a href="http://url.com"></a>';
    html = parseToHtml(url, [], aParsers);
    expect(html).toEqual(`<p>${url}</p>`);

    url = '[url]( url.com )';
    html = parseToHtml(url, [], aParsers);
    expect(html).toEqual(`<p>${url}</p>`);

    url = '[url]( url.com)';
    html = parseToHtml(url, [], aParsers);
    expect(html).toEqual(`<p>${url}</p>`);

    url = '[url](url.com )';
    html = parseToHtml(url, [], aParsers);
    expect(html).toEqual(`<p>${url}</p>`);
  });
});
