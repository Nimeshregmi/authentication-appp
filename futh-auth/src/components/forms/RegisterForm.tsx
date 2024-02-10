'use client'
// import React from "react";
import { useRegister } from '@/hooks';
import { Forms } from ".";
const RegisterForm = () => {
  const {first_name,last_name,email,password,re_password,onSumit,onChange,isLoading}=useRegister();
    const config=[
        {
            labelText: "First Name",
            labelID: 'first_name',
            type: 'text',
            value: first_name,
            required: true,
        },
        {
            labelText: "last Name",
            labelID: 'last_name',
            type: 'text',
            value: last_name,
            required: true,
        },
        {
            labelText: "email",
            labelID: 'email',
            type: 'email',
            value: email,
            required: true,
        },
        {
            labelText: "password",
            labelID: 'password',
            type: 'password',
            value: password,
            required: true,
        },
        {
            labelText: "conform password",
            labelID: 're_password',
            type: 'password',
            value: re_password,
            required: true,
        },
    ];
  return (
    <Forms btnText="SignUp" config={config} isLoading={isLoading} onChange={onChange} onSumit={onSumit} />
  );
};

export default RegisterForm;
