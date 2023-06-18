<template>
    <div :class="containerClass">
        <!-- Backward button -->
        <button 
            v-if="!backwardIsDisabled || modelValue.length == 0"
            ref="prevBtn"
            type="button"
            class="cursor-pointer z-1 absolute top-0 left-0 border-none h-full w-2rem flex align-items-center justify-content-center surface-900"
            @click="navBackward">
            
            <span v-html="icon.chevronleft"></span>
        </button>

        <!-- Content body -->
        <div ref="scrollableContainer" class="w-full panel-tags" @scroll="onScroll">
            <ul class="w-full flex align-items-center list-none m-0 p-0 gap-2" role="tablist">
                <li v-for="(listdata, index) in modelValue" :key="index" role="presentation" ref="listnode">
                    <slot name="content" v-bind="listdata"></slot> 
                </li>

                <li v-if="modelValue.length > 0" class="p-2 pointer-events-none select-none opacity-0"></li>

                <template v-if="modelValue.length == 0">
                    <slot name="empty"></slot> 
                </template>
            </ul>
        </div> 

        <!-- Forward button -->
        <button v-if="!forwardIsDisabled"
            ref="nextBtn" 
            type="button" 
            class="cursor-pointer text-blue-600 panel-tags-next-button z-1 absolute top-0 right-0 border-none h-full w-2rem flex align-items-center justify-content-center surface-900" 
            @click="navForward">
            
            <span v-html="icon.chevronright"></span>
        </button>
    </div>

</template>

<script>
export default {
    name: 'ScrollerTab',
    props: {
        class: null,
        selected: null,
        modelValue: {
            default: [],
            type: Array
        },
        closeOnEmpty: {
            default: false,
            type: Boolean
        }
    },
    data: () => ({
        backwardIsDisabled: true,
        forwardIsDisabled: false,
        activeCard: [],
        countLeft: 0,
        countRight: 3,
        lenCount: 0,
    }),
    computed: {
        containerClass: function(){
            return [this.class, 'w-full relative overflow-hidden transition-all transition-duration-300'];
        },
        library: function(){
            return (this.$library);
        },
        icon: function(){
            return (this.$icon);
        },
    },
    methods: {
        updateButtonState: function(){
            const { DomHandler } = (this.library);
            const content = this.$refs.scrollableContainer;
            const { scrollLeft, scrollWidth } = content;
            const width = DomHandler.getWidth(content);

            let paddingRightAmount = getComputedStyle(content, null).getPropertyValue('padding-right');
            let paddingLeftAmount = getComputedStyle(content, null).getPropertyValue('padding-left');

            paddingRightAmount = paddingRightAmount.replaceAll('px', '');
            paddingRightAmount = +paddingRightAmount;

            paddingLeftAmount = paddingLeftAmount.replaceAll('px', '');
            paddingLeftAmount = +paddingLeftAmount;

            this.backwardIsDisabled = (scrollLeft === 0);
            this.forwardIsDisabled = (parseInt(scrollLeft) === (scrollWidth - width - paddingRightAmount - paddingLeftAmount));
        },
        onScroll: function(event){
            this.updateButtonState();
            event.preventDefault();
        },
        getVisibleButtonWidths: function(){
            const { DomHandler } = (this.library);
            const { prevBtn, nextBtn } = this.$refs;

            return [prevBtn, nextBtn].reduce((acc, el) => el ? acc + DomHandler.getWidth(el) : acc, 0);
        },
        navBackward: function(){
            const { DomHandler } = (this.library);
            const content = this.$refs.scrollableContainer;
            const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
            const pos = content.scrollLeft - width;

            content.scrollLeft = pos <= 0 ? 0 : pos;
        },
        navForward: function(){
            const { DomHandler } = (this.library);
            const content = this.$refs.scrollableContainer;
            const width = DomHandler.getWidth(content) - this.getVisibleButtonWidths();
            const pos = content.scrollLeft + width;
            const lastPos = content.scrollWidth - width;

            content.scrollLeft = pos >= lastPos ? lastPos : pos;
        },
    },
}
</script>

<style lang="scss" scoped>
    .panel-tags {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    
        &::-webkit-scrollbar {
            display: none;
        } 
    }
</style>