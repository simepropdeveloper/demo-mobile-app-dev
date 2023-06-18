<template>
    <div :class="containerClass">

        <template v-if="(isLoading == false)">
            <Dropdown
                @change="select"
                v-model="selected"
                placeholder="Select Location state"
                :options="options"
                optionValue="id"
                optionLabel="name"
                class="surface-0 border-1 border-0 p-2 border-round-xl w-full">
            </Dropdown>
        </template>

        <template v-if="(isLoading == true)">
            <Skeleton class="h-3rem w-full border-round-xl surface-700"></Skeleton>
        </template>

    </div>
</template>

<script>
export default {
    name: 'StatePicker',
    props: {
        class: null,
        modelValue: null
    },
    emits: ['update:modelValue','change'],
    data: () => ({
        selected: null,
        isLoading: false
    }),
    methods: {
        requestState: async function(){
            try {
                const { axios } = this.library;
                const { origin } = this.$store.state;
            
                const { data: $response = {} } = await axios({
                    url: `${ origin }/state`,
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
            const { stateArray } = this.$store.state;
            const $data = (stateArray ?? []);

            return $data.map($c => {
                return $c;
            });
        }
    },
    mounted: async function(){
        const $state = (this.$store.state);

        this.isLoading = true;

        if($state.stateArray.length == 0){
            const $slots = await this.requestState();

            $slots.forEach(({ id = null, name = null }) => {
                $state.stateArray.push({ id, name });
            });
        }

        this.isLoading = false;
    }
}
</script>