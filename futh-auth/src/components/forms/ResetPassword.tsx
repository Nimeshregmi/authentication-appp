'use client'
import { useResetpassword } from "@/hooks";
import { Forms } from ".";
const ResetPassword = () => {
  const {email,isLoading,onChange,onSumit}=useResetpassword();
    const config=[
        {
            labelText: "email",
            labelID: 'email',
            type: 'email',
            value: email,
            required: true,
        },
    ]
  return (
    <Forms btnText="Reset Password" config={config} isLoading={isLoading} onChange={onChange} onSumit={onSumit} />
  
  )
}

export default ResetPassword