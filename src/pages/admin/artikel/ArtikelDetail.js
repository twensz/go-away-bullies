import React from 'react';
import { useParams } from 'react-router-dom';

import { getData } from '../../../data/data-source';
import Template from '../../../components/admin/Template';
import ArtikelDetailItem from '../../../components/ArtikelDetail';

function ArtikelDetail() {
  const { id } = useParams();
  const [artikel, setArtikel] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const result = await getData('artikel', id);
      setArtikel(result);
    })();

    return () => {
      setArtikel();
    };
  }, []);

  function renderContent() {
    return (
      <div className="container py-4">
        <a href="/artikel">&#8592; kembali ke artikel</a>
        <div className="bg-white py-5 mt-2 rounded shadow">
          {artikel ? <ArtikelDetailItem artikel={artikel} /> : null}
        </div>
      </div>
    );
  }

  return <Template content={renderContent()} />;
}

export default ArtikelDetail;
