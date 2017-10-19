<template>
  <div class="banner">
    <div class="tag"><i class="material-icons">movie</i><span>Movie</span></div>
    <div class="tag"><i class="material-icons">book</i><span>Book</span></div>
    <div class="tag"><i class="material-icons">library_music</i><span>Muisc</span></div>
  </div>
</template>


<script>
export default {
    name: 'banner'

}
</script>

<style scoped>
  .banner {
    position: fixed;
    border-top: 1px solid #ccc;
    height: 120px;
    bottom: 0;
    width: 750px;
    display: flex;
    justify-content: space-around;
    color: #333;
    background-color: #fff;
  }

  .tag {
    display: inline-flex;
    line-height: 120px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    width: 250px;
  }
  .tag:active {
    background-color: #333;
    color: #fff;  
  }
  .tag span{
    line-height: normal;
  }
</style>
