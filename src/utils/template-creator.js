/* eslint-disable no-unused-vars */
import React from 'react';
import InputLokasi from '../components/admin/InputLokasi';

function renderInputWithLabel({
  type = 'text',
  textLabel,
  inputId,
  value,
  onValueChange,
  textarea = false,
}) {
  const id = `${inputId}Input`;
  const className = 'form-control mt-1';
  const placeholder = `Masukan ${inputId} ...`;

  if (textarea) {
    return (
      <label htmlFor={id} className="form-label">
        {textLabel}
        <textarea
          id={id}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onValueChange}
          rows="6"
          required
        />
      </label>
    );
  }

  return (
    <label htmlFor={id} className={`form-label ${type === 'date' ? 'w-auto' : ''}`}>
      {textLabel}
      <input
        type={type}
        id={id}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onValueChange}
        required
      />
    </label>
  );
}

function renderArtikelFormTemplate(
  submitText,
  {
    onSubmit,
    judul,
    onJudulChange,
    isi,
    onIsiChange,
    penulis,
    onPenulisChange,
  },
) {
  return (
    <form onSubmit={onSubmit}>
      <div className="row mb-2">
        {renderInputWithLabel({
          textLabel: 'Judul Artikel',
          inputId: 'judul',
          value: judul,
          onValueChange: onJudulChange,
        })}
      </div>
      <div className="row mb-1">
        {renderInputWithLabel({
          textarea: true,
          textLabel: 'Isi Artikel',
          inputId: 'isi',
          value: isi,
          onValueChange: onIsiChange,
        })}
      </div>
      <div className="row mb-1">
        {renderInputWithLabel({
          textLabel: 'Nama Penulis',
          inputId: 'penulis',
          value: penulis,
          onValueChange: onPenulisChange,
        })}
      </div>
      <div className="row mt-3 justify-content-end">
        <div className="col-auto">
          <button type="submit" className="btn btn-primary text-end">{submitText}</button>
        </div>
      </div>
    </form>
  );
}

function renderLaporanFormTemplate(
  submitText,
  {
    onSubmit,
    judul,
    onJudulChange,
    isi,
    onIsiChange,
    waktuKejadian,
    onWaktuKejadianChange,
    lokasi,
    onLokasiChange,
    status,
    onStatusChange,
  },
) {
  return (
    <form onSubmit={onSubmit}>
      <div className="row mb-2">
        {renderInputWithLabel({
          textLabel: 'Judul Laporan',
          inputId: 'judul',
          value: judul,
          onValueChange: onJudulChange,
        })}
      </div>
      <div className="row mb-1">
        {renderInputWithLabel({
          textarea: true,
          textLabel: 'Isi Laporan',
          inputId: 'isi',
          value: isi,
          onValueChange: onIsiChange,
        })}
      </div>
      <div className="row mb-1">
        {renderInputWithLabel({
          type: 'date',
          textLabel: 'Waktu Kejadian',
          inputId: 'waktuKejadian',
          value: waktuKejadian,
          onValueChange: onWaktuKejadianChange,
        })}
      </div>
      <div className="row mb-1">
        <InputLokasi lokasi={lokasi} onLokasiChange={onLokasiChange} />
      </div>
      <div className="row mb-1">
        <label htmlFor="statusInput" className="form-label w-auto">
          Status
          <select
            id="statusInput"
            className="form-select mt-1"
            aria-label="Pilih status laporan"
            value={status || ''}
            onChange={onStatusChange}
            required
          >
            <option value="" disabled>
              Pilih status
            </option>
            <option value="dilaporkan">dilaporkan</option>
            <option value="dalamProses">dalamProses</option>
            <option value="selesai">selesai</option>
          </select>
        </label>
      </div>
      <div className="row mt-3 justify-content-end">
        <div className="col-auto">
          <button type="submit" className="btn btn-primary text-end">{submitText}</button>
        </div>
      </div>
    </form>
  );
}

export { renderArtikelFormTemplate, renderLaporanFormTemplate };
