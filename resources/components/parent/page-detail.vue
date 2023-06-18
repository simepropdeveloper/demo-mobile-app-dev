<template>
    <div :class="containerClass">
        <div class="video-player surface-400 border-round-top p-2">
            <div class="h-full w-full flex flex-column z-1">
                <div class="flex justify-content-between">
                    <span @click="backScreen" class="h-3rem w-3rem border-circle flex align-items-center justify-content-center cursor-pointer hover:surface-800 transition-background transition-duration-200" v-html="icon.gobackarrow"></span>
                    <span class="h-3rem w-3rem border-circle flex align-items-center justify-content-center cursor-pointer hover:surface-800 transition-background transition-duration-200" v-html="icon.zoom"></span>
                </div>

                <div class="flex-1 flex align-items-center justify-content-center">
                    <span v-html="icon.play"></span>
                </div>

                <div class="flex justify-content-between p-3">
                    <span class="border-1 border-0 py-1 px-2 uppercase text-sm text-0 font-bold">Trailer</span>
                    <span v-html="icon.mute"></span>
                </div>
            </div>
        </div>

        <div class="video-info surface-900 border-x-2 border-400 flex flex-column overflow-y-auto">
            <!-- Info Curve -->
            <div class="relative w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" class="absolute top-0 left-0 curve-left">
                    <path d="M0 0L1.87208 14.9767C2.28767 18.3013 3.26557 21.5311 4.76398 24.528L5.02834 25.0567C8.27423 31.5485 13.3181 36.9701 19.559 40.6756V40.6756C23.8144 43.2023 28.5102 44.8994 33.3978 45.6769L48 48H0V0Z" fill="#BDBDBD"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" class="absolute top-0 right-0 curve-right">
                    <path d="M0 0L1.87208 14.9767C2.28767 18.3013 3.26557 21.5311 4.76398 24.528L5.02834 25.0567C8.27423 31.5485 13.3181 36.9701 19.559 40.6756V40.6756C23.8144 43.2023 28.5102 44.8994 33.3978 45.6769L48 48H0V0Z" fill="#BDBDBD"/>
                </svg>
            </div>

            <!-- Info Details -->
            <div class="pt-6 pb-3 px-4">
                <div class="flex flex-column gap-3">
                    <div class="grid">
                        <div class="col-12 md:col-6 lg:col-5">
                            <img :src="dataset.picture" class="h-full w-full border-round border-3 border-800 shadow-3"/>
                        </div>

                        <div class="col-12 md:col-6 lg:col-7">
                            <div class="flex-1 flex flex-column gap-3">
                                <span class="text-0 text-xl font-bold">{{ dataset.name }}</span>

                                <ul class="list-none p-0 m-0 flex gap-2 flex-wrap">
                                    <li v-for="(data, index) in dataset.category" :key="index" class="border-1 border-300 text-300 p-2 text-sm border-round-2xl">{{ data }}</li>
                                </ul>

                                <ul class="list-none p-0 m-0 flex flex-wrap gap-3">
                                    <li class="flex align-items-center justify-content-center gap-2">
                                        <span v-html="icon.calendar"></span>
                                        <span class="text-0 text-sm">{{ dataset.start_time }}</span>
                                    </li>
                                    <li class="flex align-items-center justify-content-center gap-2">
                                        <span v-html="icon.monitor"></span>
                                        <span class="text-0 text-sm">15&plus;</span>
                                    </li>
                                    <li class="flex align-items-center justify-content-center gap-2">
                                        <span v-html="icon.clock"></span>
                                        <span class="text-0 text-sm">{{ dataset.duration }}</span>
                                    </li>
                                </ul>

                                <StarRating v-model="movieScore"></StarRating>
                            </div>
                        </div>
                    </div>

                    <TabView>
                        <TabPanel header="Movie Details">
                            <div class="flex flex-column gap-3">
                                <span class="font-bold text-300 text-0 text-xl">Fill Synopsis</span>
                                <p class="text-200">{{ dataset.description }}</p>
                            </div>

                            <Divider />

                            <div class="flex flex-column gap-3">
                                <span class="font-bold text-300 text-0 text-xl">Casts</span>
                                <p class="text-200">Tom Hardy, Woody Harreison, Michelle Williams, Naomi Harris</p>
                            </div>

                            <Divider />

                            <div class="flex flex-column gap-3">
                                <span class="font-bold text-300 text-0 text-xl">Director</span>
                                <p class="text-200">Andy Serkis</p>
                            </div>

                            <Divider />

                            <div class="flex flex-column gap-3">
                                <span class="font-bold text-300 text-0 text-xl">Writers</span>
                                <p class="text-200">Kelly Marcel (Screenplay by), Tom Hardy (Story By)</p>
                            </div>

                        </TabPanel>

                        <TabPanel header="Rating & Reviews">No Content Yet</TabPanel>
                    </TabView>

                    <div class="flex">
                        <Button @click="bookTicket" label="Book Ticket" class="surface-600 flex-1 border-1 border-600 py-3"></Button>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'PageDetail',
    props: {
        class: null
    },
    data: function(){
        return {
            movieScore: 4
        }
    },
    methods: {
        backScreen: function(){
            this.$store.state.appPage = 'PageHome';
        },
        bookTicket: function(){
            this.$store.state.appPage = 'PageTicketSelection';
        }
    },
    computed: {
        containerClass: function(){
            return [this.class, 'w-full flex flex-column h-full p-1 surface-900'];
        },
        icon: function(){
            return (this.$icon);
        },
        dataset: function(){
            return this.$store.state.currentMovie;
        }
    },
    mounted: function(){
        this.movieScore = (Math.floor(Math.random() * 4));
    }
}
</script>

<style scoped lang="scss">
.video-player{
    flex: 1;
}
.video-info{
    flex: 2;

    &::-webkit-scrollbar {
        display: none;
    }
}

.curve-left{
    transform: rotate(90deg);
}

.curve-right{
    transform: rotate(180deg);
}

:deep(.p-tabview .p-tabview-nav-link){
    background: var(--surface-900) !important;
    justify-content: center;
    color: var(--surface-300) !important;
    outline: none !important;
    box-shadow: none !important;
}

:deep(.p-tabview-nav){
    background: var(--surface-900) !important;
}

:deep(.p-tabview .p-tabview-panels){
    background: var(--surface-900) !important;
}

:deep(.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link){
    border-color: var(--surface-500) !important;
}
:deep(.p-tabview .p-tabview-nav li){
    flex: 1;
}
</style>