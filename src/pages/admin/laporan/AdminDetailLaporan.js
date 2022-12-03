import React from 'react';
import { BsCalendarDate, BsStopwatch, BsHash } from 'react-icons/bs';
import AdminTemplate from '../components/AdminTemplate';

function AdminDetailLaporan() {
  function renderContent() {
    return (
      <div className="card">
        <div className="card-body p-4">
          <div className="d-flex gap-4 mb-3 text-secondary">
            <div className="d-flex align-items-center">
              <BsHash className="me-2" />
              <span>23lkj2hip</span>
            </div>
            <div className="d-flex align-items-center">
              <BsCalendarDate className="me-2" />
              <span>01 Januari 2022</span>
            </div>
            <div className="d-flex align-items-center text-primary ">
              <BsStopwatch className="me-2" />
              <span>Dilaporkan</span>
            </div>
          </div>
          <h3 className="card-title fs-4 mb-2">Judul Laporan</h3>
          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Unde et magni nemo autem quam tempora corrupti, nobis ab adipisci,
            ipsa voluptatem ipsum ratione alias distinctio veniam,
            cupiditate maxime at quisquam.
          </p>
          <section>
            <p>Lampiran :</p>
            <a href="https://dummyimage.com/600x400/000/fff" rel="noreferrer" target="_blank">
              <img src="https://dummyimage.com/600x400/000/fff" className="img-thumbnail" alt="..." />
            </a>
          </section>
        </div>
      </div>
    );
  }

  return <AdminTemplate content={renderContent()} />;
}

export default AdminDetailLaporan;
