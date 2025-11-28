<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            }
        }
    }
</script>


<template>


<div class="bg-[#151F28] block max-w-sm border border-[#404850] rounded-md shadow-lg shadow-lg hover:border-[#FF4655] hover:shadow-[#FF4655]">
    <a>
        <img class="rounded-t-md" :src="image" alt="" />
    </a>
    <div class="p-6">
        <a>
            <h5 class="mt-2 mb-2 text-2xl font-semibold tracking-tight text-heading text-white">
                {{ title }}
            </h5>
        </a>
    </div>
</div>

</template>