<template>
    <section class="types">
        <header><h2>分类浏览</h2></header>
        <div class="section-content">
            <ul class="type-list">
                <li v-for="item in list" :key="item.id"><a href="">{{item}}<span></span></a></li>
                <li v-if="last()"><a href=""></a></li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    name:'types',
    props:['data'],
    data() {
        return {
            list:this.data.types
        }
    },
    methods: {
        last() {
            if(this.list.length % 2 == 0) {
                return false
            }else{
                return true
            }
        }
    }
}
</script>

<style scoped>
    .types {
        margin-right: -50px;

    }
    .types .section-content {
        margin-left: 36px;
        margin-bottom: 0;
    }
    .type-list {
        padding: 20px 0 32px;
        color: #eee;
        font-size: 28px;
        overflow: hidden;
    }
    .type-list li {
        border-top: solid 2px #eee;
        border-right: solid 2px #eee;
        float: left;
        padding-right: 40px;
        height: 95px;
    }
    .type-list li:nth-child(even) {
        border-right: none;
        padding-left: 40px;
    }
    .type-list a {
        width:300px;
        float: left;
        display: inline-block;
        line-height: 95px;
    }
    .type-list span {
        color: #eee;
        float: right;
        font-weight: bold;
        display: inline-block;
        border-right: solid 2px #ccc;
        border-bottom: solid 2px #ccc;
        width: 18px;
        height: 18px;
        transform: rotate(-45deg);
        margin-top: 37.5px;
    }
    .type-list li:last-child, .type-list li:nth-last-child(2) {
        border-bottom: solid 2px #eee;
    }
</style>

