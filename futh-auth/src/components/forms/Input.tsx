
import Link from "next/link";
import { ChangeEvent } from "react";

interface Props{
    labelID:string;
    type:string;
    onChange:(event:ChangeEvent<HTMLInputElement>)=>void;
    children:React.ReactNode;
    value:string;
    required?:boolean;
    link?:{
      linktext:string;
      linkurl:string;
    }
}
const Input = ({children,onChange,labelID,type,value,required=false,link}:Props) => {
  return (
    <div>
      <div className="flex justify-between text-center">
      <label
        htmlFor={labelID}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {children}
      </label>
      {
        link && <div className="text-sm ">
          <Link className="text-indigo-600  float-right relative font-semibold hover:text-indigo-500"
           href={link.linkurl} >{link.linktext}</Link>
        </div>
      }
      </div>
      <div className="mt-2">
        <input
          className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          id={labelID}
          name={labelID}
          onChange={onChange}
          type={type}
          value={value}
          required={required}
        />
      </div>
    </div>
  );
};

export default Input;
