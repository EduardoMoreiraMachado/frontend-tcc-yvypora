import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import '../styles/global-styles.css'
const MySwal = withReactContent(Swal);

export const notify = async (type, title, timer = 1500) => {
  await MySwal.fire({
    timer: 2000,
    showConfirmButton: false,
    title: <p>{title}</p>,
    icon: type,
    buttonsStyling: false,
    timerProgressBar: true,
  });
};


export const notifyAsForm = async (question, onYes, onNo) => {
  await MySwal.fire({
    title: question,
    icon: 'question',
    showCancelButton: true,
    preConfirm: onYes,
    preDeny: onNo,
    customClass: {
      confirmButton: 'custom-button-color',
      cancelButton: 'custom-button-cancel-color',
    },
  });
}