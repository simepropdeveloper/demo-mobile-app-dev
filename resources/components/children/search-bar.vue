<template>
    <div :class="containerClass">
        <div class="w-full flex align-items-center surface-800 border-round-xl gap-1">
            <span class="h-3rem w-3rem border-circle flex align-items-center justify-content-center" v-html="icon.search"></span>

            <input
                v-model="key"
                @keypress="search"
                type="search"
                class="flex-1 py-3 pr-3 surface-800 border-1 border-800 border-round-xl text-0"
                placeholder="Search by movies or cinema hall" />

            <button class="h-3rem w-3rem border-circle border-1 surface-800 border-800 flex align-items-center justify-content-center cursor-pointer hover:surface-900 transition-background transition-duration-200" v-html="icon.tune"></button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'SearchBar',
        emits: ['on-search'],
        props: {
            class: null
        },
        data: () => ({
            key: null
        }),
        methods: {
            search: function(){
                this.$emit('on-search', this.keyword);
            }
        },
        computed: {
            icon: function(){
                return (this.$icon);
            },
            keyword: function(){
                return (this.key ?? '').toLowerCase();
            },
            containerClass: function(){
                return [this.class, 'w-full px-3'];
            }
        },
    }
</script>