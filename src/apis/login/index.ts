import request from "@/utils/request";

export function getUserLogin (data : PasswordLoginParams) {
 return request({
  url : '/login/password',
  method : 'post',
  data
 })
}