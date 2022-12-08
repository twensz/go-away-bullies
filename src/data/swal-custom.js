import swal from 'sweetalert';

const SwalCustom = {
  showLoading() {
    swal({
      title: '',
      text: 'Memuat ...',
      icon: 'info',
      buttons: false,
      closeOnClickOutside: false,
    });
  },
  showConfirm() {
    return swal('Apakah kamu yakin?', {
      dangerMode: true,
      buttons: [true, 'Ya'],
    });
  },
  async showSuccess(message) {
    await swal({
      text: message,
      icon: 'success',
    });
  },
  async showError(error) {
    await swal({
      text: `${error}`,
      icon: 'error',
    });
  },
  close() {
    swal.close();
  },
};

export default SwalCustom;
