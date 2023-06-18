<template>
    <div :class="containerClass">
        <ProfileHeader class="pb-3 pt-2"></ProfileHeader>

        <SearchBar
            @on-search="doSearch"
            class="pb-3 pt-2">
        </SearchBar>

        <Movies></Movies>

        <ToolBar></ToolBar>
    </div>
</template>

<script>
export default {
    name: 'PageHome',
    props: {
        class: null
    },
    data: () => ({
        moviesLoader: true
    }),
    methods: {
        doSearch: function(key){
            this.$store.state.searchKey = key;
        }
    },
    computed: {
        containerClass: function(){
            return [this.class, 'w-full flex flex-column h-full pt-3'];
        },
        library: function(){
            return (this.$library);
        }
    },
    mounted: async function(){
        
    }
}
</script>