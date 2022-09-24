import { toHtml } from '@fortawesome/fontawesome-svg-core';

xdescribe('combined', () => {
  test('should parse ~~\\*\\*[^*~]*\\*\\*~~', () => {
    const content = 'bold txt';
    const html = toHtml(`~~**${content}**~~`);
    expect(html).toEqual(`<p>
  <span class="et-strike">
    <span class="sign">~~</span>
    <span class="content">
      <b class="et-b">
        <span class="sign">**</span>
        <span class="content">${content}</span>
        <span class="sign">**</span>
      </b>
    </span>
    <span class="sign">~~</span>
  </span>
</p>`);
  });
  test('should parse \\*\\*~~[^*~]~~*\\*\\*', () => {
    const content = 'bold txt';
    const html = toHtml(`**~~${content}~~**`);
    expect(html).toEqual(`<p>
  <b class="et-b">
    <span class="sign">**</span>
    <span class="content">
      <span class="et-strike">
        <span class="sign">~~</span>
        <span class="content">${content}</span>
        <span class="sign">~~</span>
      </span>
    </span>
    <span class="sign">**</span>
  </b>
</p>`);
  });
});
