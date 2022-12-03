import React from 'react';
import {
  BsChatFill, BsCheckCircleFill, BsFileTextFill, BsStopwatchFill,
} from 'react-icons/bs';
import { FaSmileBeam } from 'react-icons/fa';

import { getAllData } from '../../data/data-source';
import Template from '../../components/admin/template/Template';

function Dashboard() {
  const [totalDilaporkan, setTotalDilaporkan] = React.useState(0);
  const [totalDalamProses, setTotalDalamProses] = React.useState(0);
  const [totalSelesai, setTotalSelesai] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  function countStatusLaporan(data) {
    for (const laporan of data) {
      switch (laporan.data.status) {
        case 'dilaporkan':
          setTotalDilaporkan((prevState) => prevState + 1);
          break;
        case 'dalamProses':
          setTotalDalamProses((prevState) => prevState + 1);
          break;
        default:
          setTotalSelesai((prevState) => prevState + 1);
          break;
      }
    }
  }

  React.useEffect(() => {
    (async () => {
      countStatusLaporan(await getAllData('laporan'));
      setLoading(false);
    })();

    return () => {
      setTotalDilaporkan(0);
      setTotalDalamProses(0);
      setTotalSelesai(0);
    };
  }, []);

  function renderContent() {
    if (loading) {
      return (
        <div className="p-5 h-100 d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status" />
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row mb-3">
          <div className="alert bg-primary text-white alert-dismissible fade show d-flex align-items-center gap-3 w-auto" role="alert">
            <FaSmileBeam className="display-3" />
            <div className="d-flex flex-column justify-content-center">
              <h4 className="card-title mb-1">Halo, Admin!</h4>
              <p className="card-subtitle opacity-75 mb-0">Selamat datang kembali, dashboard-mu udah siap nih.</p>
            </div>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close" />
          </div>
        </div>

        <div className="row gap-4">
          <div className="col card border border-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Statistik Laporan</h5>
              <div className="container">
                <div className="row gap-4">
                  <div className="col-md-auto">
                    <div className="row">
                      <div className="col-auto me-1 alert alert-primary px-3 rounded d-flex align-items-center">
                        <BsChatFill className="fs-3 text-primary" />
                      </div>
                      <div className="col">
                        <div className="text-opacity-75">Dilaporkan</div>
                        <div className="fs-4 fw-bold text-opacity-75">{totalDilaporkan}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="row">
                      <div className="col-auto me-1 alert alert-warning px-3 rounded d-flex align-items-center">
                        <BsStopwatchFill className="fs-3 text-warning" />
                      </div>
                      <div className="col">
                        <div className="text-opacity-75">Dalam Proses</div>
                        <div className="fs-4 fw-bold text-opacity-75">{totalDalamProses}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-auto">
                    <div className="row">
                      <div className="col-auto me-1 alert alert-success px-3 rounded d-flex align-items-center">
                        <BsCheckCircleFill className="fs-3 text-success" />
                      </div>
                      <div className="col">
                        <div className="text-opacity-50">Selesai</div>
                        <div className="fs-4 fw-bold text-opacity-75">{totalSelesai}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 w-auto">
                  <a className="btn btn-primary w-100" href="/laporan">Lihat Laporan</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-auto card border border-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Statistik Artikel</h5>
              <div className="container">
                <div className="row">
                  <div className="col-auto me-1 alert alert-info px-3 rounded d-flex align-items-center">
                    <BsFileTextFill className="fs-3 text-alert" />
                  </div>
                  <div className="col">
                    <div className="text-opacity-75">Jumlah Artikel</div>
                    <div className="fs-4 fw-bold text-opacity-75">{totalDilaporkan}</div>
                  </div>
                </div>
                <div className="row mt-3">
                  <a className="btn btn-primary w-100" href="/artikel">Lihat Artikel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Template content={renderContent()} />;
}

export default Dashboard;
