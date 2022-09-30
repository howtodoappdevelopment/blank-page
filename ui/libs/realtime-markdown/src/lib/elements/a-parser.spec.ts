import { parseToHtml } from '../utils/parser.utils';

xdescribe('a hrefs', () => {
  test('should parse [url](http://url.com)', () => {
    const url = 'http://url.com';
    const title = 'url';
    const html = parseToHtml(`[${title}](${url})`);
    expect(html).toEqual(`<p><a href="${url}" class="et-a">${title}</a></p>`);
  });
  test('should parse [url](http://www.url.com)', () => {
    const url = 'http://www.url.com';
    const title = 'url';
    const html = parseToHtml(`[${title}](${url})`);
    expect(html).toEqual(`<p><a href="${url}" class="et-a">${title}</a></p>`);
  });
  test('should parse [url](https://www.url.com)', () => {
    const url = 'https://www.url.com';
    const title = 'url';
    const html = parseToHtml(`[${title}](${url})`);
    expect(html).toEqual(`<p><a href="${url}" class="et-a">${title}</a></p>`);
  });
  test('should parse [url](www.url.com)', () => {
    const url = 'www.url.com';
    const title = 'url';
    const html = parseToHtml(`[${title}](${url})`);
    expect(html).toEqual(`<p><a href="${url}" class="et-a">${title}</a></p>`);
  });
  test('should parse ~~[url](http://url.com)~~', () => {
    const url = 'http://www.url.com';
    const title = 'url';
    const html = parseToHtml(`~~[${title}](${url})~~`);
    const expectedOutput = `
<p><span class="et-strike">
  <span class="sign">~~</span>
  <span class="content">
    <a href="${url}" class="et-a">${title}</a>
  </span>
  <span class="sign">~~</span>
</span></p>
`.trim();
    expect(html).toEqual(expectedOutput);
  });
  test('should parse http://url.com', () => {
    const url = 'http://www.url.com';
    const html = parseToHtml(url);
    expect(html).toEqual(`<p><a href="${url}" class="et-a">${url}</a></p>`);
  });
  test('should parse https://url.com', () => {
    const url = 'https://www.url.com';
    const html = parseToHtml(url);
    expect(html).toEqual(`<p><a href="${url}" class="et-a">${url}</a></p>`);
  });
  test("shouldn't parse url.com", () => {
    const url = 'url.com';
    const html = parseToHtml(url);
    expect(html).toEqual(`<p>${url}</p>`);
  });
});
