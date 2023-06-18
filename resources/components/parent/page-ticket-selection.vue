<template>
    <div :class="containerClass">
        
        <div class="w-full flex align-items-center gap-3 sticky top-0 z-5 shadow-6 surface-900 p-2 relative">
            <div class="absolute left-0 px-2">
                <span @click="backScreen" class="h-3rem w-3rem border-circle flex align-items-center justify-content-center cursor-pointer hover:surface-800 transition-background transition-duration-200" v-html="icon.arrowleft"></span>
            </div>
            <span class="font-bold white-space-nowrap text-0 flex-1 text-center h-3rem flex align-items-center justify-content-center">Ticket Booking</span>
        </div>

        <span class="max-min-screen-20 text-0 overflow-hidden white-space-nowrap text-overflow-ellipsis p-3">
            Where would you like to see the movie? Kindly select as appropriate
        </span>

        <!-- Choose I Don't Know What Is This -->
        <div class="w-full p-3">
            <div class="grid">
                <div v-for="index in 2" :key="index" class="col-12 md:col-6 lg:col-6">
                    <div class="h-8rem surface-700 w-full flex relative align-items-end shadow-3 border-round-xl border-1 border-800 p-3">
                        <div class="flex flex-column gap-1">
                            <span class="text-sm text-300">Ticket from</span>
                            <span class="text-md text-0">NGN 2000 - NGN 5000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Choose Location State -->
        <div class="flex flex-column w-full gap-2 p-3">
            <span class="text-0 font-semibold">Location State</span>

            <StatePicker
                v-model="collectState"
                @change="onChange"
                class="w-8">
            </StatePicker>
        </div>

        <!-- Choose Location Hall -->
        <div class="flex flex-column w-full gap-2 p-3">
            <span class="text-0 font-semibold">Cinema Location</span>

            <LocationPicker
                v-model="collectLocation"
                @change="onChange"
                :region="collectState"
                class="w-8">
            </LocationPicker>
        </div>

        <!-- Choose Day -->
        <SeatDate
            v-model="collectDate"
            @change="onChange"
            class="p-3">
        </SeatDate>

        <!-- Choose Seat -->
        <SeatPicker
            v-model="collectSeat"
            :bookedSeat="bookedSeat"
            @change="onChange"
            class="p-3">
        </SeatPicker>

        <!-- Total Price -->
        <div class="w-full flex p-3">
            <div class="flex align-items-start justify-content-center w-8 p-2 mx-auto border-1 border-0 border-round">
                <div class="flex align-items-center justify-content-center flex-1 flex-column p-2 gap-2">
                    <span class="uppercase text-200 text-sm w-full text-center white-space-nowrap">Seat</span>

                    <ul class="m-0 p-0 list-none flex w-full gap-2 flex-wrap">
                        <li
                            v-for="(seat, index) in finalSeat"
                            :key="index"
                            class="text-0 border-1 border-0 h-2rem w-2rem border-round text-sm flex align-items-center justify-content-center">{{ seat }}
                        </li>

                        <li v-if="(finalSeat.length == 0)" class="text-0 text-center w-full">-</li>
                    </ul>
                </div>

                <Divider layout="vertical" />

                <div class="flex align-items-center justify-content-center flex-1 flex-column p-2 gap-2">
                    <span class="uppercase text-200 text-sm w-full text-center white-space-nowrap">Sub-Total</span>
                    <span class="text-semibold text-0">MYR {{ finalPrice }}</span>
                </div>
            </div>
        </div>

        <!-- Buttons -->
        <div class="flex px-3 pt-3 pb-4 gap-3 align-items-center sticky bottom-0 surface-900">
            <Button :disabled="isLoading" @click="backScreen" label="Cancel" class="surface-0 flex-1 border-1 border-0 py-3 text-900 font-bold"></Button>
            <Button :disabled="isLoading" @click="finalSubmit" label="Proceed" class="surface-600 flex-1 border-1 border-600 py-3 font-bold"></Button>
        </div>

    </div>

    <ConfirmDialog></ConfirmDialog>

    <Toast position="top-right"></Toast>
</template>

<script>
export default {
    name: 'PageTicketSelection',
    props: {
        class: null
    },
    data: () => ({
        isLoading: false,
        bookedSeat: [],
        purchaser: [],
        collectDate: {},
        collectSeat: [],
        collectState: null,
        collectLocation: null,
    }),
    methods: {
        backScreen: function(){
            this.$store.state.appPage = 'PageDetail';
        },
        nextScreen: function(){
            const { axios } = this.library;
            const { moment } = (this.library);
            const { origin } = this.$store.state;
            const { slotArray } = this.$store.state;
            const { days = null, month = null, time = null } = (this.collectDate);

            const bookYear = (moment().format('YYYY'));
            const bookMonth = (moment().month(month).format('MM'));
            const bookTime = (slotArray.find(c => c.id == time));
            const bookTiming = (`${ bookYear }-${ bookMonth }-${ days } ${ bookTime.time }`);
            const bookTimingSuccess = (moment(bookTiming, 'YYYY-MM-D h:mm A').format('YYYY-MM-DD HH:mm:ss'));

            this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirm Booking',
                acceptLabel: 'Book Now',
                rejectLabel: 'Cancel',
                accept: async () => {
                    this.isLoading = true;
                    
                    await axios({
                        url: `${ origin }/book-ticket`,
                        method: 'POST',
                        data: {
                            slot: time,
                            date: bookTimingSuccess,
                            movie: this.movie.id,
                            profile: this.profile.id,
                            location: this.collectLocation,
                            collectSeat: this.collectSeat,
                        }
                    });

                    this.$store.state.appPage = 'PageCongrate';

                    this.isLoading = false;
                }
            });
        },
        finalSubmit: function(){
            let proceedFlag = true;
            const { collectDate = {}, collectSeat = [], collectState = null, collectLocation = null } = (this);
            const { days = null, month = null, time = null } = (collectDate);

            if(!collectState || !collectLocation){
                proceedFlag = false;

                this.$toast.add({
                    severity:'warn',
                    summary: 'Location is required',
                    detail:'Please select cinema location',
                    life: 3000
                });
            }

            if(!days || !month || !time){
                proceedFlag = false;

                this.$toast.add({
                    severity:'warn',
                    summary: 'Booking date is required',
                    detail:'Please chose which date you want to watch this movie',
                    life: 4000
                });
            }

            if(collectSeat.length == 0){
                proceedFlag = false;

                this.$toast.add({
                    severity:'warn',
                    summary: 'Hall seat is required',
                    detail:'Please select at least one seat',
                    life: 5000
                });
            }

            if(proceedFlag){
                this.nextScreen();
            }

        },
        onChange: function(){
            let bookTimingSuccess;
            const { moment } = (this.library);
            const { slotArray } = this.$store.state;
            const { collectDate = {}, collectSeat = [], collectState = null, collectLocation = null } = (this);
            const { days = null, month = null, time = null } = (collectDate);

            if(days && month && time){
                const bookYear = (moment().format('YYYY'));
                const bookMonth = (moment().month(month).format('MM'));
                const bookTime = (slotArray.find(c => c.id == time));
                const bookTiming = (`${ bookYear }-${ bookMonth }-${ days } ${ bookTime.time }`);

                bookTimingSuccess = (moment(bookTiming, 'YYYY-MM-D h:mm A').format('YYYY-MM-DD HH:mm:ss'));
            }

            const $matchPurchaser = this.purchaser.filter($c => {
                return ($c.location == collectLocation && $c.date == bookTimingSuccess);
            });
            
            //# Clear Booked Seat
            this.bookedSeat.splice(0, this.bookedSeat.length);

            if($matchPurchaser.length > 0){
                $matchPurchaser.forEach($p => {
                    $p.pax.forEach($c => {
                        const pushed = (this.bookedSeat.includes($c));

                        if(!pushed){
                            this.bookedSeat.push($c);
                        }
                    });
                });
            }
        },
        refreshPurchaser: async function(){
            const { axios } = this.library;
            const { origin } = this.$store.state;

            const { data: $booked = [] } = await axios.get(`${ origin }/book-ticket?movie=${ this.movie.id }`);

            this.purchaser = ($booked);

            this.onChange();
            this.refreshPooling();
        },
        refreshPooling: async function(){
            const { axios } = this.library;
            const { origin } = this.$store.state;

            const { data: $channel = {} } = await axios({
                url: `${ origin }/subscribe`,
                method: 'POST',
                data: {
                    movie: this.movie.id,
                    profile: this.profile.id,
                }
            });

            await this.pooling({
                timetravel: 600,
                onValidate: _ => (_.has_order == 1 || this.$store.state.appPage != 'PageTicketSelection'),
                onSuccess : _ => new Promise(resolve => {
                    const $check = axios.get(`${ origin }/subscribe?id=${ $channel.id }`);

                    $check.then(({ data: $response = {} }) => {
                        resolve($response);
                    });
                })
            });

            this.refreshPurchaser();
        },
        pooling: async function({ timetravel = 2500, onValidate, onSuccess }){
            const resolver = async (resolve, reject) => {
                try{ 
                    const result = await onSuccess();
                    const valid = onValidate(result);
        
                    if(valid === true){
                        resolve(result);
                    }else if(valid === false){
                        setTimeout(resolver, timetravel, resolve, reject);
                    }
                }catch(e){
                    reject(e);
                }
            };
            return new Promise(resolver);
        }
    },
    computed: {
        containerClass: function(){
            return [this.class, 'w-full flex flex-column h-full overflow-y-auto'];
        },
        library: function(){
            return (this.$library);
        },
        icon: function(){
            return (this.$icon);
        },
        movie: function(){
            const { currentMovie } = this.$store.state;

            return currentMovie;
        },
        profile: function(){
            const { currentProfile } = this.$store.state;

            return currentProfile;
        },
        finalSeat: function(){
            return this.collectSeat;
        },
        finalPrice: function(){
            const { amount: movieprice = 0 } = this.movie;
            const seatcount = (this.finalSeat ?? []).length;

            return (movieprice * seatcount).toFixed(2);
        },
    },
    created: async function(){
        this.refreshPooling();
        this.refreshPurchaser();
    }
}
</script>