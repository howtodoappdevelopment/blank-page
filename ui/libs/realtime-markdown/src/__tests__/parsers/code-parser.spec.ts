import { toHtml } from '@fortawesome/fontawesome-svg-core';

xdescribe('code', () => {
  test('`` parsing', () => {
    const content = 'content';
    const html = toHtml(`\`${content}\``);
    expect(html).toEqual(
      `<p class="pl-0"><code class="et-code">${content}</code></p>`
    );
  });
  test('``` parsing', () => {
    const html = toHtml(`\`\`\``);
    expect(html).toEqual(`<p class="pl-0">\`\`}\`</p>`);
  });
});
