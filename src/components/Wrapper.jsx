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

            <section class="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
                <div class="flex flex-col items-center md:items-start">
                    <div class="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-slate-600 text-white text-xs">
                        {/* <div class="flex items-center">

                            <img class="size-7 rounded-full border-3 border-white"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="userImage1" />
                            <img class="size-7 rounded-full border-3 border-white -translate-x-2"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="userImage2" />
                            <img class="size-7 rounded-full border-3 border-white -translate-x-4"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                                alt="userImage3" />
                            <p class="-translate-x-2">Join community of 1m+ founders </p>
                        </div> */}
                        <h1 class="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-xl text-slate-50">
                            Intelligent AI tools built to help.
                        </h1>
                        {/* <p class="text-center md:text-left text-sm text-slate-200 max-w-lg mt-2">
                            Unlock smarter workflows with AI tools designed to boost productivity, simplify tasks and help you do more with less effort.
                        </p> */}
                        <div>{children}</div>
                        {/* <div class="flex items-center gap-4 mt-8 text-sm">
                            <button class="bg-white hover:bg-slate-200 text-black active:scale-95 rounded-md px-7 h-11">
                                Get started
                            </button>
                            <button class="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-white rounded-md px-6 h-11">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" /><rect x="2" y="6" width="14" height="12" rx="2" /></svg>
                                <span>Watch demo</span>
                            </button>
                        </div> */}
                    </div>
                </div>
                {/* <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-3.png" alt="hero" class="max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-300" /> */}
            </section>



        </>)
}

export default Wrapper