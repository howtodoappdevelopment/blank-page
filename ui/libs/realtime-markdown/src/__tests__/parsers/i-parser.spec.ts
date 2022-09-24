import { toHtml } from '@fortawesome/fontawesome-svg-core';

xdescribe('i', () => {
  test('should parse', () => {
    const content = 'content';
    let html = toHtml(`*${content}*`);
    expect(html).toEqual(
      `<p><i class="et-i"><span class="sign">*</span><span class="content">${content}</span><span class="sign">*</span></i></p>`
    );

    html = toHtml(` *${content}* r`);
    expect(html).toEqual(
      `<p> <i class="et-i"><span class="sign">*</span><span class="content">${content}</span><span class="sign">*</span></i> r</p>`
    );
  });
  test('should parse ***.+***', () => {
    const content = 'content';
    const html = toHtml(` ***${content}*** `);
    expect(html).toEqual(
      `<p> <i class="et-i"><span class="sign">*</span><span class="content"><b class="et-b"><span class="sign">**</span><span class="content">${content}</span><span class="sign">**</span></b></span></span><span class="sign">*</span></i> </p>`
    );
  });
  test("shouldn't parse", () => {
    let content = `*content *`;
    let html = toHtml(`*${content} *`);
    expect(html).toEqual(`<p></p>`);

    content = ` *${content}*r`;
    html = toHtml(content);
    expect(html).toEqual(`<p>${content}</p>`);
  });
});
