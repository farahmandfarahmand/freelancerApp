import { useEffect, useRef } from "react";

export default function useOutsideClick(handler,listenCapturing=true){
    const ref = useRef();
  useEffect(() => {
    function handelClick(e) {
      console.log(ref.current.contains(e.target));
      //ref.current is modal and e.target is where that is clicked
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handelClick, listenCapturing);
    return () => document.removeEventListener("click", handelClick, listenCapturing);
  }, [handler,listenCapturing]);
  return ref;

}