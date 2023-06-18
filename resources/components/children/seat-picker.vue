<template>
    <div :class="containerClass">

        <!-- Seats Legend -->
        <span class="text-0 font-semibold text-center">Select Seat</span>

        <ul class="m-0 px-0 py-2 w-full list-none flex align-items-center justify-content-evenly gap-3 flex-wrap">
            <li class="flex flex-wrap gap-3 align-items-center">
                <span class="h-1rem w-1rem border-round surface-800 border-1 border-800"></span>
                <span class="text-0 white-space-nowrap text-md">Available</span>
            </li>
            <li class="flex flex-wrap gap-3 align-items-center">
                <span class="h-1rem w-1rem border-round surface-600 text-300 flex align-items-center justify-content-center" v-html="icon.close"></span>
                <span class="text-0 white-space-nowrap text-md">Unavailable</span>
            </li>
            <li class="flex flex-wrap gap-3 align-items-center">
                <span class="h-1rem w-1rem border-round surface-400"></span>
                <span class="text-0 white-space-nowrap text-md">Selected</span>
            </li>
        </ul>

        <!-- Seats Picker -->
        <div class="w-full flex flex-column my-3">
            <div class="h-2rem w-8 surface-500 mx-auto text-center relative overflow-hidden">
                <svg class="w-full absolute left-0" height="80px" viewBox="0 0 500 80" preserveAspectRatio="none" style="transform: rotateX(180deg);top: -.5rem;"><path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="var(--surface-900)"></path></svg>
            </div>
            <span class="w-full text-center text-300 text-sm">Screen</span>
        </div>

        <div class="w-full py-3 flex align-items-center justify-content-center">
            <div class="w-8">
                <div class="grid m-0">

                    <div
                        v-for="(seat, index) in datasetSeat"
                        :key="index"
                        class="col-1">

                        <template v-if="(seat.length == 1)">
                            <!-- Not a seat at all -->
                            <div class="h-1rem w-1rem border-round text-200 select-none pointer-events-none flex align-items-center justify-content-center text-sm">{{ seat }}</div>
                        </template>
                        
                        <template v-if="(seat.length != 1)">
                            <template v-if="(bookedSeat.includes(seat))">
                                <!-- Someone seat here -->
                                <span class="h-1rem w-1rem border-round surface-600 text-300 flex align-items-center justify-content-center" v-html="icon.close"></span>
                            </template>
                            <template v-else>
                                <!-- No one seat here -->
                                <div
                                    @click="chooseSeat(seat)"
                                    :class="['border-1 border-800 hover:border-800 h-1rem w-1rem border-round transition-all transition-duration-200 cursor-pointer', {
                                        'surface-400 border-0' : (modelValue.includes(seat)),
                                        'surface-800 hover:surface-500' : (!modelValue.includes(seat)),
                                    }]">
                                </div>
                            </template>
                        </template>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'SeatPicker',
    emits: ['update:modelValue','change'],
    props: {
        class: null,
        modelValue: {
            type: Array,
            default: []
        },
        bookedSeat: {
            type: Array,
            default: []
        },
        totalSeat: {
            type: Number,
            default: 48
        },
        totalColumn: {
            type: Number,
            default: 12
        }
    },
    data: () => ({

    }),
    methods: {
        chooseSeat: function(id){
            const $type = (id.length == 1 ? 'none-seat' : 'seat');
            const $index = (this.modelValue.findIndex(c => c == id));
            
            if($type == 'seat'){
                if($index == -1){
                    this.modelValue.push(id);
                }else{
                    this.modelValue.splice($index, 1);
                }

                this.$emit('change');
            }
        }
    },
    computed: {
        containerClass: function(){
            return [this.class, 'flex flex-column w-full gap-3'];
        },
        icon: function(){
            return (this.$icon);
        },
        rowCharacters: function(){
            let collect = [];
            let from = 'a'.charCodeAt(0);
            let to = 'z'.charCodeAt(0);

            for (; from <= to; ++from) {
                collect.push(String.fromCharCode(from).toUpperCase());
            }

            return collect;
        },
        seatRowGroup: function(){
            const $collect = {};
            const $rowLabel = this.rowCharacters;
            const $totalColumn = (this.totalColumn);
            const $totalRow = (this.totalSeat / $totalColumn);

            for(let i = 1; i <= $totalRow; i++){
                const $groupSet = [];
                const $groupLabel = ($rowLabel[i - 1]);
                const $labelLeft = (((i * $totalColumn) - $totalColumn) + 1);
                const $labelCenter = (i * $totalColumn);
                const $labelRight = (i * $totalColumn + 1);

                if(!$groupSet.includes($labelLeft)){
                    $groupSet.push($labelLeft);
                }

                if(!$groupSet.includes($labelCenter)){
                    $groupSet.push($labelCenter);
                }

                if(!$groupSet.includes($labelRight)){
                    $groupSet.push($labelRight);
                }

                $collect[$groupLabel] = $groupSet;
            }

            return $collect;
        },
        rowSetLabel: function(){
            return Object.keys(this.seatRowGroup).flat();
        },
        seatGroupIntersect: function(){
            return Object.values(this.seatRowGroup).flat();
        },
        datasetSeat: function(){
            const $collect = [];
            const $totalseat = (this.totalSeat);
            const $rowLabel = (this.rowCharacters);

            let countRow = null;
            let eachSeatRow = 0;
            let nonSeatFounded = 1;

            for(let i = 1; i <= $totalseat; i++){
                if(this.seatGroupIntersect.includes(i)){

                    //# Trap: alphabet index
                    if(nonSeatFounded == 1){
                        if(countRow == null){
                            countRow = 0;
                        }else{
                            countRow++;
                        }
                    }

                    //# Trap: to get left & right label of a row
                    if(nonSeatFounded != 2){
                        nonSeatFounded = 2;
                    }else{
                        eachSeatRow = 0;
                        nonSeatFounded = 1;
                    }

                    $collect.push($rowLabel[countRow]);
                }else{
                    $collect.push(`${ $rowLabel[countRow] }${ eachSeatRow }`);
                }

                eachSeatRow++;
            }

            return $collect;
        }
    },
    mounted: function(){

    }
}
</script>