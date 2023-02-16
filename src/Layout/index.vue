<template>
  <div class="Layout-root">
    <RouterView></RouterView>
    <div class="App-Tabs-container">
      <div class="App-Tabs">
        <div v-for="item in appTabs" :key="item.id" class="item" @click="handleTabItemClick(item)">
        <div class="item-text" :style="{color : item.id === currentId ? '#16c2a3' : ''}">{{item.value}}</div>
          <div class="icon-container"><img :src="item.id === currentId ?  item.activeIcon : item.icon " alt=""></div>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HealthActiveIcon from '@/assets/homeIcon/encyclopedias-active.png'
import HealthDetaultIcon from '@/assets/homeIcon/encyclopedias-default.png'
import homeActivetIcon from '@/assets/homeIcon/home-active.png'
import homeDefalutIcon from '@/assets/homeIcon/home-default.png'
import MyHomePageActivetIcon from '@/assets/homeIcon/mine-active.png'
import MyHomePageDefaultIcon from '@/assets/homeIcon/mine-default.png'
import MNActiveIcon from '@/assets/homeIcon/notice-active.png'
import MNDefaultIcon from '@/assets/homeIcon/notice-default.png'
import { contanceRouterPath } from '@/contance'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
interface TabItem {
  id : number,
  icon : string
  activeIcon : string
  value : string
  path :string
}
const currentId = ref(1)
const appTabs = ref([
  {
    id : 1,
    icon : homeDefalutIcon,
    activeIcon : homeActivetIcon,
    value : '首页',
    path : contanceRouterPath.HOME_PAGE_PATH
  },
  {
    id : 2,
    icon : HealthDetaultIcon,
    activeIcon : HealthActiveIcon,
    value : '健康百科',
    path : contanceRouterPath.HEALTHENCYCLOPEDIA_PAGE_PATH
  },
  {
    id : 3,
    icon : MNDefaultIcon,
    activeIcon : MNActiveIcon,
    value : '消息通知',
    path : contanceRouterPath.MESSAGENOTICE_PAGE_PATH
  },
  {
    id : 4,
    icon :  MyHomePageDefaultIcon,
    activeIcon : MyHomePageActivetIcon,
    value : '我的',
    path : contanceRouterPath.PROFILE_PAGE_PATH
  }
 ])
 const router = useRouter()

 const handleTabItemClick = (item : TabItem) => {
    currentId.value = item.id
    router.push(item.path)
    
 }

</script>

<style scoped lang="less">
.Layout-root{
  height: 100vh;
  .App-Tabs-container{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    .App-Tabs{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 1.02rem;
    padding:  0 0.3rem;
    box-sizing: border-box;
    .item{
      text-align: center;
        .item-text{
        font-size: 0.2rem;
        font-weight: 400;
        text-align: CENTER;
        color: #6f6f6f;
        line-height: 0.2rem;
      }
      .icon-container{
        width: 0.34rem;
        height: 0.36rem;
        margin: 0.14rem auto;
        img{
          height: 100%;
          width: 100%;
          vertical-align: top;
        }
      }
    }
  }
  }
  
}

</style>
