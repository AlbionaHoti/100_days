import './App.css';

import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const fontSizeState = atom({
  key: 'fontSizeState', // they need a unique key for debugging, persistence,
  // advanced APIs that let you see a map of all ATOMS.
  default: 14,
});

const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});

function App() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);
  return (
    <div>
      <button
        onClick={() => setFontSize((size) => size + 1)}
        style={{ fontSize }}
      >
        Click to Enlarge
      </button>

      <h3>Welcome blabla</h3>
      <p style={{ fontSize }}>This text will increase in size too.</p>
      <div>Current font size: {fontSizeLabel}</div>
    </div>
  );
}

export default App;
