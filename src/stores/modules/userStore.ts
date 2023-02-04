import type { User } from '@/types/user'
import { defineStore } from 'pinia'

const useUserStore = defineStore('cp-user', {
  state: () => ({
    userInfo: {} as User
  }),
  actions: {
    // 设置用户信息
    setUserInfo(u: User) {
      this.userInfo = u
    },
    // 删除用户信息
    delUserInfo(u: User) {
      this.userInfo = u
    }
  }
})

export default useUserStore
