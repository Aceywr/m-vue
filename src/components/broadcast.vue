<template>
    <div class="page">
        <promo :data="promoStr"></promo>
        <div class="card">
            <div class="status-list">
                <div class="pull-refresh-container">
                    <div class="status-editor-bar">
                        <div class="avatar">
                            <img src="https://img1.doubanio.com/icon/user_normal.jpg" alt="未登录">
                        </div>
                        <div class="holder">登录发广播</div>
                        <div class="icon icon-camera"></div>
                        <div class="icon icon-pen"></div>
                    </div>
                    <div class="pull-refresh-loading" :style="op"></div>
                    <ul class="status-list" v-show="show" @touchstart="start($event)" @touchmove="move($event)" @touchend="end($event)" :style="stl">
                        <broad-item v-for="item in getBroad.items" :key="item.id" :data="item"></broad-item>
                        <a href="javascript:;" class="list-link">显示更多广播</a>
                    </ul>
                </div>
            </div>
        </div>
        <download-app></download-app>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import promo from './promo'
import broadItem from './broadItem'
import downloadApp from './downloadApp'
export default {
    name: 'broadcast',
    components: {
        promo,
        broadItem,
        downloadApp
    },
    data(){
        return {
            promoStr: ['打开App, 回复广播'],
            show: false,
            s: 0,
            stl: {
            },
            op: {
                opacity: 0
            },
            isTop:true
        }
    },
    methods: {
        ...mapActions([
            'postBroad',
            'getBroadData'
        ]),
        move(ev) {
            if (this.isTop) {
                let mv = ev.touches[0].clientY - this.s
                if (mv >= 0) {
                    this.stl.transform = 'translateY('+mv+'px)'
                }
                if(mv >= 100) {
                    this.op.opacity = 1
                    this.op.transition = ''
                }
            }
            

        },
        start(ev) {
            if(ev.path.reverse()[0].pageYOffset > 0) {
                this.isTop = false
            }else {
                this.isTop = true
            }
            this.s =  ev.touches[0].clientY
            this.stl.transform = 'translateY(0px)'
            this.stl.transition = ''
            
        },

        end(ev) {
            this.stl.transform = 'translateY(0px)'
            this.op.opacity = 0
            this.op.transition = '800ms linear'
            this.stl.transition = '500ms linear'
        }
    },
    computed: {
        ...mapGetters([
            'getBroad'
        ])
    },
    mounted() {
        
        if(!this.getBroad.show){
            this.postBroad()
          
            this.$watch("getBroad.show", function(){
                this.show = true
            }, {deep:true})
        }else{
            this.show = true
        }
    }
  
}
</script>

<style scoped>
    .card {
        margin: 0 36px;
    }
    .pull-refresh-container {
        position: relative;
    }
    .status-editor-bar {
        position: relative;
        margin: 0 -36px 10px;
        padding: 20px 36px;
        cursor: pointer;
        overflow: hidden;
    }
    .status-editor-bar .avatar {
        width: 80px;
        height: 80px;
        float: left;

    }
    .status-editor-bar .avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .status-editor-bar .holder {
        color: #aaa;
        padding-left: 20px;
        font-size: 30px;
        line-height: 80px;
        float: left;
    }
    .status-editor-bar .icon {
        width: 80px;
        height: 80px;
        padding: 16px;
        margin-right: 20px;
        position: relative;
        float: right;
        box-sizing: border-box;
    }
    .status-editor-bar .icon.icon-camera {
        margin-right: 0;
    }
    .status-editor-bar .icon::after {
        content: '';
        position: absolute;
        width:48px;
        height: 48px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .status-editor-bar .icon.icon-camera::after {
        background-image: url(https://img3.doubanio.com/f/talion/68ab505eac3e7551815c06a5e03a26a6373bb46c/pics/card/ic_status_camera.svg);
    }
    .status-editor-bar .icon.icon-pen::after {
        background-image: url(https://img3.doubanio.com/f/talion/d9ba3fa414721588284167944c70664e685993b1/pics/card/ic_status_pen.svg);
    }
    .status-editor-bar::after {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #e8e8e8;
        content: '';
        position: absolute;
        transform: scaleY(0.5);
        -webkit-transform: scaleY(0.5);
    }
    .list-link {
        display: block;
        padding: 30px 0;
        font-size: 32px;
        line-height: 36px;
        text-align: center;
        cursor: pointer;
    }
    .pull-refresh-loading {
        background: url(https://img3.doubanio.com/f/talion/bf2ef8c5c1a8c84dddfd1135656857e73582c5d8/pics/card/loading_grey.gif) no-repeat;
        background-position: center;
        background-size: 64px;
        width: 100%;
        height: 96px;
        z-index: -1;
        position: absolute;
        left: 0;
        top: 120px;
        opacity: 0;
    }
</style>
