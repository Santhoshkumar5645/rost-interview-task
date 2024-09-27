import React from 'react'
import { useNavigate } from 'react-router'

export default function PageNotFound() {
    const navigate = useNavigate();
  return (
    <section class="bg-[#181E25] text-white ">
    <div class="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div class="w-full ">
            <div class="flex flex-col items-center max-w-lg mx-auto text-center">
                <p class=" font-medium text-2xl text-blue-500 dark:text-blue-400">404 error</p>
                <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">We lost this page</h1>
                <p class="mt-4 text-gray-500 dark:text-gray-400">We searched high and low, but couldn’t find what you’re looking for.Let’s find a better place for you to go.</p>

                <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                
                </div>
            </div>

          
        </div>
    </div>
</section>
  )
}
