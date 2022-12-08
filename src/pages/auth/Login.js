import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import useInput from '../../hooks/useInput';
import CONFIG from '../../globals/config';
import { login } from '../../data/auth-source';
import SwalCustom from '../../data/swal-custom';
import Input from '../../components/admin/Input';
import Template from '../../components/auth/Template';

function Login({ onLoginSuccess }) {
  const navigate = useNavigate();

  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  async function onSubmit(event) {
    event.preventDefault();
    SwalCustom.showLoading();

    const result = await login({
      email: email.toLowerCase(),
      password,
    });

    if (result) {
      await SwalCustom.showSuccess('Login Berhasil');
      await onLoginSuccess(result);
      navigate('/');
    } else {
      await SwalCustom.showError('Email atau Password salah');
    }
  }

  function renderContent() {
    return (
      <>
        <div className="text-center">
          <img src={CONFIG.LOGO_IMAGE} alt="logo" width="120" />
          <div className="fw-normal opacity-75 mt-1 mb-3">
            Silahkan login dengan akun anda.
          </div>
        </div>

        <hr />

        <form onSubmit={onSubmit}>
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
          <div className="row mt-3 mb-1">
            <p>
              Belum punya akun?
              <a href="/register" className="ms-2 d-inline">Register</a>
            </p>
          </div>
          <div className="row mt-3 justify-content-end">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary text-end px-3">Login</button>
            </div>
          </div>
        </form>
      </>
    );
  }

  return <Template content={renderContent()} />;
}

Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default Login;
