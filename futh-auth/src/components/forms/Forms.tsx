import { ChangeEvent, FormEvent } from "react";
import Input from "./Input";
import Spinner from "../common/Spinner";

interface Config {
  labelText: string;
  labelID: string;
  type: string;
  value: string;
  required?: boolean;
  link?:{
    linktext:string;
    linkurl:string;
  }
}
interface Props {
  config: Config[];
  isLoading: boolean;
  btnText: string;
  onSumit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  
}

const Forms = ({ onSumit, onChange, config,isLoading,btnText }: Props) => {
  return (
    <form className="space-y-3" onSubmit={onSumit}>
      {config.map((input,index) => (
         <Input key={index}
          labelID={input.labelID}
          type={input.type}
          onChange={onChange}
          value={input.value}
          required={input.required}
          link={input.link}
        >
          {input.labelText}
        </Input>
      )
      )
      }
      <div>
        <button
          type="submit"
          
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
        >
          {isLoading ? <Spinner md /> : `${btnText}`}
        </button>
      </div>
    </form>
  );
};

export default Forms;
