<template>
    <div class="page">
        <div class="card">
            <div v-if="show">
                <group-item v-for="item in getGroup.items" :key="item.id" :data="item"></group-item>
            </div>
        </div>
        <download-app></download-app>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import groupItem from './groupItem'
import downloadApp from './downloadApp'
export default {
    name: 'group',
    components: {
        groupItem,
        downloadApp
    },
    data() {
        return {
            show:false
        }
    },
    methods: {
        ...mapActions([
            'postGroup',
            'getGroupData'
        ])
    },
    computed: {
        ...mapGetters([
            'getGroup'
        ])
    },
    mounted() {
        if(!this.getGroup.show) {
            this.postGroup()
            this.$watch('getGroup.show', function() {
                this.show = true
            },{deep:true})
        }else{
            this.show = true
        }
        
    }
}
</script>

<style lang="scss" scoped>
    .card {
        margin: 0 0 0 36px;
    }
</style>
