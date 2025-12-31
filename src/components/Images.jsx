import React from 'react'

const Images = ({ images, removeImage }) => {
    return (
        <>
            <div class="flex flex-wrap items-center mt-12 gap-4 max-w-5xl mx-auto">
                {images?.map((src,index) => <div class="relative group rounded-lg overflow-hidden" key={index}>
                    <img src={src} alt="image" class="size-56 object-cover object-top" />
                    <div class="absolute inset-0 flex flex-row justify-end p-4 text-white cursor-pointer group-hover:bg-black/60 opacity-100 transition-all duration-300" onClick={()=>removeImage(index)}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 2 2 13M2 2l11 11" stroke="currentColor" stroke-opacity=".7" stroke-width="3"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>)}
            </div>
        </>
    )
}

export default Images