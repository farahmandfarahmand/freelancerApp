import { useState } from "react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import { Label, Switch } from "@headlessui/react";
function ToggleProjectStatus({ project }) {
  const [enabled, setEnabled] = useState(false);

  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();
  const toggleHandler = () => {
    //shoud be send new status and id with faunction
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({
      id: project._id,
      data: { status },
    },
    {
      onSuccess:()=>{
        setEnabled((prev)=>!prev);
      }
    }
  );
  };
  return (
    <div className="w-[5rem]">
      <Switch.Group>
        <div className="flex items-center gap-x-2">
          <Switch
            checked={enabled}
            onChange={toggleHandler}
            className={`${
              enabled ? "bg-primary-900" : "bg-secondary-200"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
          >
            <span
              className={`${
                enabled ? "-translate-x-6" : "-translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`}
            />
          </Switch>
          <Label>
            {/* {label} */}
            {project.status === "OPEN" ? "باز" : "بسته"}
          </Label>
        </div>
      </Switch.Group>
    </div>
  );
}

export default ToggleProjectStatus;
