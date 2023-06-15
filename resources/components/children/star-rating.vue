<template>
    <div :class="containerClass">
        <ul class="list-none p-0 m-0 flex">
            <template v-for="index in total" :key="index">
                <li v-if="(index <= score)" class="flex align-items-center justify-content-center gap-2" v-html="icon.starfull"></li>
                <li v-if="(index > score)" class="flex align-items-center justify-content-center gap-2" v-html="icon.starempty"></li>
            </template>
        </ul>
        <span class="text-0 text-xs text-300">{{ scoreText }}</span>
    </div>
</template>
<script>
    export default {
        name: 'StarRating',
        props: {
            class: null,
            modelValue: null
        },
        data: () => ({
            total: 5
        }),
        methods: {
           
        },
        computed: {
            icon: function(){
                return (this.$icon);
            },
            containerClass: function(){
                return [this.class, 'flex gap-2 flex-wrap'];
            },
            score: function(){
                return (this.modelValue ?? 0);
            },
            scoreText: function(){
                return `${  this.score.toFixed(1) }/${ this.total.toFixed(1) } (20)`;
            }
        },
    }
</script>