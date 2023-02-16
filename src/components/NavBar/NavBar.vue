<template>
  <div class="cp-NavBar-root">
    <div class="nav-left" @click="handleLeftClick">
      <div class="left-icon" v-if="_leftBtn[0] === 'true'" :class="_leftBtn[1]"></div>
    </div>
    <div class="nav-title" v-if="props.title || props.title === ''">{{ props.title }}</div>
    <div class="nav-right" @click="handleRightClick">
      <div
        class="right-icon-text"
        v-if="_rightBtn[0] === 'true'"
        :style="{ color: _rightBtn[2] ? _rightBtn[2] : '#000' }"
        :class="{ [_rightBtn[1]]: isShowRightIconDOM }"
      >
        {{ !isShowRightIconDOM && _rightBtn[1] }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="NavBar">
import { computed, ref } from 'vue';

interface NavBarProps {
  leftBtn?: 'true||back' | 'default';
  leftBtnFunc?: Function;
  title?: string ;
  rightBtn?: string;
  rightBtnFunc?: Function;
}
const props = withDefaults(defineProps<NavBarProps>() ,{
  title : ''
})
const _leftBtn = ref<string[]>([]);
const _rightBtn = ref<string[]>([]);
const _rightFunctionIconList = ref(['more', 'search', 'personal', 'share']);

const isShowRightIconDOM = computed(() => {
  return _rightFunctionIconList.value.includes(_rightBtn.value[1]);
});

const processBtn = (leftBtn: string) => leftBtn.split('||');

_leftBtn.value = processBtn(props.leftBtn ? props.leftBtn : '||');
_rightBtn.value = processBtn(props.rightBtn ? props.rightBtn : 'true||');

const handleLeftClick = () => {
  props.leftBtnFunc && props.leftBtnFunc();
};
const handleRightClick = () => {
  props.rightBtnFunc && props.rightBtnFunc();
};
</script>

<style scoped lang="less">
.cp-NavBar-root {
  display: flex;
  height: 0.88rem;
  width: 7.5rem;
  font-size: 0.3rem;
  align-items: center;
  background: #ffffff;
  .nav-left,
  .nav-right {
    width: 0.8rem;
    height: 100%;
    line-height: 0.88rem;
    text-align: center;
    .right-icon-text {
      font-weight: 400;
    }
  }
  .nav-title {
    flex: 1;
    height: 100%;
    line-height: 0.88rem;
    text-align: center;
    font-weight: 500;
    color: #000000;
  }
  .left-icon {
    height: 100%;
  }
  .back {
    background: url('@/assets/back.png') no-repeat center center;
    background-size: 0.32rem;
  }
  .share {
    background: url('@/assets/share.png') no-repeat center center;
    background-size: 0.32rem;
  }
}
</style>
