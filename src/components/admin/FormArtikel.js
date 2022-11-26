import React from 'react';
import Input from './Input';

function FormArtikel(
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
        {Input({
          textLabel: 'Judul Artikel',
          inputId: 'judul',
          value: judul,
          onValueChange: onJudulChange,
        })}
      </div>
      <div className="row mb-1">
        {Input({
          textarea: true,
          textLabel: 'Isi Artikel',
          inputId: 'isi',
          value: isi,
          onValueChange: onIsiChange,
        })}
      </div>
      <div className="row mb-1">
        {Input({
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

export default FormArtikel;
