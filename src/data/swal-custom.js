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
    return swal('Are you sure?', {
      dangerMode: true,
      buttons: [true, 'Yes'],
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
      text: `error : ${error}`,
      icon: 'error',
    });
  },
  close() {
    swal.close();
  },
};

export default SwalCustom;
