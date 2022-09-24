import { toHtml } from '@fortawesome/fontawesome-svg-core';

xdescribe('empty line', () => {
  test('should parse ^ *\n', () => {
    let html = toHtml(`\n`);
    expect(html).toEqual(`<p>&nbsp;</p>`);

    html = toHtml(`          \n`);
    expect(html).toEqual(`<p>&nbsp;</p>`);
  });
  test("shouldn't parse", () => {
    let html = toHtml(`r\n`);
    expect(html).toEqual(`<p>&nbsp;</p>`);

    html = toHtml(`   r\n`);
    expect(html).toEqual(`<p>&nbsp;</p>`);
  });
});
