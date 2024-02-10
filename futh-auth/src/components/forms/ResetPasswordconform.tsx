"use client";
import { useResetpasswordConform } from "@/hooks";
import { Forms } from ".";
interface Props {
    uid: string;
    token: string;
}
export default function ResetPasswordconform({
    uid, token
}: Props) {
  const { isLoading, new_password, onChange, onSumit, re_new_password } = useResetpasswordConform({ uid, token });
  const config = [
    {
      labelText: "New password",
      labelID: "new_password",
      type: "password",
      value: new_password,
      required: true,
    },
    {
      labelText: "conform New password",
      labelID: "re_new_password",
      type: "password",
      value: re_new_password,
      required: true,
    },
  ];
  return (
    <Forms
      btnText="Change password"
      config={config}
      isLoading={isLoading}
      onChange={onChange}
      onSumit={onSumit}
    />
  );
}
