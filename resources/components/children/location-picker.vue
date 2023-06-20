<template>
    <div :class="containerClass">

        <template v-if="(isLoading == false)">
            <Dropdown
                @change="select"
                v-model="selected"
                placeholder="Select Cinema Location"
                :options="options"
                :disabled="disabled"
                optionValue="id"
                optionLabel="location"
                class="surface-0 border-1 border-0 p-2 border-round-xl w-full">
            </Dropdown>
            <span v-if="(disabled && region == null)" class="text-sm text-400 mt-3">Please select location state</span>
        </template>

        <template v-if="(isLoading == true)">
            <Skeleton class="h-3rem w-full border-round-xl surface-700"></Skeleton>
        </template>

    </div>
</template>

<script>
export default {
    name: 'LocationPicker',
    props: {
        class: null,
        modelValue: null,
        region: {
            type: Number,
            default: null
        }
    },
    emits: ['update:modelValue','change'],
    data: () => ({
        selected: null,
        isLoading: false
    }),
    methods: {
        requestLocation: async function(){
            try {
                const { axios } = this.library;
                const { origin } = this.$store.state;
            
                const { data: $response = {} } = await axios({
                    url: `${ origin }/location`,
                    method: 'GET'
                });

                return $response;
            } catch (error) {
                throw error;
            }
        },
        select: function({ value }){
            this.$emit('update:modelValue', value);
            this.$emit('change');
        }
    },
    watch: {
        modelValue: function(value){
            this.selected = value;
        }
    },
    computed: {
        containerClass: function(){
            return [this.class];
        },
        library: function(){
            return (this.$library);
        },
        icon: function(){
            return (this.$icon);
        },
        options: function(){
            const { locationArray } = this.$store.state;
            const $data = (locationArray ?? []);

            if(this.region){
                return $data.filter($c => $c.state == this.region);
            }else{
                return [];
            }
        },
        disabled: function(){
            return (this.region == null);
        }
    },
    mounted: async function(){
        const $state = (this.$store.state);

        this.isLoading = true;

        if($state.locationArray.length == 0){
            const $slots = await this.requestLocation();

            $slots.forEach(({ id = null, name: location = null, state = null }) => {
                $state.locationArray.push({ id, location, state });
            });
        }

        this.isLoading = false;

        window.lokasi = this;
    }
}
</script>