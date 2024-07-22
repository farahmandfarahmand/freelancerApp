import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <HiArrowRightEndOnRectangle className="w-5 h-5 text-secondary-500" />
    </button>
  );
}

export default Logout;
