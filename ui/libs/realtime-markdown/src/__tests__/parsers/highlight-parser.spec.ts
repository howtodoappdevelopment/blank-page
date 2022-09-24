import { toHtml } from '@fortawesome/fontawesome-svg-core';

xdescribe('highlight', () => {
  test('should parse ^ *\n', () => {
    const content = 'content';
    let html = toHtml(`==${content}==`);
    expect(html).toEqual(
      `<p><span class="et-highlight"><span class="sign">==</span><span class="content">${content}</span><span class="sign">==</span></span></p>`
    );

    html = toHtml(` ==${content}== r`);
    expect(html).toEqual(
      `<p> <span class="et-highlight"><span class="sign">==</span><span class="content">${content}</span><span class="sign">==</span></span> r</p>`
    );
  });
  test("shouldn't parse", () => {
    let content = `= =content==`;
    let html = toHtml(content);
    expect(html).toEqual(`<p>${content}</p>`);

    content = ` ==${content}= = r`;
    html = toHtml(content);
    expect(html).toEqual(`<p>${content}</p>`);

    content = ` ==${content}==r`;
    html = toHtml(content);
    expect(html).toEqual(`<p>${content}</p>`);
  });
});
