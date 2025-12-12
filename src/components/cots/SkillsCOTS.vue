<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true
            }
        }
    }
</script>


<template>
    <div class="bg-[#151F28] block w-full p-6 border border-[#404850] rounded-md shadow-lg transition-all hover:border-[#FF4655] duration-300 hover:shadow-[0_10px_40px_-10px_#FF4655] hover:-translate-y-2">
        <a>
            <h5 class="mt-2 mb-2 text-2xl font-semibold tracking-tight text-heading text-white">
                {{ title }}
            </h5>
        </a>
        <p class="text-body text-white opacity-75 whitespace-pre-line">
            {{ description }}
        </p>
    </div>
</template>