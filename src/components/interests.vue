<template>
    <section class="interests">
        <header><h2>{{title}}</h2></header>
        <div class="section-content">
            <ul>
                <li v-for="item in list1" :key="item.id" :style="{borderColor:item.color}"><a href="javascript:;" :style="{color:item.color}">{{item.name}}</a></li>
                <li class="line"></li>
                <li v-for="item in list2" :key="item.id" :style="{borderColor:item.color}"><a href="javascript:;" :style="{color:item.color}">{{item.name}}</a></li>
            </ul>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:'interests',
    props:['data'],
    data() {
        return {
            list1:this.data.list1,
            list2:this.data.list2,
            title:this.data.title
        }
    },
    mounted() {
        console.log(this.data)
    }
}
</script>

<style scoped>
    .interests li {
        margin: 0 0 16px 16px;
        font-size: 36px;
        display: inline-block;
        border-radius: 18px;
        border:solid 2px;
        vertical-align: middle;
    }
    .interests li.line {
        width: 100%;
        display: block;
        height: 2px;
        border: 0;
        margin: 0;
    }
    .interests a {
        height: 100px;
        line-height:100px;
        padding: 0 112px;
        letter-spacing: 10px;
        overflow: auto;
        display: block;
        text-align: center; 
    }
</style>

