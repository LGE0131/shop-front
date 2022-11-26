import { Dispatch, SetStateAction, useState, useCallback, ChangeEvent, } from 'react';

type ReturnTypes<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T = string>(initialData: T): [T, (e: any) => void, Dispatch<SetStateAction<T>>] => {
    const [value, setValue] = useState(initialData);
    const handler = useCallback((e: any)=>{
      setValue(e.currentTarget.value);
    },[]);
  
    return [value, handler, setValue];
  };
  
export default useInput;
