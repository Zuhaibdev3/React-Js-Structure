import React from 'react'
import { LineWave } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="h-screen bg-white justify-center items-center flex flex-col w-full">
            <LineWave
                height={250}
                width={250}
                radius={5}
                color="#FFCA08"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader