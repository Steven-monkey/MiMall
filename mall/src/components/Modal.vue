<template>
    <transition name="slide">
         <div class="modal" v-show="showModal">
        <div class="mask"></div>
        <div class="modal-dialog">
            <div class="modal-header">
                <span>{{title}}</span>
                <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit('submit')">{{sureText}}</a>
                <a href="javascript:;" class="btn" v-if="btnType==2" v-on:click="$emit('cancel')">{{cancelText}}</a>
                <div class="btn-group" v-if="btnType==3">
                    <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{sureText}}</a>
                    <a href="javascript:;" class="btn" v-on:click="$emit('cancel')">{{cancelText}}</a>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>
<script>
export default {
    name:'modal',
    props:{
        //t弹框类型：小 small 中middle 大 large 表单 form
        modalType:{
            type:String,
            defalut:'form'
        },
        //弹框的标题
        title:String,
        //按钮类型：1：确定按钮 2：取消按钮 3：确定取消按钮
        btnType:String,
        sureText:{
            type:String,
            defalut:'确定'
        },
        cancelText:{
            type:String,
            defalut:'取消'
        },
        showModal:Boolean
    }
}
</script>
<style lang="scss">
@import '@/assets/sass/mixin.scss';
@import '@/assets/sass/modal.scss';
@import '@/assets/sass/config.scss';
</style>