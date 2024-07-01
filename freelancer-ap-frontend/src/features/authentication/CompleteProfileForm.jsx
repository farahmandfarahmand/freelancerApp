import { useState } from "react";
import TextFiled from "../../ui/textFiled";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  // const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });
  // console.log(role);

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({
        name,
        email,
        role,
      });
      console.log(user,name, message);
      toast.success(message);
      // if (user.status !== 2) {
      //   navigate("/");
      //   toast("پروفایل شما در انتظار تایید است", {
      //     icon: "👏",
      //   });
      //   return;
      // }
      // if (user.role === "OWNER") return navigate("/owner");
      // if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handelSubmit}>
          <TextFiled
            label="نام و نام خانوادگی"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextFiled
            label=" ایمیل  "
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              label="کارفرما"
              value="OWNER"
              name="role"
              id="OWNER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              label="فریلنسر"
              value="FREELANCER"
              name="role"
              id="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
            />
          </div>
          <div className="">
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
