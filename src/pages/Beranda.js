import React from 'react';

import { getDataLimit } from '../data/data-source';
import Template from '../components/user/Template';
import berandaImage2 from '../images/beranda-2.jpg';
import ArtikelList from '../components/ArtikelList';

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
          <div className="d-flex flex-column text-center">
            <h1 className="display-5 fw-semibold text-uppercase text-white mb-3">Lawan Bullying</h1>
            <h3 className="hero__text fw-light text-white p-3 rounded">
              Bersama Go Away
              <span className="text-nowrap">
                <span className="bg-primary ms-3 me-1 fw-semibold "> Bullies </span>
                !
              </span>
            </h3>
            <div className="d-flex justify-content-center mt-2">
              <a href="/login" className="btn btn-lg btn-primary">
                Gabung
              </a>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <section className="laporan-cta py-5 mb-5">
            <div className="row gx-5 mt-4">
              <div className="laporan-cta__image-container col-md-6">
                <img src={berandaImage2} className="img-fluid" alt="Tindak kekerasan bullying" />
              </div>
              <div className="col-md-6 mt-3">
                <p className="fs-5 fw-semibold text-danger mb-0">Jangan Takut</p>
                <h2 className="fs-3 fw-semibold mb-3">Melaporkan Tindak Bullying</h2>
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

          <section className="mt-3 py-5">
            <h2 className="fs-3 text-center">Artikel Terbaru</h2>
            <div className="row gx-md-3 mt-4">
              <ArtikelList artikelList={listArtikel} />
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
