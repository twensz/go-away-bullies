import React from 'react';
import { BsFolder2Open } from 'react-icons/bs';

import { formatDate, getDataLimit } from '../data/data-source';
import Template from '../components/user/Template';
import CONFIG from '../globals/config';
import berandaImage1 from '../images/beranda-1.jpg';

function Beranda() {
  const [listArtikel, setListArtikel] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      setListArtikel(await getDataLimit('artikel', 3));
    })();

    return () => {
      setListArtikel([]);
    };
  }, []);

  function renderContent() {
    return (
      <>
        <div className="hero">
          <h1 className="hero__text fw-light text-white p-3 rounded">
            Bersama Melawan
            <span className="text-nowrap">
              <span className="text-uppercase bg-primary ms-3 me-1 fw-semibold "> Bullying </span>
              !
            </span>
          </h1>
        </div>

        <div className="container py-5">
          <section className="laporan-cta py-4">
            <h2 className="fs-3">Laporkan Tindak Bullying</h2>
            <div className="row gx-4 mt-4">
              <div className="laporan-cta__image-container col-md-6">
                <img src={berandaImage1} className="img-fluid" alt="Tindak kekerasan bullying" />
              </div>
              <div className="col-md-6 mt-3">
                <p className="fs-5">
                  Jika anda melihat ataupun mengalami tindak bullying,
                  anda bisa langsung melaporkannya disini
                </p>
                <a href="/laporan" className="btn btn-primary">
                  Lapor
                </a>
              </div>
            </div>
          </section>

          <section className="latest-artikel mt-3 py-4">
            <h2 className="fs-3">Artikel Terbaru</h2>
            <div className="latest-artikel__list row gx-md-3 mt-4">
              {listArtikel.length > 0 ? (
                listArtikel.map((artikel) => (
                  <div className="latest-artikel__item col-md-4 mb-3" key={artikel.id}>
                    <div className="card">
                      <img
                        src={artikel.data.gambar || CONFIG.DEFAULT_IMAGE}
                        className="latest-artikel__item__image card-img-top"
                        alt="Hero Artikel"
                      />
                      <div className="card-body">
                        <p className="card-subtitle text-muted fw-semibold mb-2">
                          {formatDate(artikel.data.dibuatPada)}
                        </p>
                        <h3 className="fs-4 card-title">
                          <a href={`/artikel/${artikel.id}`} className="text-decoration-none">
                            {artikel.data.judul}
                          </a>
                        </h3>
                        <p className="card-text text-truncate">{artikel.data.isi}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col">
                  <div className="my-5 d-flex align-items-center justify-content-center">
                    <BsFolder2Open className="fs-4 me-2 text-dark text-opacity-75" />
                    <span className="fs-5 text-dark text-opacity-75">Artikel masih kosong</span>
                  </div>
                </div>
              )}
            </div>
            <div className={listArtikel.length > 0 ? 'row' : 'row d-none'}>
              <a href="/artikel" className="btn btn-primary mt-4 w-auto mx-auto">
                Artikel lainnya
              </a>
            </div>
          </section>
        </div>
      </>
    );
  }

  return <Template content={renderContent()} />;
}

export default Beranda;
