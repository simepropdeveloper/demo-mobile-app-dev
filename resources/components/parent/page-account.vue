<template>
    <div :class="containerClass">
        <div class="w-full flex align-items-center gap-3 sticky top-0 z-5 shadow-6 surface-900 p-2 relative">
            <span class="font-bold white-space-nowrap text-0 flex-1 text-center h-3rem flex align-items-center justify-content-center">Choose Dummy Account</span>
        </div>

        <div class="flex-1 w-full p-3 flex align-items-center justify-content-center h-full overflow-y-auto">
            <div class="grid w-full">

                <!-- Account Selection -->
                <template v-if="(isLoading == false)">
                    <template v-for="(user, index) in collection" :key="index">
                        
                        <div @click="select(user)" v-if="(index < 6)" class="col-12 md:col-6 lg:col-6 cursor-pointer">
                            <div class="hover:border-0 hover:border-3 transition-duration-300 transition-all py-3 surface-700 p-3 border-round-xl shadow-6 border-1 border-800 flex flex-column align-items-center justify-content-center h-13rem gap-4">
                                <img
                                    :src="user.picture"
                                    class="h-8rem w-8rem border-circle" />
                                <span class="font-bold text-center flex-1 text-0">{{ user.name }}</span>
                            </div>
                        </div>

                    </template>
                </template>

                <!-- Account Skeleton -->
                <template v-if="(isLoading == true)">
                    <div v-for="index in 6" :key="index" class="col-12 md:col-6 lg:col-6">
                        <Skeleton class="h-13rem w-full border-round-xl surface-700"></Skeleton>
                    </div>
                </template>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageAccount',
    props: {
        class: null
    },
    data: () => ({
        isLoading: false,
        collection: []
    }),
    methods: {
        select: function(data){
            this.$store.state.appPage = 'PageHome';
            this.$store.state.currentProfile = data;
        }
    },
    computed: {
        containerClass: function(){
            return [this.class, 'w-full flex flex-column h-full'];
        },
        library: function(){
            return (this.$library);
        }
    },
    mounted: async function(){
        const { axios } = this.library;
        const { origin } = this.$store.state;
        const $state = (this.$store.state);
        const $profilePicture = [
            'https://randomuser.me/api/portraits/men/32.jpg',
            'https://randomuser.me/api/portraits/men/29.jpg',
            'https://randomuser.me/api/portraits/men/79.jpg',
            'https://randomuser.me/api/portraits/men/45.jpg',
            'https://randomuser.me/api/portraits/women/59.jpg',
            'https://randomuser.me/api/portraits/women/68.jpg',
        ];

        this.isLoading = true;

        const { data: $accounts = [] } = await axios.get(`${ origin }/accounts`);

        $accounts.forEach(($c, $i) => {
            this.collection.push({
                ...$c,
                picture: $profilePicture[$i]
            });
        });

        this.isLoading = false;
    }
}
</script>