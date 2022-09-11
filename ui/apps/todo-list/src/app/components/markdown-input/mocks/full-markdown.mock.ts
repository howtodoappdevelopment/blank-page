export const fullMarkdown = `

random text

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

random text
 \`random text\`
  - random text
  ### random text

- [ ] non filled
 - [ ] non filled (0 lvl)
   - [x] child
     - [ ] child ||
     - [ ] child II.5
       - [x] child |||
         - [ ] child IV
          - [ ] child V
- [x] filled
 - [ ] filled child

> my **block quote**
    > test

> separate

\`\`\`
\`\`\`

\`\`\`


\`\`\`

\`\`\`
code block
\`\`\`

- unordered 1
 - un 2
  - un 2.1
   - un 3
* unor *dered 2*
+ unordered

1. ordered
  - nested
2. ordered
  > nested

# Heading 1 x 2

http://url.com
[url](http://url.com)
[url-id][]
[example][url-id-2]
[url-id]: http://test.com
[url-id]: http://test2.com

![Alt](https://picsum.photos/200/300)
![Alt](https://picsum.photos/200/300 "Title")

  ~~strike trough~~
 ==highlight==
<span style="border: 1px solid red">my custom span</span>`;
