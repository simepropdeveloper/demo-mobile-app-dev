<template>
    <div class="surface-900 h-full" :style="containerStyle">
        <component :is="currentComponent"></component>
    </div>
</template>

<script>
export default {
    name: 'CinemaApp',
    data: () => ({
        appWidth: 10,
    }),
    methods: {
        screenHandler: function(){
            const $screenHeight = (window.innerHeight * 0.01);
            const $screenWidth = (window.innerWidth * 0.4);

            document.documentElement.style.setProperty('--vh', `${ $screenHeight }px`);

            this.appWidth = $screenWidth;
        }
    },
    computed: {
        containerStyle: function(){
            let applicationWidth = (this.appWidth);

            if(applicationWidth < 320){
                applicationWidth = 320;
            }

            if(applicationWidth > 520){
                applicationWidth = 520;
            }

            return [{
                width: `${ applicationWidth }px`
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