import React from 'react';
import PropTypes from 'prop-types';

function InputLokasi({ lokasi, onLokasiChange }) {
  const [firstRender, setFirstRender] = React.useState(true);

  const [provinsi, setProvinsi] = React.useState();
  const [provinsiList, setProvinsiList] = React.useState([]);
  const [kota, setKota] = React.useState();
  const [kotaList, setKotaList] = React.useState([]);
  const [kecamatan, setKecamatan] = React.useState();
  const [kecamatanList, setKecamatanList] = React.useState([]);
  const [kelurahan, setKelurahan] = React.useState();
  const [kelurahanList, setKelurahanList] = React.useState([]);

  async function getAllProvinsi() {
    const response = await fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi');
    const responseJson = await response.json();
    return responseJson.provinsi;
  }
  async function getKotaByProvinsi(id) {
    const response = await fetch(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`);
    const responseJson = await response.json();
    return responseJson.kota_kabupaten;
  }
  async function getKecamatanByKota(id) {
    const response = await fetch(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${id}`);
    const responseJson = await response.json();
    return responseJson.kecamatan;
  }
  async function getKelurahanByKecamatan(id) {
    const response = await fetch(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${id}`);
    const responseJson = await response.json();
    return responseJson.kelurahan;
  }

  async function onProvinsiChangeHandler(event) {
    setProvinsi({
      id: event.target.value,
      nama: event.target.options[event.target.selectedIndex].text,
    });
    const result = await getKotaByProvinsi(event.target.value);
    setKotaList(result);
  }
  async function onKotaChangeHandler(event) {
    setKota({
      id: event.target.value,
      nama: event.target.options[event.target.selectedIndex].text,
    });
    const result = await getKecamatanByKota(event.target.value);
    setKecamatanList(result);
  }
  async function onKecamatanChangeHandler(event) {
    setKecamatan({
      id: event.target.value,
      nama: event.target.options[event.target.selectedIndex].text,
    });
    const result = await getKelurahanByKecamatan(event.target.value);
    setKelurahanList(result);
  }
  async function onKelurahanChangeHandler(event) {
    setKelurahan({
      id: event.target.value,
      nama: event.target.options[event.target.selectedIndex].text,
    });
  }

  React.useEffect(() => {
    async function initData() {
      setProvinsiList(await getAllProvinsi());

      if (lokasi) {
        setProvinsi(await lokasi.provinsi);

        setKotaList(await getKotaByProvinsi(provinsi.id));
        setKota(lokasi.kota);

        setKecamatanList(await getKecamatanByKota(kota.id));
        setKecamatan(lokasi.kecamatan);

        setKelurahanList(await getKelurahanByKecamatan(kecamatan.id));
        setKelurahan(lokasi.kelurahan);
      }
    }
    initData();
  }, []);

  React.useEffect(() => {
    if (firstRender) setFirstRender(false);
    if (!firstRender) {
      setKota('');
      setKecamatan('');
      setKelurahan('');
    }
  }, [provinsi]);
  React.useEffect(() => {
    if (firstRender) setFirstRender(false);
    if (!firstRender) {
      setKecamatan('');
      setKelurahan('');
    }
  }, [kota]);
  React.useEffect(() => {
    if (firstRender) setFirstRender(false);
    if (!firstRender) {
      setKelurahan('');
    }
  }, [kecamatan]);
  React.useEffect(() => {
    if (firstRender) setFirstRender(false);
    if (!firstRender) {
      onLokasiChange({
        provinsi: { ...provinsi },
        kota: { ...kota },
        kecamatan: { ...kecamatan },
        kelurahan: { ...kelurahan },
      });
    }
  }, [kelurahan]);

  return (
    <>
      <div>Pilih Lokasi</div>
      <div className="container">
        <select
          className="form-select d-inline me-2 mt-1 w-auto"
          aria-label="Pilih provinsi"
          value={provinsi ? provinsi.id : ''}
          onChange={onProvinsiChangeHandler}
          required
        >
          <option value="" disabled>
            Pilih provinsi
          </option>
          {provinsiList.map((provinsiItem) => (
            <option key={provinsiItem.id} value={provinsiItem.id}>
              {provinsiItem.nama}
            </option>
          ))}
        </select>
        <select
          className="form-select d-inline me-2 mt-1 w-auto"
          aria-label="Pilih kota"
          value={kota ? kota.id : ''}
          onChange={onKotaChangeHandler}
          required
          disabled={!provinsi ? 'disabled' : ''}
        >
          <option value="" disabled>
            Pilih kota
          </option>
          {kotaList.map((kotaItem) => (
            <option key={kotaItem.id} value={kotaItem.id}>
              {kotaItem.nama}
            </option>
          ))}
        </select>
        <select
          className="form-select d-inline me-2 mt-1 w-auto"
          aria-label="Pilih kecamatan"
          value={kecamatan ? kecamatan.id : ''}
          onChange={onKecamatanChangeHandler}
          required
          disabled={!kota ? 'disabled' : ''}
        >
          <option value="" disabled>
            Pilih kecamatan
          </option>
          {kecamatanList.map((kecamatanItem) => (
            <option key={kecamatanItem.id} value={kecamatanItem.id}>
              {kecamatanItem.nama}
            </option>
          ))}
        </select>
        <select
          className="form-select d-inline me-2 mt-1 w-auto"
          aria-label="Pilih kelurahan"
          value={kelurahan ? kelurahan.id : ''}
          onChange={onKelurahanChangeHandler}
          required
          disabled={!kecamatan ? 'disabled' : ''}
        >
          <option value="" disabled>
            Pilih kelurahan
          </option>
          {kelurahanList.map((kelurahanItem) => (
            <option key={kelurahanItem.id} value={kelurahanItem.id}>
              {kelurahanItem.nama}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

InputLokasi.propTypes = {
  lokasi: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  onLokasiChange: PropTypes.func.isRequired,
};
InputLokasi.defaultProps = {
  lokasi: null,
};

export default InputLokasi;
