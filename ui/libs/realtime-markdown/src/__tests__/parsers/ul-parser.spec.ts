import { toHtml } from '@fortawesome/fontawesome-svg-core';

xdescribe('ul', () => {
  test('- with indent', () => {
    const content = 'content';
    const html = toHtml(` - ${content}
      + {content}`);
    expect(html).toEqual(
      `<ul class="ml-0"><li class="et-ul"><span class="content">${content}</span></li><li class="et-ul"><ul class="ml-1"><li class="et-ul"><span class="content">${content}</span></li></ul></li></ul>`
    );
  });
  test('- without indent', () => {
    const content = 'content';
    const html = toHtml(` - ${content}`);
    expect(html).toEqual(
      `<ul class="ml-0"><li class="et-ul"><span class="content">${content}</span></li></ul>`
    );
  });
  test('ul should be extended with li', () => {
    const content = 'content';
    const html = toHtml(` - ${content}
    * {content}`);
    expect(html).toEqual(
      `<ul class="ml-0"><li class="et-ul"><span class="content">${content}</span></li><li class="et-ul"><span class="content">${content}</span></li></ul>`
    );
  });
});
