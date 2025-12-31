import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <>
            <svg class="size-full absolute -z-10 inset-0" width="1440" height="720" viewBox="0 0 1440 720" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#1D293D" stroke-opacity=".7" d="M-15.227 702.342H1439.7" />
                <circle cx="711.819" cy="372.562" r="308.334" stroke="#1D293D" stroke-opacity=".7" />
                <circle cx="16.942" cy="20.834" r="308.334" stroke="#1D293D" stroke-opacity=".7" />
                <path stroke="#1D293D" stroke-opacity=".7" d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7" />
                <circle cx="782.595" cy="411.166" r="308.334" stroke="#1D293D" stroke-opacity=".7" />
            </svg>
            <div>{children}</div>
            {/* {children} */}
            {/* <section class="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
                <div class="flex flex-col items-center md:items-start">
                    <div class="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-slate-600 text-white text-xs">
                        <h1 class="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-xl text-slate-50">
                            Intelligent AI tools built to help.
                        </h1>
                        <div>{children}</div>
                    </div>
                </div>
            </section> */}



        </>)
}

export default Wrapper