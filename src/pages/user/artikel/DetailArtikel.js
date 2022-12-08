/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';

import ArtikelDetail from '../../../components/ArtikelDetail';
import Template from '../../../components/user/Template';
import { getData } from '../../../data/data-source';

function DetailArtikel() {
  const { id } = useParams();
  const [artikel, setArtikel] = React.useState({});

  React.useEffect(() => {
    (async () => {
      const result = await getData('artikel', id);
      setArtikel(result);
    })();
  }, []);

  function renderContent() {
    return (
      <div className="container py-5">
        <ArtikelDetail artikel={artikel} />
      </div>
    );
  }

  return <Template content={renderContent()} />;
}
export default DetailArtikel;
