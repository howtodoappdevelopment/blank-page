import { toHtml } from '@fortawesome/fontawesome-svg-core';

xdescribe('ol', () => {
  test('1. with indent', () => {
    const content = 'content';
    const html = toHtml(` 1. ${content}
      a. {content}`);
    expect(html).toEqual(
      `<ol class="ml-0"><li class="et-ol"><span class="content">${content}</span></li><li class="et-ol"><ol class="ml-1"><li class="et-ol"><span class="content">${content}</span></li></ol></li></ol>`
    );
  });
  test('1. without indent', () => {
    const content = 'content';
    const html = toHtml(` 1. ${content}`);
    expect(html).toEqual(
      `<ol class="ml-0"><li class="et-ol"><span class="content">${content}</span></li></ol>`
    );
  });
  test('ol should be extended with li', () => {
    const content = 'content';
    const html = toHtml(` 1. ${content}
    2. {content}`);
    expect(html).toEqual(
      `<ol class="ml-0"><li class="et-ol"><span class="content">${content}</span></li><li class="et-ol"><span class="content">${content}</span></li></ol>`
    );
  });
});
