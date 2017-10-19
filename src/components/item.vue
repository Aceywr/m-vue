<template>
  <a href="">
    <div class="item-poster" v-bind:style="img"></div>
    <span class="item-title">{{title}}</span>
    <div class="item-rating">
      <div class="rank">
        <div v-if="rating">
          <span class="rating-stars">
            <span class="rating-star" v-for="item in stars()" :key="item.id" v-bind:style="item"></span>
          </span>
          <span>{{ratingValue()}}</span>
        </div>
        <span v-else-if="data.price">{{"¥ " + data.price}}</span>
        <span v-else>暂无评分</span>
      </div>

    </div>
  </a>
</template>

<script>
  export default {
    name: 'item',
    props: ['data'],
    data() {
      return {
        img: {
          backgroundImage: 'url(' + this.data.cover.url + ')'
        },
        title: this.data.title,
        rating: this.data.rating,
        full: {
          backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==)'
        },
        gray: {
          backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=)'
        }

      }
    },
    methods: {
      stars() {
        let arr = []
        let f = this.rating.value / 2 - 1
        for (let i = 0; i <= f; i++) {
          arr[i] = this.full
        }
        for (let i = 4; i > f; i--) {
          arr[i] = this.gray
        }
        return arr
      },
      ratingValue() {
        if(this.rating.value%1 == 0) {
          return this.rating.value+".0"
        }else{
          return this.rating.value
        }
      }

    },
    mounted() {
    //   console.log(this.data)
    }
  }

</script>

<style scoped>
  .item-poster {
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
  }

  .item-poster::before {
    content: "";
    float: left;
    margin-top: 142.8%;
  }

  .item-title {
    display: block;
    color: #111;
    margin-top: 20px;
    line-height: 36px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-rating {
    color: #aaa;
    line-height: 36px;
    margin-top: 12px;
    font-size: 28px;
  }

  .rating-stars {
    display: inline-block;
    vertical-align: center;
  }

  .rating-stars .rating-star {
    display: inline-block;
    margin-right: 1px;
    background-color: transparent;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
  }

</style>
