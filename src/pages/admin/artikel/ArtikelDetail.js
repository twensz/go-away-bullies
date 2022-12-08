import React from 'react';
import { useParams } from 'react-router-dom';

import { formatDate, getData } from '../../../data/data-source';
import Template from '../../../components/admin/Template';

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
        {
          artikel
            ? (
              <div className="container p-3 bg-white mt-2">
                <h2 className="fs-1 fw-semibold text-dark">{artikel.data.judul}</h2>
                <div className="text-muted my-3">{`${formatDate(artikel.data.dibuatPada)}  sadf  ${artikel.data.penulis}`}</div>
                <img
                  style={{
                    maxHeight: '400px', width: '100%', objectFit: 'cover', margin: '20px 0',
                  }}
                  src={artikel.data.gambar || 'https://dummyimage.com/600x400/000/fff'}
                  className="img-fluid border"
                  alt="artikel hero"
                />
                <p className="mt-3 lh-lg" style={{ whiteSpace: 'pre-wrap' }}>{artikel.data.isi}</p>
              </div>
            )
            : null
        }
      </div>
    );
  }

  return <Template content={renderContent()} />;
}

export default ArtikelDetail;
