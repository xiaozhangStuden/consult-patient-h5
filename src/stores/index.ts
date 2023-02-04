import useUserStore from './modules/userStore'

export default function userStore() {
  return {
    user: useUserStore()
  }
}
