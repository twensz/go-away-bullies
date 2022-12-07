import React from 'react';
import { getAllData } from '../../data/data-source';

function ArtikelPage() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const result = await getAllData('artikel');

      setData(result);
    })();
  }, []);
  console.log(data);
  return (
    <div>
      <p className="artikel">Artikel</p>
      <div className="list">
        {data.map((artikel) => (
          <div className="card1" key={artikel.id}>
            <img src={artikel?.data?.gambar} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title-list">{artikel?.data?.judul}</h5>
              <p className="card-text-list">{artikel?.data?.isi}</p>
              <a href={`/detail_artikel/${artikel.id}`} className="btn btn-primary">Lihat</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtikelPage;
