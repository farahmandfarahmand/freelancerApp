import { useEffect, useState } from "react";

export function  useLocalStorageState(key, initialState){
    const [value,setValue]=useState(()=>{
      const storeValue=localStorage.getItem(key);
      // const storeValue=localStorage.getItem(key) ||null;
      return storeValue ? JSON.parse(storeValue): initialState;
    });

 
      useEffect(() => {
        localStorage.setItem("isDarkMode", JSON.stringify(value));
      }, [value,key]);
    return [value,setValue]
}