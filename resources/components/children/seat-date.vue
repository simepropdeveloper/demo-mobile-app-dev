<template>
    <div :class="containerClass">
        <div class="flex flex-column w-full gap-3">
            <span class="text-0 font-semibold">Select Date</span>

            <!-- Month Picker -->
            <MonthPicker
                v-model="month"
                @change="updateDate">
            </MonthPicker>

            <!-- Days Picker -->
            <DayPicker
                v-model="days"
                @change="updateDate"
                :daymonth="month"
                class="py-2">
            </DayPicker>
        </div>

        <!-- Time Slot -->
        <div class="flex flex-column w-full gap-3">
            <span class="text-0 font-semibold">Available Time</span>
            <TimeSlot
                v-model="time"
                @change="updateDate">
            </TimeSlot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SeatDate',
    props: {
        class: null,
        modelValue: null
    },
    emits: ['update:modelValue', 'change'],
    data: () => ({
        month: 0,
        days: null,
        time: null,
    }),
    methods: {
        updateDate: function(){
            const { month, days, time } = this;

            this.$emit('update:modelValue', { days, month, time });
            this.$emit('change');
        }
    },
    computed: {
        containerClass: function(){
            return [this.class, 'w-full flex flex-column gap-3'];
        },
        library: function(){
            return (this.$library);
        },
        icon: function(){
            return (this.$icon);
        }
    },
    mounted: function(){
        this.updateDate();
    }
}
</script>