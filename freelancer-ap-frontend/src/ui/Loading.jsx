import { ThreeDots } from "react-loader-spinner";

function Loading({height="40",width="75"}) {
    return ( 
      <ThreeDots
            visible={true}
            height={height}
            width={width}
            color="rgb(var(--color-primary-900"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
                display:"flex",
                justifyContent:"center"
            }}
            wrapperClass=""
            />
     );
}

export default Loading;