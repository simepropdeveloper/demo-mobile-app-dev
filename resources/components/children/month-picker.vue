<template>
    <div :class="containerClass">
        <div class="flex align-items-center justify-content-center gap-3">
            <Button @click="monthToggle('minus')" class="p-button surface-800 h-2rem w-2rem flex align-items-center justify-content-center border-900">
                <span class="flex align-items-center justify-content-center" v-html="icon.chevronleft"></span>
            </Button>

            <span class="text-900 surface-0 p-2 font-bold border-1 border-800 select-none pointer-events-none border-round w-10rem text-center">{{ currentMonth }}</span>

            <Button @click="monthToggle('plus')" class="p-button surface-800 h-2rem w-2rem flex align-items-center justify-content-center border-900">
                <span class="flex align-items-center justify-content-center" v-html="icon.chevronright"></span>
            </Button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MonthPicker',
    props: {
        class: null,
        modelValue: {
            type: Number,
            default: 0
        }
    },
    emits: ['update:modelValue', 'change'],
    data: () => ({

    }),
    methods: {
        monthToggle: function(operation){
            let changed = 0;

            if(operation == 'plus'){
                changed = (this.modelValue + 1);

                if(changed >= 12) changed = 0;
            }

            if(operation == 'minus'){
                changed = (this.modelValue - 1);

                if(changed < 0) changed = 11;
            }

            this.$emit('update:modelValue', changed);
            this.$emit('change');
        }
    },
    computed: {
        containerClass: function(){
            return [this.class, 'w-full flex justify-content-start'];
        },
        library: function(){
            return (this.$library);
        },
        icon: function(){
            return (this.$icon);
        },
        months: function(){
            const { moment } = (this.library);
            const $now = moment();
            const collect = [];

            for (var i = 0; i < 12; i++) {
                collect.push($now.month(i).format('MMMM'));
            }

            return collect;
        },
        currentMonth: function(){
            return this.months[this.modelValue];
        }
    },
    mounted: function(){

    }
}
</script>