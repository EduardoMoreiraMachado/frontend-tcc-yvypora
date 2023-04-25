import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const notify = async (type, title, timer = 1500) => {
  await MySwal.fire({
    timer: 1500,
    showConfirmButton: false,
    title: <p>{title}</p>,
    icon: type,
    buttonsStyling: false,
    timerProgressBar: true,
  });
};
