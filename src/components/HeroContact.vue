<template>
<div class="isolate px-6 py-24 sm:py-16 lg:px-8">
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contact Us!</h2>
    <p class="mt-2 text-lg/8 text-[#F1F1F1] opacity-50">Have questions or suggestions? We'd love to hear them!</p>
  </div>
  <form action="#" method="POST" class="bg-[#151F28] border border[#202A32] p-6 mx-auto rounded-md mt-16 max-w-xl sm:mt-20">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label for="first-name" class="block text-sm/6 font-semibold text-white">First name</label>
        <div class="mt-2.5">
          <input id="first-name" type="text" name="first-name" autocomplete="given-name" class="block w-full rounded-md bg-[#2C3540] px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-[#404850] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF4655]" />
        </div>
      </div>
      <div>
        <label for="last-name" class="block text-sm/6 font-semibold text-white">Last name</label>
        <div class="mt-2.5">
          <input id="last-name" type="text" name="last-name" autocomplete="family-name" class="block w-full rounded-md bg-[#2C3540] px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-[#404850] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF4655]" />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm/6 font-semibold text-white">Email</label>
        <div class="mt-2.5">
          <input id="email" type="email" name="email" autocomplete="email" class="block w-full rounded-md bg-[#2C3540] px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-[#404850] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF4655]" />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="phone-number" class="block text-sm/6 font-semibold text-white">Phone Number</label>
        <div class="mt-2.5">
          <input id="phone-number" type="text" name="phone-number" placeholder="123-456-7890" class="block w-full rounded-md bg-[#2C3540] px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-[#404850] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF4655]" />
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="block text-sm/6 font-semibold text-white">Message</label>
        <div class="mt-2.5">
          <textarea id="message" name="message" rows="4" class="block w-full rounded-md bg-[#2C3540] px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-[#404850] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FF4655]"></textarea>
        </div>
      </div>
      <div class="flex gap-x-4 sm:col-span-2">
        <div class="flex h-6 items-center">
          <div class="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-[#FF4655] transition-colors duration-200 ease-in-out has-checked:bg-[#FF4655] has-focus-visible:outline-2">
            <span class="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5"></span>
            <input id="agree-to-policies" type="checkbox" name="agree-to-policies" aria-label="Agree to policies" class="absolute inset-0 appearance-none focus:outline-hidden" />
          </div>
        </div>
        <label for="agree-to-policies" class="text-sm/6 text-gray-600">
          By selecting this, you agree to our
          <a href="#" class="font-semibold whitespace-nowrap text-[#FF4655]">privacy policy</a>.
        </label>
      </div>
    </div>
    <div class="mt-10">
      <button type="submit" class="block w-full rounded-md bg-[#FF4655] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#E4414E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4655]">Let's talk</button>
    </div>
  </form>
</div>

</template>