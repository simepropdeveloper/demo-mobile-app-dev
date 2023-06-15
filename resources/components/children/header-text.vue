<template>
    <div :class="containerClass">
        <div class="flex align-items-center justify-content-center h-3rem w-3rem">
            <span class="surface-500 h-full w-full border-circle flex align-items-center justify-content-center">F</span>
        </div>

        <div class="flex-1 flex align-items-center">
            <div class="flex-1 flex flex-column gap-1 px-3 align-items-start">
                <div class="flex flex-wrap row-gap-1 column-gap-2">
                    <span class="font-light white-space-nowrap text-200">Hello,</span>
                    <span class="font-bold white-space-nowrap text-0">Raymond</span>
                </div>
                <span class="max-min-screen-20 text-0 overflow-hidden white-space-nowrap text-overflow-ellipsis">Want to go see a movie? Get your ticket today</span>
            </div>

            <span class="h-3rem w-3rem border-circle flex align-items-center justify-content-center cursor-pointer hover:surface-800 transition-background transition-duration-200" v-html="icon.bell"></span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HeaderText',
        props: {
            modelValue: null,
            class: null
        },
        computed: {
            icon: function(){
                return (this.$icon);
            },
            containerClass: function(){
                return [this.class, 'flex align-items-center gap-3 px-3 flex-wrap w-full'];
            }
        },
    }
</script>