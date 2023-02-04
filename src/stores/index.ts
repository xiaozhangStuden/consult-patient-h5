import useUserStore from './modules/userStore';

export function userStore() {
  return {
    user: useUserStore()
  };
}
