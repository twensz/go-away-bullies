import React from 'react';
import ArtikelList from '../../../components/ArtikelList';
import Template from '../../../components/user/Template';
import { getAllData } from '../../../data/data-source';

function Artikel() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const result = await getAllData('artikel');
      setData(result);
    })();
  }, []);

  function renderContent() {
    return (
      <div className="container py-4">
        <h2 className="fs-3 mb-3">Artikel</h2>
        <ArtikelList artikelList={data} />
      </div>
    );
  }

  return <Template content={renderContent()} />;
}

export default Artikel;
