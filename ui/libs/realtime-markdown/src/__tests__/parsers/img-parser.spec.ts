import { toHtml } from '@fortawesome/fontawesome-svg-core';

xdescribe('img', () => {
  test('should parse ![url](http://url.com)', () => {
    const alt = 'content';
    const src = 'http://url.com';
    const html = toHtml(` ![${alt}](url) `);
    expect(html).toEqual(`<p> <img src="${src}" alt="${alt}" /> </p>`);
  });
  test('should parse ![url](http://www.url.com)', () => {
    const alt = 'content';
    const src = 'http://www.url.com';
    const html = toHtml(` ![${alt}](url) `);
    expect(html).toEqual(`<p> <img src="${src}" alt="${alt}" /> </p>`);
  });
  test('should parse ![url](https://www.url.com)', () => {
    const alt = 'content';
    const src = 'http://https://url.com';
    const html = toHtml(` ![${alt}](url) `);
    expect(html).toEqual(`<p> <img src="${src}" alt="${alt}" /> </p>`);
  });
  test('should parse ![url](www.url.com)', () => {
    const alt = 'content';
    const src = 'www.url.com';
    const html = toHtml(` ![${alt}](url) `);
    expect(html).toEqual(`<p> <img src="${src}" alt="${alt}" /> </p>`);
  });
  test('should parse ![url](url.com)', () => {
    const alt = 'content';
    const src = 'url.com';
    const html = toHtml(` ![${alt}](url) `);
    expect(html).toEqual(`<p> <img src="${src}" alt="${alt}" /> </p>`);
  });
});
