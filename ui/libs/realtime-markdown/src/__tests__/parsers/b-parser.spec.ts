import { toHtml } from '@fortawesome/fontawesome-svg-core';

xdescribe('bold\\strong', () => {
  test('should parse \\*\\*[^*]+\\*\\*', () => {
    const content = 'bold txt';
    const html = toHtml(`**${content}**`);
    expect(html).toEqual(`<p>
  <b class="et-b">
    <span class="sign">**</span>
    <span class="content">${content}</span>
    <span class="sign">**</span>
  </b>
</p>`);
  });
  test('should parse ==\\*\\*[^*=]*\\*\\*==', () => {
    const content = 'bold txt';
    const html = toHtml(`==**${content}**==`);
    expect(html).toEqual(`<p>
  <span class="et-highlight">
    <span class="sign">==</span>
    <span class="content">
      <b class="et-b">
        <span class="sign">**</span>
        <span class="content">${content}</span>
        <span class="sign">**</span>
      </b>
    </span>
    <span class="sign">==</span>
  </span>
</p>`);
  });
  test('should parse \\*\\*==[^*=]==*\\*\\*', () => {
    const content = 'bold txt';
    const html = toHtml(`==**${content}**==`);
    expect(html).toEqual(`<p>
  <b class="et-b">
    <span class="sign">**</span>
    <span class="content">
      <span class="et-highlight">
        <span class="sign">==</span>
        <span class="content">${content}</span>
        <span class="sign">==</span>
      </span>
    </span>
    <span class="sign">**</span>
  </b>
</p>`);
  });
  test('should parse \\*\\*\\*[^*=]+\\*\\*\\*', () => {
    const content = 'bold txt';
    const html = toHtml(`***${content}***`);
    expect(html).toEqual(`<p>
  <b class="et-b">
    <span class="sign">**</span>
    <span class="content">
      <i class="et-i">
        <span class="sign">*</span>
        <span class="content">${content}</span>
        <span class="sign">*</span>
      </i>
    </span>
    <span class="sign">**</span>
  </b>
</p>`);
  });
  test("shouldn't parse", () => {
    let content = '** test**';
    let html = toHtml(content);
    expect(html).toEqual(`<p>${content}</p>`);

    content = '**test **';
    html = toHtml(content);
    expect(html).toEqual(`<p>${content}</p>`);

    content = '****';
    html = toHtml(content);
    expect(html).toEqual(`<p>${content}</p>`);

    content = '********';
    html = toHtml(content);
    expect(html).toEqual(`<p>${content}</p>`);
  });
});
