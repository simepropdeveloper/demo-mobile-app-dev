<template>
    <ul :class="containerClass">
        <template v-if="(isLoading == false)">
            <li
                v-for="(slot, index) in slotCollection"
                @click="select(slot)"
                :key="index"
                v-html="slot.time"
                :class="['border-1 border-0 p-2 border-round white-space-nowrap transition-duration-100 transition-all', {
                    'surface-0 border-0 text-900 pointer-events-none select-none' : (slot.checked == true),
                    'hover:surface-800 hover:border-700 hover:text-300 text-0 cursor-pointer' : (slot.checked == false)
                }]">
            </li>
        </template>

        <template v-if="(isLoading == true)">
            <Skeleton v-for="index in 6" :key="index" class="h-2rem w-6rem border-round surface-700"></Skeleton>
        </template>
    </ul>
</template>

<script>
export default {
    name: 'TimeSlot',
    props: {
        class: null,
        modelValue: {
            type: Number,
            default: 0
        }
    },
    emits: ['update:modelValue','change'],
    data: () => ({
        isLoading: false
    }),
    methods: {
        requestSlot: async function(){
            try {
                const { axios } = this.library;
                const { origin } = this.$store.state;
            
                const { data: $response = {} } = await axios({
                    url: `${ origin }/slot`,
                    method: 'GET'
                });

                return $response;
            } catch (error) {
                throw error;
            }
        },
        select: function(data){
            this.$emit('update:modelValue', data.id);
            this.$emit('change');
        }
    },
    computed: {
        containerClass: function(){
            return [this.class, 'm-0 p-0 w-full list-none flex align-items-center gap-3 flex-wrap'];
        },
        library: function(){
            return (this.$library);
        },
        icon: function(){
            return (this.$icon);
        },
        slotCollection: function(){
            const { slotArray } = this.$store.state;
            const $data = (slotArray ?? []);

            return $data.map($c => {
                $c.checked = (this.modelValue == $c.id);

                return $c;
            });
        }
    },
    mounted: async function(){
        const $state = (this.$store.state);

        this.isLoading = true;

        if($state.slotArray.length == 0){
            const $slots = await this.requestSlot();

            $slots.forEach(({ id = null, slot_time: time = null }) => {
                $state.slotArray.push({ id, time });
            });
        }

        this.isLoading = false;
    }
}
</script>