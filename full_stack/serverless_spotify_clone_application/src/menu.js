import React from 'react';
import { useRecoilState } from 'recoil';
import { view as viewAtom } from './atoms';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const viewOptions = ['us', 'de'];
  const [view, setView] = useRecoilState(viewAtom);

  return (
    <nav className="menu">
      {viewOptions.map((v) => (
        <a
          className={`menu-item ${view === v ? 'text-bold' : ''}`}
          href="www.webiny.com"
          onClick={() => setView(v)}
          key={v}
        >
          Trending {v}
        </a>
      ))}
    </nav>
  );
};
