import React from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../../data/data-source';
import Artikel from './Artikel';

function DetailArtikel() {
  const { id } = useParams();
  const [artikel, setArtikel] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      const result = await getData('artikel', id);
      setArtikel(result);
    })();
  }, []);
  return (
    <div>
      <div className="detail">
        <div className="card_detail mb-3">
          <h2 className="card-title">{artikel?.data?.judul}</h2>
          <p className="card-text-detail"><small className="text-muted">{artikel?.data?.penulis}</small></p>
          <img src={artikel?.data?.gambar} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              {artikel?.data?.isi}
            </p>
          </div>
        </div>
      </div>
      <Artikel />
    </div>
  );
}
export default DetailArtikel;
