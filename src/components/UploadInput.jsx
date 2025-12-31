
const UploadInput = ({ onChange }) => {
    return (
        <label for="fileInput" class="flex flex-col gap-5 pb-20 items-center justify-center p-4 md:p-16 lg:p-10 xl:p-10 rounded-full border border-slate-600">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.665 3.667H11a3.667 3.667 0 0 0-3.667 3.666v29.334A3.667 3.667 0 0 0 11 40.333h22a3.667 3.667 0 0 0 3.666-3.666v-22m-11-11 11 11m-11-11v11h11m-7.333 9.166H14.665m14.667 7.334H14.665M18.332 16.5h-3.667" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p class="text-gray-500">Drag & drop your files here</p>
            <p class="text-gray-400">Or <span class="text-indigo-500 underline">click</span> to upload</p>
            <input id="fileInput" type="file" class="hidden" onChange={onChange} multiple />
        </label>
    )
}

export default UploadInput