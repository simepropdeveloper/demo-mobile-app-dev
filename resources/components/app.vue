<template>
    <div class="surface-900 h-full" :style="containerStyle">
        <component :is="currentComponent"></component>
    </div>
</template>

<script>
export default {
    name: 'CinemaApp',
    data: () => ({

    }),
    methods: {
        screenHandler: function(){
            const $screenHeight = (window.innerHeight * 0.01);

            document.documentElement.style.setProperty('--vh', `${ $screenHeight }px`);
        }
    },
    computed: {
        containerStyle: function(){
            return [{
                width: `clamp(380px, 50vw, 620px)`
            }];
        },
        icon: function(){
            return (this.$icon);
        },
        library: function(){
            return (this.$library);
        },
        currentComponent: function(){
            const { state } = (this.$store);

            return state.appPage;
        }
    },
    mounted: function(){
        this.screenHandler();

        window.addEventListener('resize', this.screenHandler);

        window.jallo = this;
    }
}
</script>