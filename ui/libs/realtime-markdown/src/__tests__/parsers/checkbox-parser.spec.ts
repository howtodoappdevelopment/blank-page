import { toHtml } from '@fortawesome/fontawesome-svg-core';

xdescribe('checkbox', () => {
  test('- [ ] parsing', () => {
    let content = 'content';
    let html = toHtml(`- [ ] ${content}`);
    expect(html).toEqual(`<p><input type="checkbox" /> ${content}</p>`);

    content = 'content';
    html = toHtml(` - [ ] ${content}`);
    expect(html).toEqual(`<p><input type="checkbox" /> ${content}</p>`);
  });
  test('- [x] parsing', () => {
    let content = 'content';
    let html = toHtml(`- [x] ${content}`);
    expect(html).toEqual(
      `<p><input type="checkbox" checked="checked" /> ${content}</p>`
    );

    content = 'content';
    html = toHtml(` - [x] ${content}`);
    expect(html).toEqual(
      `<p><input type="checkbox" checked="checked" /> ${content}</p>`
    );
  });
  test('- [ ] with indent parsing', () => {
    let content = 'content';
    let html = toHtml(`     - [ ] ${content}`);
    expect(html).toEqual(
      `<p class="et-p ml-0"><input type="checkbox" /> ${content}</p>`
    );

    content = 'content';
    html = toHtml(`    - [ ] ${content}
      - [ ] ${content}`);
    expect(html).toEqual(
      `<p class="et-p ml-0"><input type="checkbox" /> ${content}</p>
<p class="ml-1"><input type="checkbox"> ${content}</p>`
    );
  });
  test('- [x] with indent parsing', () => {
    let content = 'content';
    let html = toHtml(`     - [x] ${content}`);
    expect(html).toEqual(
      `<p class="et-p ml-0"><input type="checkbox" checked="checked" /> ${content}</p>`
    );

    content = 'content';
    html = toHtml(`    - [x] ${content}
      - [x] ${content}`);
    expect(html).toEqual(
      `<p class="et-p ml-0"><input type="checkbox" checked="checked" /> ${content}</p>
<p class="ml-1"><input type="checkbox" checked="checked"> ${content}</p>`
    );
  });
});
