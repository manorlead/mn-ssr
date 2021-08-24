import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'
import _debounce from 'lodash/debounce'
import React, { useCallback } from 'react'

const DEFAULT_WAIT = 300

export const DelayedInput = (props: InputProps & { delay?: number }) => {
  const { onChange, delay, ...rest } = props

  const debouceOnChange = useCallback(
    _debounce(onChange ? onChange : () => {}, delay || DEFAULT_WAIT),
    [onChange]
  )

  return <Input {...rest} onChange={debouceOnChange} />
}
