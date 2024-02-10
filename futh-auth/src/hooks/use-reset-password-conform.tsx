import { useResetpasswordconformMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  uid: string;
  token: string;
}
export default function useResetpasswordConform({ uid, token }: Props) {
  const router = useRouter();
  const [resetpasswordconform, { isLoading }] =
    useResetpasswordconformMutation();
  const [formData, setformData] = useState({
    new_password: "",
    re_new_password: "",
  });
  const { new_password, re_new_password } = formData;
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name,value}=event?.target;
    setformData({...formData,[name]:value})
  };

  const onSumit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    resetpasswordconform({ uid, token, re_new_password, new_password })
      .unwrap()
      .then(() => {
        toast.success("Password changed succreefully");
        router.push("/auth/login");
      })
      .catch((e) => {
        console.log(e)
        toast.error(
          e?.data.email?.[0] ||
            e?.data.password?.[0] ||
            e?.data.non_field_errors?.[0] ||
            "Reset password failed"
        );
      });
  };
  return {
    new_password,
    re_new_password,
    onSumit,
    isLoading,
    onChange,
  };
}
