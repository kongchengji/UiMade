<template>
    <div class="wzc_collapse" :style="styleVar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"wzc_collapse",
    components: {},
    props: {
        width: {
            type: String,
            default: '100%'
        },
        initCurrent : {
            type: String,
            default: ''
        },
        accordion : {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            clickArray : [],
        };
    },
    created() {},
    mounted() {
        for(let i = 0; i < this.$children.length; i++) {
            if ( this.initCurrent == this.$children[i].name ) {
                this.$children[i].currentIsShow = true;
            }
        }

    },
    watch: {},
    computed: {
        styleVar() {
            return {
                '--wzc-collapse-width': this.width ,
            }
        }
    },
    methods: {
        sonVueClick ( obj ) {
            if ( this.accordion ) {
                for(let i = 0; i < this.$children.length; i++) { 
                    let index = this.clickArray.indexOf(this.$children[i].name);
                    if ( obj.name != this.$children[i].name ) {
                        this.$children[i].currentIsShow = false;
                        if (index != -1)
                            this.clickArray.splice(index, 1)
                    } else {
                        if ( index == -1 )
                            this.clickArray.push( obj.name );
                    }  
                }
            } else {
                if (obj.flag) {
                    this.clickArray.push( obj.name )
                } else {
                    let index = this.clickArray.indexOf(obj.name);
                    if (index == -1)
                        this.clickArray.splice(index, 1)
                }
            }
            this.$emit('change', this.clickArray);
        },
    },
};
</script>
<style scoped>
   .wzc_collapse {
       width: var(--wzc-collapse-width);
   }
</style>