<template>
    <div :class="containerClass">
        <Skeleton class="w-8 h-1rem border-round-xl surface-700"></Skeleton>

        <div class="grid">
            <div
                v-for="index in 2"
                :key="index"
                class="cursor-pointer col-12 md:col-6 lg:col-6 flex align-items-start justify-content-start flex-column gap-2">

                <Skeleton class="w-6 h-15rem w-15rem border-round-md surface-700"></Skeleton>
                <Skeleton class="w-9 h-1rem border-round-xl surface-700"></Skeleton>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MovieSkeleton',
        props: {
            class: null
        },
        computed: {
            icon: function(){
                return (this.$icon);
            },
            containerClass: function(){
                return [this.class, 'flex flex-column gap-2'];
            }
        },
    }
</script>