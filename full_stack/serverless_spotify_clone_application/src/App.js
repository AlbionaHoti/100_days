import React, { useEffect } from 'react';
import { newsState as newsAtom, view as viewAtom } from './atoms';
import { useRecoilState, useRecoilValue } from 'recoil';

import Menu from './menu';

/*
  - useRecoilValue => it allows read only access to your state inside the recoil
*/
function App() {
  const [news, setNews] = useRecoilState(newsAtom);
  const view = useRecoilValue(viewAtom);

  useEffect(() => {
    const getRepos = async () => {
      const url = `http://newsapi.org/v2/everything?q=bitcoin&apiKey=bc42985b78bd4f1dba1bef98bcb55612?country=${view}`;
      const resp = await fetch(url);
      const body = await resp.json();

      setNews(body);
      console.log(body);
    };

    getRepos();
  }, [view]);

  return (
    <>
      <Menu />
      {news.articles.map((article) => (
        <div key={article.url}>
          <a href={article.url}>
            {article.author} / {article.title}
          </a>
          <div>{article.content}</div>
        </div>
      ))}
    </>
  );
}

export default App;
