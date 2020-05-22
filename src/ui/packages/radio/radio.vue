<template>
<div class="dis-i-b">
    <label>
        <input v-bind="$attrs" type="radio" :value="label" :checked="checked" @click="change">
        <slot name="default"></slot>
    </label>
</div>
</template>

<script>
export default {
    // 关于 name的问题，英文有 对于select 变量的 computed 所以这里可以忽略 name的因素
    name: 'YmRadio',
    inheritAttrs: false,
    model: {
        prop: 'select',
        event: 'select'
    },
    props: {
        label: {
            required: true,
            type: [String,Number,Boolean],
            default: ''
        },
        select: {
            required: true,
            type: [String,Number,Boolean],
            default: ''
        }
    },
    data() {
        return {

        }
    },
    computed: {
        checked() {
            if(this.select === '') {
                return false
            } else {
                return this.label === this.select
            }
        }
    },
    methods: {
        change() {
            this.$emit('select',this.label)
            this.$nextTick(() => {
                this.$emit('change', this.label)
            })
        }
    },
    created() {
        console.log(this)
    }

}
</script>

<style scoped lang="scss">
.dis-i-b {
    display: inline-block;
}
</style>