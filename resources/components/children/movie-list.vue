<template>
    <div :class="containerClass">
        <ol class="list-none flex flex-column m-0 py-0 gap-4 px-3">

            <li v-for="(dataset, group) in collection" :key="group" class="w-full">
                <MovieThumbnail @on-click="showMovie" :data="dataset" :grouplabel="group" class="w-full"></MovieThumbnail>
            </li>

            <template v-if="(this.isLoading == true)">
                <li v-for="index in 4" :key="index" class="w-full">
                    <MovieSkeleton class="w-full"></MovieSkeleton>
                </li>
            </template>

            <li ref="lastObserver" class="text-0 w-full text-center">Loading...</li>

        </ol>
    </div>
</template>
<script>
    export default {
        name: 'Movies',
        props: {
            class: null
        },
        data: () => ({
            page: 1,
            group: [
                'New Release',
                'Popular In Cinema',
                'Recommended For You',
                'For Kids'
            ],
            isLoading: false,
            responseData: [],
            resourcesIntersect: null
        }),
        methods: {
            showMovie: function(data){
                this.$store.state.appPage = 'PageDetail';
                this.$store.state.currentMovie = data;
            },
            requestMovies: async function(){
                try {
                    const { axios } = this.library;
                    const { origin } = this.$store.state;
                
                    const { data: $response = {} } = await axios({
                        url: `${ origin }/movies?page=${ this.page }`,
                        method: 'GET'
                    });

                    return $response;
                } catch (error) {
                    throw error;
                }
            },
            renderMovies: async function(){
                this.isLoading = true;
            
                const { data: $dataset = [] } = await this.requestMovies();

                this.page++;

                this.isLoading = false;

                $dataset.forEach(c => {
                    const $exist = this.responseData.find(n => n.id == c.id);

                    if(!$exist){
                        this.responseData.push(c);
                    }
                });

                //# Get Last Record
                if(this.resourcesIntersect && this.$refs.lastObserver){
                    this.resourcesIntersect.observe(this.$refs.lastObserver);
                }
            },
            groupArrayByKey: function(dataset, key){
                return dataset.reduce((acc, item) => ((acc[item[key] ?? 'nogroup'] = [...(acc[item[key] ?? 'nogroup'] || []), item]), acc), {});
            },
            isJson: function(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }
        },
        computed: {
            icon: function(){
                return (this.$icon);
            },
            containerClass: function(){
                return [this.class, 'wrapper flex-1 surface-800 overflow-y-auto py-3'];
            },
            library: function(){
                return (this.$library);
            },
            collection: function(){
                const $decorate = this.responseData.map($c => {
                    const category = ($c.category);
                    const categoryParse = (this.isJson(category) ? JSON.parse(category) : category);
                    
                    $c.category = categoryParse;

                    $c.picture = `${ $c.picture.replaceAll('/seed/picsum/600/600', '/300/300') }?random=${ Math.floor(Math.random() * 40) }`;

                    $c.group = this.group[(Math.floor(Math.random() * 4) ?? 3)];

                    return $c;
                });

                return this.groupArrayByKey($decorate, 'group');
            }
        },
        mounted: function(){
            this.resourcesIntersect = new IntersectionObserver(entries => {
                let element = entries.find(e => e.isIntersecting);

                if(element){
                    this.resourcesIntersect.unobserve(element.target);
                    this.renderMovies();
                }
            });

            this.renderMovies();
        }
    }
</script>

<style lang="scss" scoped>
.wrapper::-webkit-scrollbar {
    width: 6px;
}

.wrapper::-webkit-scrollbar-track {
    background: #424242; 
}
 
.wrapper::-webkit-scrollbar-thumb {
    background: #EEEEEE; 
    border-radius: 8px;
}
</style>