/* eslint-disable react/prop-types */
import React from 'react';
import {
  BsStopwatchFill, BsChatFill, BsCheckCircleFill,
} from 'react-icons/bs';

function StatusLaporan({ status }) {
  if (status === 'dilaporkan') {
    return (
      <div className="laporan-item__status laporan-item__status--dilaporkan">
        <BsChatFill className="me-2" />
        <span className="text-nowrap">Dilaporkan</span>
      </div>
    );
  }
  if (status === 'dalamProses') {
    return (
      <div className="laporan-item__status laporan-item__status--proses">
        <BsStopwatchFill className="me-2" />
        <span className="text-nowrap">Dalam Proses</span>
      </div>
    );
  }

  return (
    <div className="laporan-item__status laporan-item__status--selesai">
      <BsCheckCircleFill className="me-2" />
      <span className="text-nowrap">Selesai</span>
    </div>
  );
}

export default StatusLaporan;
