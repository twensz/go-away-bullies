import React from 'react';

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
        <label htmlFor="inputJudul" className="form-label">
          Judul Artikel
          <input
            type="text"
            className="form-control mt-1"
            id="inputJudul"
            placeholder="Masukan judul artikel ..."
            value={judul}
            onChange={onJudulChange}
            required
          />
        </label>
      </div>
      <div className="row mb-1">
        <label htmlFor="inputIsi" className="form-label">
          Isi Artikel
          <textarea
            className="form-control mt-1"
            id="inputIsi"
            placeholder="Masukan isi artikel ..."
            value={isi}
            onChange={onIsiChange}
            rows="6"
            required
          />
        </label>
      </div>
      <div className="row mb-1">
        <label htmlFor="inputPenulis" className="form-label">
          Nama Penulis
          <input
            type="text"
            className="form-control mt-1"
            id="inputPenulis"
            placeholder="Masukan nama penulis ..."
            value={penulis}
            onChange={onPenulisChange}
            required
          />
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

export default renderArtikelFormTemplate;
