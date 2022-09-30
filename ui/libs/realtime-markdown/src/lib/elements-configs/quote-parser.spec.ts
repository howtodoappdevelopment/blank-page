import { parseToHtml } from '../utils/parser.utils';
import { quoteParser } from './quote-configs';

xdescribe('quote', () => {
  test('with indent', () => {
    const content = 'content';
    const html = parseToHtml(`  > ${content}`, [quoteParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    const expectedOutput = `<p class="et-quote pl-1">
        <span class="content">${content}</span>
      </p>`.replace(/^( *|\n|\t)*/gm, '');
    expect(html).toEqual(expectedOutput);
  });
  test('without indent', () => {
    const content = 'content';
    const html = parseToHtml(`> ${content}`, [quoteParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    const expectedOutput = `<p class="et-quote pl-0">
        <span class="content">${content}</span>
      </p>`.replace(/^( *|\n|\t)*/gm, '');
    expect(html).toEqual(expectedOutput);
  });
  test('multiline', () => {
    const content = 'content';
    let html = parseToHtml(`> ${content}\n> ${content}`, [quoteParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    let expectedOutput = `<p class="et-quote pl-0">
        <span class="content">${content}</span>
        <span class="content">${content}</span>
      </p>`.replace(/^( *|\n|\t)*/gm, '');
    expect(html).toEqual(expectedOutput);

    html = parseToHtml(`> ${content}\n  > ${content}`, [quoteParser]).replace(
      /^( *|\n|\t)*/gm,
      ''
    );
    expectedOutput = `<p class="et-quote pl-0">
        <span class="content">${content}</span>
      </p>
<p class="et-quote pl-1">
        <span class="content">${content}</span>
      </p>`.replace(/^( *|\n|\t)*/gm, '');
    expect(html).toEqual(expectedOutput);
  });
});
