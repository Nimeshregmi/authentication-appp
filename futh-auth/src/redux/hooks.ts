import { useSelector,useDispatch } from "react-redux";
import type { RootState,AppDispacher } from "./store";
import type { TypedUseSelectorHook } from "react-redux/es/types";


export const useAppDispatcher: ()=>AppDispacher=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;