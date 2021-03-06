---
describes: Tabs
---

Accessible Tabs component. You can use the TAB key to focus the component and arrow keys to navigate between panels of content. To set a default panel that should be selected on initial render set the `defaultSelectedIndex`.

To restrict the width of the `<Tabs/>`, use the `size` prop. Add space around the entire component using the `margin` prop. Adjust the padding around the panel content via `padding` (default is `small`). Restrict the height of the panel using `minHeight` or `maxHeight`. Finally, switch the
text alignment of the panel content with `textAlign`.

```js
---
example: true
---
<Tabs
  defaultSelectedIndex={2}
  size="medium"
  margin="large auto"
  padding="medium"
>
  <Tabs.Panel title="Tab A" textAlign="center" padding="large">
    <Text>{lorem.paragraphs()}</Text>
  </Tabs.Panel>
  <Tabs.Panel title="Disabled Tab" disabled>
    <Text>{lorem.paragraphs()}</Text>
  </Tabs.Panel>
  <Tabs.Panel title="Tab C">
    <Text>{lorem.paragraphs()}</Text>
  </Tabs.Panel>
  <Tabs.Panel title="Tab D">
    <Text>{lorem.paragraphs()}</Text>
  </Tabs.Panel>
</Tabs>
```

### Secondary Tabs

```js
---
example: true
---
<Tabs variant="secondary">
  <Tabs.Panel title="First Tab" minHeight="10rem" maxHeight="10rem">
    <Text>Hello World</Text>
  </Tabs.Panel>
  <Tabs.Panel title="Disabled Tab" minHeight="10rem" maxHeight="10rem" disabled>
    <Text>{lorem.paragraphs()}</Text>
  </Tabs.Panel>
  <Tabs.Panel title="Third Tab" minHeight="10rem" maxHeight="10rem">
    <Text>{lorem.paragraphs()}</Text>
  </Tabs.Panel>
  <Tabs.Panel title="Fourth Tab" minHeight="10rem" maxHeight="10rem">
    <Text>{lorem.paragraphs()}</Text>
  </Tabs.Panel>
</Tabs>
```

### Guidelines

```js
---
guidelines: true
---
<Guidelines>
  <Figure recommendation="yes" title="Do">
    <Figure.Item>Title should be a single row above content</Figure.Item>
    <Figure.Item>TabButton content should be succinct, preferably one word</Figure.Item>
    <Figure.Item>Use title case</Figure.Item>
    <Figure.Item>Use default variant when a single Tabs component exists on the page</Figure.Item> 
    <Figure.Item>Ensure each Tablist.Panel content is mutually exclusive of the others’</Figure.Item>
  </Figure>
  <Figure recommendation="no" title="Don't">
    <Figure.Item>Exceed 20 characters including spaces for the title</Figure.Item>
    <Figure.Item>Exceed 5 tabs</Figure.Item>
    <Figure.Item>Use avatars, pills, icons, etc in the TabButton</Figure.Item>
    <Figure.Item>Nest tabbed content within a tab</Figure.Item>
    <Figure.Item>Align tabs to the center of the page</Figure.Item>
  </Figure>
</Guidelines>
```
