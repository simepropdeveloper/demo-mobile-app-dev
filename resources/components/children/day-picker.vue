<template>
    <ScrollerTab :class="containerClass" v-model="days">
        <template #content="dataset">
            <div
                @click="select(dataset)"
                :class="['transition-duration-200 transition-background flex flex-column align-items-center justify-content-center gap-1 border-round-xl p-1 cursor-pointer w-4rem', {
                    'surface-0 pointer-events-none select-none' : (dataset.checked == true),
                    'surface-800 hover:surface-700' : (dataset.checked == false)
                }]">
                
                <span :class="['text-0 font-bold', { 'text-900': dataset.checked }]">{{ dataset.day }}</span>
                <span :class="['text-0 text-sm text-center', { 'text-900': dataset.checked }]">{{ dataset.text }}</span>
            </div>
        </template>
    </ScrollerTab>
</template>

<script>
export default {
    name: 'DayPicker',
    emits: ['update:modelValue','change'],
    props: {
        class: null,
        modelValue: {
            type: Number,
            default: 0
        },
        daymonth: {
            type: Number,
            default: 0
        }
    },
    data: () => ({

    }),
    methods: {
        select: function(data){
            this.$emit('update:modelValue', data.day);
            this.$emit('change');
        }
    },
    computed: {
        containerClass: function(){
            return [this.class, 'w-full overflow-x-auto'];
        },
        library: function(){
            return (this.$library);
        },
        icon: function(){
            return (this.$icon);
        },
        totaldays: function(){
            const { moment } = (this.library);
            const $now = moment();

            return $now.month(this.daymonth).daysInMonth();
        },
        days: function(){
            const { moment } = (this.library);
            const $now = moment();
            const collect = [];

            for(let i = 1; i <= this.totaldays; i++){
                const $moment = $now.month(this.daymonth).day(i);

                collect.push({
                    day: i,
                    checked: (this.modelValue == i),
                    text: $moment.format('ddd')
                });
            }

            return collect;
        }
    },
    mounted: function(){

    }
}
</script>