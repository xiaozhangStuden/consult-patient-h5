interface PasswordLoginParams {
  mobile: string,
  password: string
}

interface ValidateCodeLoginParams {
  mobile: string,
  code : string
}

interface LoginComponentEmits<key , T> {
  sendFormData? : (key , T ) => void
}