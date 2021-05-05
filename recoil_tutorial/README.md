## ATOMS

Atoms are units of state. They're updateable and subscribable:

- When an atom is updated, each subscribed component is re-rendered
  with the new value.
- They can be created ad runtime, too.

- Atoms can be used in place of React local component state. If the same atom
  is used from multiple components, all those components share
  their state.

- To read and write an atom from a component - use a hook called `useRecoilState`.

Example: `App.js` file

## Selectors

A **Selector** is a pure func that accepts atoms or other selectors as input. When these upstream atoms or selectors are updated, the selector func will be re-evaluated.

- Components can subscribe to selectors just like atoms, and will then be re-rendered when the selectors change.

- Selectors are used to calculate **derived** data that is based on state. This let us avoid redundant state because a minimal set of state is stored in atoms, while everything else is efficiently computed as a function of that minimal state.

  - Since selectors keep track of what components need them and what state they depend on, they make this functional approach very efficient.
  - The `get` property of selector is the function that is to be computed.
  - It can access the value of atoms and other selectors using the `get` argument passed to it.
  - Whenever it accesses another atom or selector, a **dependency relationship** is created such that updating the other atom or selector will couse this one to be recomputed.

```
const fontSizeLabelState = selector ({
    key: 'fontSizeLabelState',
    get: ({get}) => {
        const fontSize = get(fontSizeState); // the dependency: fontSizeState
        const unit = 'px';

        return `${fontSize}${unit}`;
    }
})
```

- In this `fontSizeLabelState` example, the selector has one dependency: the `fontSizeState` atom. Conceptually, the `fontSizeLabelState` selector behaves like a pure function that takes a `fontSizeState` as input and returns a formatted font size label as output.

- Selectors can be read using `useRecoilValue()`, which takes an atom or selector as an argument and returns the corresponding value. We don't use the `useRecoilState()` as the `fontSizeLabelState` selector is not **writeable**.

## Tutorial
