<template>
    <div :class="containerClass">
        <div class="flex surface-400 border-circle h-10rem w-10rem">
            <span class="m-auto checked-icon" v-html="icon.checked"></span>
        </div>

        <span class="text-3xl font-bold text-0 w-full text-center mt-8">Congratulations!</span>

        <p class="m-0 p-0 w-9 text-center text-500 mt-6">Your ticket purchase is successful, a confirmation has been sent to you e-mail</p>

        <div class="flex align-items-center justify-content-center gap-3 mt-4">
            <div @click="backScreen" class="cursor-pointer hover:border-800 hover:surface-800 transition-duration-200 transition-background flex-1 flex align-items-center justify-content-center border-1 border-0 py-2 px-3 border-round gap-2">
                <span v-html="icon.arrowleft"></span>
                <span class="text-0 white-space-nowrap">Main menu</span>
            </div>

            <div class="cursor-pointer hover:border-800 hover:surface-800 transition-duration-200 transition-background flex-1 flex align-items-center justify-content-center border-1 border-0 py-2 px-3 border-round gap-2">
                <span v-html="icon.ticket"></span>
                <span class="text-0 white-space-nowrap">View ticket</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageCongrate',
    props: {
        class: null
    },
    data: () => ({

    }),
    methods: {
        backScreen: function(){
            this.$store.state.appPage = 'PageHome';
        }
    },
    computed: {
        containerClass: function(){
            return [this.class, 'w-full flex flex-column align-items-center justify-content-center h-full overflow-y-auto'];
        },
        library: function(){
            return (this.$library);
        },
        icon: function(){
            return (this.$icon);
        }
    },
    mounted: async function(){
        
    }
}
</script>

<style scope lang="scss">
    .checked-icon svg{
        height: 8rem;
        width: 8rem;
    }
</style>