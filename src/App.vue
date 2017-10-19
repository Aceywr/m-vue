<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/Navbar'
import store from './vuex/store'
export default {
  name: 'app',
  components: {
    navbar
  },
  store
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
}
li {list-style: none;}
a {text-decoration: none;color: #42bd56}
#app {
  width: 750px;
  margin: 0 auto;
}

.page {
    padding-top: 94px;
    overflow-x: hidden;
}

section {
        overflow: hidden;
    }
    section header {
        padding: 0 40px;
        padding-top: 20px;
        background-color: #fff;
    }
    section h2 {
        display: inline-block;
        margin: 0 0 15px;
        font-size: 34px;
        font-weight: normal;
    }
    section header a {
        float: right;
        font-size: 28px;
        color: #42bd56;
        
    }
    section .section-content {
        margin-bottom: -40px;
    }
    .item {
        display: inline-block;
        vertical-align: top;
        width: 200px;
        text-align: center;
        margin-left: 18px;
    }
    .item:first-child {
        margin-left: 40px;
    }
    .item> * {
        font-size: 28px;
        white-space: normal;
    }
    .row {
        padding: 30px 0 86px 0;
    }
    .items {
        font-size: 0;
        white-space: nowrap;
        overflow: hidden;
        overflow-x: auto;
        
    }
    .items::-webkit-scrollbar { display: none }
        .interests ul {
        white-space: nowrap;
        overflow-x: auto;
        padding: 30px 30px 86px 30px;
        font-size: 0;
        margin-left: -10px;
    }

</style>
