import React from 'react';
import { useParams } from 'react-router-dom';

import { getData, getDataLimit } from '../../../data/data-source';
import Template from '../../../components/user/Template';
import ArtikelDetail from '../../../components/ArtikelDetail';
import ArtikelList from '../../../components/ArtikelList';

function DetailArtikel() {
  const { id } = useParams();
  const [artikel, setArtikel] = React.useState(null);
  const [listArtikel, setListArtikel] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      setArtikel(await getData('artikel', id));
      setListArtikel(await getDataLimit('artikel', 3));
    })();

    return () => {
      setArtikel();
    };
  }, []);

  function renderContent() {
    return (
      <div className="container py-4">
        {artikel ? <ArtikelDetail artikel={artikel} /> : null}
        <div className="artikel-detail fs-6 m-auto mt-4">
          <h3 className="fs-4 text-center">Artikel Lainnya</h3>
          <ArtikelList artikelList={listArtikel} />
        </div>
      </div>
    );
  }

  return <Template content={renderContent()} />;
}

export default DetailArtikel;
