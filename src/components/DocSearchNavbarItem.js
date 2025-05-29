import React, { useEffect } from 'react';

export default function DocSearchNavbarItem() {
  useEffect(() => {
    import('@docsearch/js').then(({ default: docsearch }) => {
      docsearch({
        appId: '6SO3NK58E1',
        apiKey: '28b9141bf7ced7e91430110f1ba9896e',
        indexName: 'spid-protocol-projectio',
        container: '#docsearch-container',
        insights: true,
        debug: false,
      });
    });
  }, []);

  return <div id="docsearch-container" />;
}
