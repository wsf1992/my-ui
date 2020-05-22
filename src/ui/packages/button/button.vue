<template>
    <button 
        @click="handleClick"
        type="button"
        :disabled="_disabled || loading"
        :class="[
            'ym-button', 
            type ? 'ym-button-' + type : '',
            _size ? 'ym-button-' + _size : '',
            {
                'is-plain' : plain,
                'is-round' : round,
                'is-circle': circle,
                'is-disabled' : _disabled,
                'is-loading' : loading
            }
        ]">
        <i :class="icon" v-if="circle"></i>
        <template v-else>
            <i v-if="_icon" :class="_icon"></i>
            <span><slot></slot></span>
        </template>
    </button>
</template>

<script>
/*
    tell：
    1. inject
    2. 
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
    3.autofocus
    4.click
*/
export default {
    name: 'YmButton',
    inject: {
        elForm: {
            default: ''
        },
        elFormItem: {
            default: ''
        }
    },
    props: {
        type: {
            type: String,
            default: 'default'
        },
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        icon: String,
        disabled: Boolean,
        loading: Boolean,
        size: String
    },
    data() {
        return {}
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt)
        }
    },
    computed: {
        _elFormItem() {
            return this.elFormItem || {}
        },
        _elForm() {
            return this.elForm || {}
        },
        _disabled() {
            return this.disabled || this._elFormItem.disabled || this._elForm.disabled
        },
        _size() {
            return this.size || this._elFormItem.size || this._elForm.size
        },
        _icon() {
            if(this.loading) {
                return 'el-icon-loading'
            } else {
                return this.icon
            }
        }
    }    
}
</script>

<style scoped>
.ym-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.ym-button.is-round {
    border-radius: 20px;
    padding: 12px 23px
}
.ym-button.is-circle {
    border-radius: 50%;
    padding: 12px
}
.ym-button.is-loading {
    position: relative;
    pointer-events: none;
}
.ym-button.is-loading::before {
    pointer-events: none;
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: inherit;
    background-color: hsla(0,0%,100%,.35)
}
.ym-button:hover, .ym-button:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff
}
.ym-button:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none
}
.ym-button.is-disabled,.ym-button.is-disabled:focus,.ym-button.is-plain:hover,.ym-button.is-disabled:active {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5
}
.ym-button.is-plain.is-disabled,.ym-button.is-plain.is-disabled:focus,.ym-button.is-plain.is-disabled:hover,.ym-button.is-plain.is-disabled:active {
    background-color: #fff;
    border-color: #ebeef5;
    color: #c0c4cc
}
.ym-button-medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.ym-button-small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}
.ym-button-mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
}
/* primary */
.ym-button-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff
}
.ym-button-primary:focus, .ym-button-primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff
}
.ym-button-primary:active {
   outline: none
}
.ym-button-primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff
}
.ym-button-primary.is-plain:focus, .ym-button-primary.is-plain:hover {
    background: #409eff;
    border-color: #409eff;
    color: #fff
}
.ym-button-primary.is-plain:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
    outline: none
}
.ym-button-primary.is-disabled,.ym-button-primary.is-disabled:focus,.ym-button-primary.is-plain:hover,.ym-button-primary.is-disabled:active {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff
}
.ym-button-primary.is-plain.is-disabled,.ym-button-primary.is-plain.is-disabled:focus,.ym-button-primary.is-plain.is-disabled:hover,.ym-button-primary.is-plain.is-disabled:active {
    color: #8cc5ff;
    background-color: #ecf5ff;
    border-color: #d9ecff
}
/* success */
.ym-button-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a
}
.ym-button-success:focus, .ym-button-success:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff
}
.ym-button-success:active {
    outline: none
}
.ym-button-success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0
}
.ym-button-success.is-plain:focus, .ym-button-success.is-plain:hover {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff
}
.ym-button-success.is-plain:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
    outline: none
}
.ym-button-success.is-disabled,.ym-button-success.is-disabled:focus,.ym-button-success.is-disabled:hover,.ym-button-success.is-disabled:active {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d
}
.ym-button-success.is-plain.is-disabled,.ym-button-success.is-plain.is-disabled:focus,.ym-button-success.is-plain.is-disabled:hover,.ym-button-success.is-plain.is-disabled:active {
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8
}
/* info */
.ym-button-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399
}
.ym-button-info:focus, .ym-button-info:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff
}
.ym-button-info:active {
    outline: none
}
.ym-button-info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6
}
.ym-button-info.is-plain:focus, .ym-button-info.is-plain:hover {
    background: #909399;
    border-color: #909399;
    color: #fff
}
.ym-button-info.is-plain:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
    outline: none
}
.ym-button-info.is-disabled,.ym-button-info.is-disabled:focus,.ym-button-info.is-disabled:hover,.ym-button-info.is-disabled:active {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc
}
.ym-button-info.is-plain.is-disabled,.ym-button-info.is-plain.is-disabled:focus,.ym-button-info.is-plain.is-disabled:hover,.ym-button-info.is-plain.is-disabled:active {
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb
}
/* warning */
.ym-button-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c
}
.ym-button-warning:focus, .ym-button-warning:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff
}
.ym-button-warning:active {
    outline: none
}
.ym-button-warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1
}
.ym-button-warning.is-plain:focus, .ym-button-warning.is-plain:hover {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff
}
.ym-button-warning.is-plain:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
    outline: none
}
.ym-button-warning.is-disabled,.ym-button-warning.is-disabled:focus,.ym-button-warning.is-disabled:hover,.ym-button-warning.is-disabled:active {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e
}
.ym-button-warning.is-plain.is-disabled,.ym-button-warning.is-plain.is-disabled:focus,.ym-button-warning.is-plain.is-disabled:hover,.ym-button-warning.is-plain.is-disabled:active {
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8
}
/* danger */
.ym-button-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c
}
.ym-button-danger:focus, .ym-button-danger:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff
}
.ym-button-danger:active {
    outline: none
}
.ym-button-danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4
}
.ym-button-danger.is-plain:focus, .ym-button-danger.is-plain:hover {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff
}
.ym-button-danger.is-plain:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
    outline: none
}
.ym-button-danger.is-disabled,.ym-button-danger.is-disabled:focus,.ym-button-danger.is-disabled:hover,.ym-button-danger.is-disabled:active {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6
}
.ym-button-danger.is-plain.is-disabled,.ym-button-danger.is-plain.is-disabled:focus,.ym-button-danger.is-plain.is-disabled:hover,.ym-button-danger.is-plain.is-disabled:active {
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2
}
/* text */
.ym-button-text {
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0
}
.ym-button-text:focus,.ym-button-text:hover{
    color: #66b1ff;
    border-color: transparent;
    background-color: transparent
}
.ym-button-text:active {
    color: #3a8ee6;
    background-color: transparent
}
.ym-button-text.is-disabled,.ym-button-text.is-disabled:focus,.ym-button-text.is-disabled:hover,.ym-button-text.is-disabled:active {
    border-color: transparent;
    color: #c0c4cc;
}
</style>