import useToggleProjectStatus from "./useToggleProjectStatus";

import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

// ?------------------------------------------------

function ToggleProjectStatus({ project }) {
  // ! this enabled state is drived on  project.status so isnot necessary to another state seprate.
  // const [enabled, setEnabled] = useState(
  //   project.status === "OPEN" ? true : false
  // );
  const { status } = project;
  const enabled = status === "OPEN" ? true : false;

  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    //*shoud be send new status and id with faunction
    // const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus(
      {
        id: project._id,
        data: {status: newStatus },
      }
      // {
      //   onSuccess: () => {
      //     setEnabled((prev) => !prev);
      //   },
      // }
    );
  };
  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          enabled={enabled}
          label={status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
