import { ref } from "vue"

export function useTimer (countTime?  : number ) {
  if (typeof countTime === 'string'){
    countTime = Number(countTime)
  }
  countTime = (countTime !== 0 && countTime) ?  countTime : 60

  const timer = ref(0)
  const timerId = ref<undefined | number>(undefined) 
  const start = () => { 
    if (timer.value > 0) return
    timer.value = countTime!
    timerId.value =  setInterval(function () {
      if(timer.value === 0) clearInterval(timerId.value)
      timer.value --
    } , 1000)
  }

  return {timer , start} 
}