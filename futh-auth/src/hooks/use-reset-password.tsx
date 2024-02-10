import { useResetpasswordMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
export default function useResetpassword() {
  const [resetpassword,{isLoading}]=useResetpasswordMutation();
  const [email,setEmail]=useState('');
  

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSumit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    resetpassword(email)
      .unwrap()
      .then(() => {
        toast.success("Plz Check your Email.");
      })
      .catch((e) => {
        toast.error(
          e?.data.email?.[0] ||
            e?.data.password?.[0] ||
            e?.data.non_field_errors?.[0] ||
            "An error occurred. Please try again."
        );
      });
  };
  return {
    email,
    onSumit,
    isLoading,
    onChange,
  };
}
