import React from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/admin/Input';
import Template from '../../components/auth/Template';
import { register } from '../../data/auth-source';
import SwalCustom from '../../data/swal-custom';
import CONFIG from '../../globals/config';
import useInput from '../../hooks/useInput';

function Register() {
  const navigate = useNavigate();

  const [nama, onNamaChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [konfirmasiPassword, onkonfirmasiPasswordChange] = useInput('');

  async function onSubmit(event) {
    event.preventDefault();

    SwalCustom.showLoading();
    if (await register({
      nama,
      password,
      konfirmasiPassword,
      email: email.toLowerCase(),
    })) {
      await SwalCustom.showSuccess('Berhasil mendaftarkan akun');
      navigate('/login');
    }
  }

  function renderContent() {
    return (
      <>
        <div className="text-center">
          <img src={CONFIG.LOGO_IMAGE} alt="logo" width="120" />
          <div className="fw-normal opacity-75 mt-1 mb-3">
            Silahkan lengkapi form dibawah ini.
          </div>
        </div>

        <hr />

        <form onSubmit={onSubmit} className="container">
          <div className="row mb-2">
            <Input
              placeholder="Nama Lengkap"
              inputId="nama"
              value={nama}
              onValueChange={onNamaChange}
            />
          </div>
          <div className="row mb-2">
            <Input
              type="email"
              placeholder="Email"
              inputId="email"
              value={email}
              onValueChange={onEmailChange}
            />
          </div>
          <div className="row mb-2">
            <Input
              type="password"
              placeholder="Password"
              inputId="password"
              value={password}
              onValueChange={onPasswordChange}
            />
          </div>
          <div className="row mb-2">
            <Input
              type="password"
              placeholder="Konfirmasi Password"
              inputId="konfirmasiPassword"
              value={konfirmasiPassword}
              onValueChange={onkonfirmasiPasswordChange}
            />
          </div>
          <div className="row mb-1 mt-3">
            <p>
              Sudah punya akun?
              <a href="/login" className="ms-2">Login</a>
            </p>
          </div>
          <div className="row mt-3 justify-content-end">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary text-end px-3">Register</button>
            </div>
          </div>
        </form>
      </>
    );
  }

  return <Template content={renderContent()} />;
}

export default Register;
