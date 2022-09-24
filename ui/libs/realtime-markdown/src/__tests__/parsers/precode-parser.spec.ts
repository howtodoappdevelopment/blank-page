import { toHtml } from '@fortawesome/fontawesome-svg-core';

xdescribe('precode', () => {
  test('with indent', () => {
    const content = 'content';
    const html = toHtml(` 1. ${content}
      a. {content}`);
    expect(html).toEqual(
      `<ol class="pl-0"><li class="et-ol"><span class="content">${content}</span></li><li class="et-ol"><ol class="pl-1"><li class="et-ol"><span class="content">${content}</span></li></ol></li></ol>`
    );
  });
  test('without indent', () => {});
  test('precode > b', () => {});
  test('precode > i', () => {});
  test('precode > code', () => {});
  test('should be extended', () => {});
});
