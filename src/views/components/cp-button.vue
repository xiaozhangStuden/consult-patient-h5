<template>
  <div class="bl-Button" ref="buttonRef">
    <div class="btn-Container" @click="handleButtonClick">
        <div :class="props.size" class="button"><slot></slot></div>
    </div>
  </div>
</template>

<script lang="ts" setup name="cp-button">
import { defineEmits } from 'vue';

interface ButtonEmitsEvent {
  (EventName : 'click') : void
}

const emits = defineEmits<ButtonEmitsEvent>()
interface ButtonProps {
  bgcColor? : string,
  size? : 'small' | 'large' | 'middle',
  textColor? : string
  
}
const props = withDefaults(defineProps<ButtonProps>(),{
  size : 'small',
  bgcColor : '#fafafa',
  textColor : '#D9DBDE'
})

const handleButtonClick = () => {
  emits('click')
}


</script>

<style scoped lang="less">
.bl-Button{
  .btn-Container{
    .button{
      font-size: 0.32rem;
      text-align: center;
      line-height: 0.88rem;
      border-radius: 0.44rem;
      background: v-bind('props.bgcColor');
      color : v-bind('props.textColor')
    }
    .large{
        width: 6.9rem;
        height: 0.88rem;
        transition: all .5s;
    }
    .small{
      width: 2rem;
      height: 0.88rem;
    }
    .middle{
        width: 3.4rem;
        height: 0.88rem;
        transition: all .5s;
    }
  }
}
</style>
