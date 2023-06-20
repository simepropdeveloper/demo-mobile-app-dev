<template>
    <div :class="containerClass">
        <template v-for="(data, index) in buttons" :key="index">

            <button
                @click="data.callback"
                class="border-1 surface-900 border-900 border-round flex align-items-center justify-content-center flex-column h-4rem flex-1 cursor-pointer hover:surface-800 transition-background transition-duration-200">

                <span v-html="data.icon"></span>
                <span class="text-sm text-0">{{ data.label }}</span>
            </button>

        </template>
    </div>
</template>
<script>
    export default {
        name: 'ToolBar',
        props: {
            class: null
        },
        data: function(){
            return {
                buttons: [{
                    icon: this.$icon.home,
                    label: 'Home',
                    callback: () => {
                        this.$store.state.appPage = 'PageAccount';
                    }
                },{
                    icon: this.$icon.ticket,
                    label: 'Ticket',
                    callback: () => {
                        console.log('Ticket');
                    }
                },{ 
                    icon: this.$icon.love,
                    label: 'Favourite',
                    callback: () => {
                        console.log('Favourite');
                    }
                },{
                    icon: this.$icon.user,
                    label: 'Profile',
                    callback: () => {
                        console.log('Profile');
                    }
                }]
            }
        },
        computed: {
            containerClass: function(){
                return [this.class, 'w-full flex align-items-center justify-content-evenly shadow-3 p-1'];
            }
        }
    }
</script>