<template>
  <div>
    <section>
      <header>
        <h2>{{data.name}}</h2>
      </header>
      <div class="section-content">
        <ul class="group-list">
          <li v-for="item in data.groups" :key="item.id">
            <a href="javascript:;" class="group">
              <div class="group-meta">
                <img :src="item.avatar" alt="" class="group-icon">
                <span class="group-name">{{item.name}}</span>
                <span class="group-member">{{item.member_count+"人"}}</span>
              </div>
              <div class="group-topic">
                <span class="topic-title">{{item.desc_abstract}}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="more-group"><a href="javascript:;">更多相关小组</a></section>
  </div>
</template>

<script>
  export default {
      name: 'groupItem',
      props: ['data']

  }

</script>

<style lang="scss" scoped>
    section:first-child {
        padding-top: 28px;
    }
    section {
        margin-bottom: 60px;
        h2 {
            display: inline-block;
            padding: 0 24px;
            font-size: 36px;
            color: #111;
            padding-left: 0;
        }
        header {
            padding: 0;
        }
        .section-content {
            margin: 0;
        }
    }
    .group-list>li {
        position: relative;
    }
    .group-list>li::after {
        content: '';
        left: 0;
        bottom: 0;
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: #e8e8e8;
        transform: scaleY(0.5);
    } 
    .group {
        font-size: 36px;
        display: block;
        padding-right: 36px;
        padding-top: 30px;
        padding-bottom: 30px;
        color: #111;
        .group-meta {
            display: flex;
            align-items: center;
            .group-icon {
                border-radius: 6px;
                width: 80px;
                height: 80px;
                border: 2px solid #f1f1f1;
            }
            .group-name {
                flex: 1;
                padding-left: 20px;
                padding-right: 20px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .group-member {
                color: #ccc;
                font-size: 30px;
            }
        }
        .group-topic {
            margin-top: 20px;
            font-size: 30px;
            color: #aaa;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .more-group {
        font-size: 30px;
        padding: 24px 0;
        text-align: center;
        position: relative;
        margin-top: -60px;
        padding-right: 36px;
    }
    .more-group::after {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 100%;
        background-color: #e8e8e8;
        content: '';
        transform: scaleY(0.5);
    }
</style>
