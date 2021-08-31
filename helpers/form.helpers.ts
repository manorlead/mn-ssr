import { FormInstance, Rule } from 'antd/lib/form'
import intl from 'react-intl-universal'

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/

export const passwordRule: Rule = () => ({
  validator(rule, value) {
    if (!value || value.match(passwordRegex)) {
      return Promise.resolve()
    }
    return Promise.reject(intl.get('authentication.warning.inputValidPW'))
  }
})

export const confirmPasswordRule: Rule = ({ getFieldValue }) => ({
  validator(rule, value) {
    if (!value || getFieldValue('password') === value) {
      return Promise.resolve()
    }
    return Promise.reject(intl.get('authentication.warning.pwNotMatch'))
  }
})
