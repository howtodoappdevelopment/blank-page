import { toOuterHtml } from './paragraph.parsers';
import { CaretContext } from '../utils/caret.utils';
import { headingsContentChangeParser } from './headings.parsers';
import { createContentEditable } from '../realtime-markdown';

describe('Headings content modification parser', () => {
  test('should change paragraph to heading on # char', () => {
    const contentEditable = createContentEditable(
      toOuterHtml({ innerHtml: ' content' })
    );
    const $event = {
      key: '#',
      target: contentEditable as EventTarget,
      preventDefault: () => {
        /**/
      },
      stopPropagation: () => {
        /**/
      },
    } as KeyboardEvent;
    const caretPosition = {
      currentHtmlElement: contentEditable?.firstElementChild
        ?.firstElementChild as HTMLElement,
      position: {
        relative: 0,
      },
    } as CaretContext;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const setCaretPosition = () => {};
    const hasParsed = headingsContentChangeParser(
      $event,
      caretPosition,
      setCaretPosition
    );
    const expectedOutput =
      `<h1 class="et-h1">` +
      `<span class="sign">#&nbsp;</span>` +
      '<span class="content">content</span>' +
      `</h1>`;
    expect(hasParsed).toEqual(true);
    expect(
      (contentEditable.firstElementChild as HTMLElement).outerHTML.replace(
        /[\n\t ]*</g,
        '<'
      )
    ).toEqual(expectedOutput);
  });
  test('should change paragraph to heading on whitespace char', () => {
    const contentEditable = createContentEditable(
      toOuterHtml({ innerHtml: '#content' })
    );
    const $event = {
      key: ' ',
      target: contentEditable as EventTarget,
      preventDefault: () => {
        /**/
      },
      stopPropagation: () => {
        /**/
      },
    } as KeyboardEvent;
    const caretPosition = {
      currentHtmlElement: contentEditable?.firstElementChild
        ?.firstElementChild as HTMLElement,
      position: {
        relative: 1,
      },
    } as CaretContext;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const setCaretPosition = () => {};
    const hasParsed = headingsContentChangeParser(
      $event,
      caretPosition,
      setCaretPosition
    );
    const expectedOutput =
      `<h1 class="et-h1">` +
      `<span class="sign">#&nbsp;</span>` +
      '<span class="content">content</span>' +
      `</h1>`;
    expect(hasParsed).toEqual(true);
    expect(
      (contentEditable.firstElementChild as HTMLElement).outerHTML.replace(
        /[\n\t ]*</g,
        '<'
      )
    ).toEqual(expectedOutput);
  });
  test('should change paragraph to heading on backspace', () => {
    const contentEditable = createContentEditable(
      toOuterHtml({ innerHtml: '#r content' })
    );
    const $event = {
      key: 'Backspace',
      target: contentEditable as EventTarget,
      preventDefault: () => {
        /**/
      },
      stopPropagation: () => {
        /**/
      },
    } as KeyboardEvent;
    const caretPosition = {
      currentHtmlElement: contentEditable?.firstElementChild
        ?.firstElementChild as HTMLElement,
      position: {
        relative: 2,
      },
    } as CaretContext;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const setCaretPosition = () => {};
    const hasParsed = headingsContentChangeParser(
      $event,
      caretPosition,
      setCaretPosition
    );
    const expectedOutput =
      `<h1 class="et-h1">` +
      `<span class="sign">#&nbsp;</span>` +
      '<span class="content">content</span>' +
      `</h1>`;
    expect(hasParsed).toEqual(true);
    expect(
      (contentEditable.firstElementChild as HTMLElement).outerHTML.replace(
        /[\n\t ]*</g,
        '<'
      )
    ).toEqual(expectedOutput);
  });
  test('should change heading to paragraph on removing whitespace', () => {
    const contentEditable = createContentEditable(
      `<h1 class="et-h1">` +
        `<span class="sign"># </span>` +
        '<span class="content">content</span>' +
        `</h1>`
    );
    const $event = {
      key: 'Backspace',
      target: contentEditable as EventTarget,
      preventDefault: () => {
        /**/
      },
      stopPropagation: () => {
        /**/
      },
    } as KeyboardEvent;
    const caretPosition = {
      currentHtmlElement: contentEditable?.firstElementChild
        ?.firstElementChild as HTMLElement,
      position: {
        relative: 2,
      },
    } as CaretContext;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const setCaretPosition = () => {};
    const hasParsed = headingsContentChangeParser(
      $event,
      caretPosition,
      setCaretPosition
    );
    const expectedOutput = toOuterHtml({ innerHtml: '#content' });
    expect(hasParsed).toEqual(true);
    expect(
      (contentEditable.firstElementChild as HTMLElement).outerHTML.replace(
        /[\n\t ]*</g,
        '<'
      )
    ).toEqual(expectedOutput);
  });
  test('should change heading to paragraph on removing #', () => {
    const contentEditable = createContentEditable(
      `<h1 class="et-h1">` +
        `<span class="sign"># </span>` +
        '<span class="content">content</span>' +
        `</h1>`
    );
    const $event = {
      key: 'Backspace',
      target: contentEditable as EventTarget,
      preventDefault: () => {
        /**/
      },
      stopPropagation: () => {
        /**/
      },
    } as KeyboardEvent;
    const caretPosition = {
      currentHtmlElement: contentEditable?.firstElementChild
        ?.firstElementChild as HTMLElement,
      position: {
        relative: 1,
      },
    } as CaretContext;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const setCaretPosition = () => {};
    const hasParsed = headingsContentChangeParser(
      $event,
      caretPosition,
      setCaretPosition
    );
    const expectedOutput = toOuterHtml({ innerHtml: ' content' });
    expect(hasParsed).toEqual(true);
    expect(
      (contentEditable.firstElementChild as HTMLElement).outerHTML.replace(
        /[\n\t ]*</g,
        '<'
      )
    ).toEqual(expectedOutput);
  });
  test('should change heading 1 to heading 2', () => {
    const contentEditable = createContentEditable(
      `<h1 class="et-h1">` +
        `<span class="sign"># </span>` +
        '<span class="content">content</span>' +
        `</h1>`
    );
    const $event = {
      key: '#',
      target: contentEditable as EventTarget,
      preventDefault: () => {
        /**/
      },
      stopPropagation: () => {
        /**/
      },
    } as KeyboardEvent;
    const caretPosition = {
      currentHtmlElement: contentEditable?.firstElementChild
        ?.firstElementChild as HTMLElement,
      position: {
        relative: 1,
      },
    } as CaretContext;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const setCaretPosition = () => {};
    const hasParsed = headingsContentChangeParser(
      $event,
      caretPosition,
      setCaretPosition
    );
    const expectedOutput =
      `<h2 class="et-h2">` +
      `<span class="sign">##&nbsp;</span>` +
      '<span class="content">content</span>' +
      `</h2>`;
    expect(hasParsed).toEqual(true);
    expect(
      (contentEditable.firstElementChild as HTMLElement).outerHTML.replace(
        /[\n\t ]*</g,
        '<'
      )
    ).toEqual(expectedOutput);
  });
  test('should do nothing on not allowed char', () => {
    const contentEditable = createContentEditable(
      `<h1 class="et-h1">` +
        `<span class="sign"># </span>` +
        '<span class="content">content</span>' +
        `</h1>`
    );
    const $event = {
      key: 'a',
      target: contentEditable as EventTarget,
      preventDefault: () => {
        /**/
      },
      stopPropagation: () => {
        /**/
      },
    } as KeyboardEvent;
    const caretPosition = {
      currentHtmlElement: contentEditable?.firstElementChild?.children.item(
        1
      ) as HTMLElement,
      position: {
        relative: 1,
      },
    } as CaretContext;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const setCaretPosition = () => {};
    const hasParsed = headingsContentChangeParser(
      $event,
      caretPosition,
      setCaretPosition
    );

    expect(hasParsed).toEqual(false);
  });
  test('should do nothing on not allowed element type', () => {
    const contentEditable = createContentEditable(
      `<h7 class="et-h7">` +
        `<span class="sign">####### </span>` +
        '<span class="content">content</span>' +
        `</h7>`
    );
    const $event = {
      key: 'Backspace',
      target: contentEditable as EventTarget,
      preventDefault: () => {
        /**/
      },
      stopPropagation: () => {
        /**/
      },
    } as KeyboardEvent;
    const caretPosition = {
      currentHtmlElement: contentEditable?.firstElementChild?.children.item(
        1
      ) as HTMLElement,
      position: {
        relative: 7,
      },
    } as CaretContext;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const setCaretPosition = () => {};
    const hasParsed = headingsContentChangeParser(
      $event,
      caretPosition,
      setCaretPosition
    );

    expect(hasParsed).toEqual(false);
  });
});
