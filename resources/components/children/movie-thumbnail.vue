<template>
    <div :class="containerClass">
        <h6 class="font-bold m-0 text-0 text-xl">{{ grouplabel }}</h6>

        <div class="grid">
            <div
                v-for="(movie, index) in data"
                :key="index"
                @click="open(movie)"
                class="cursor-pointer col-6 md:col-6 lg:col-4 flex align-items-start justify-content-start flex-column gap-2">

                <img :alt="movie.name" :src="movie.picture" class="h-full w-full border-round border-3 border-800 shadow-3 surface-700" :style="'object-fit: cover'"/>
                <span class="text-0">{{ movie.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MovieThumbnail',
        emits: ['on-click'],
        props: {
            class: null,
            data: {
                type: Array,
                default: []
            },
            grouplabel: {
                type: String,
                default: ''
            }
        },
        methods: {
            open: function(e){
                this.$emit('on-click', e);
            }
        },
        computed: {
            icon: function(){
                return (this.$icon);
            },
            containerClass: function(){
                return [this.class, 'flex flex-column gap-2'];
            }
        },
        mounted: function(){
            
        }
    }
</script>
<style scoped>
img{
    min-height: 8rem;
    min-width: 8rem;
}
</style>