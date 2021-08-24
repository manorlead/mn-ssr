import { AutoComplete, AutoCompleteProps } from 'antd'
import _debounce from 'lodash/debounce'
import React, { useCallback } from 'react'

const DEFAULT_WAIT = 300

export const DelayedAutoComplete = (
  props: AutoCompleteProps & { delay?: number }
) => {
  const { onSearch, delay, children, ...rest } = props

  const debouceOnSearch = useCallback(
    _debounce(onSearch ? onSearch : () => {}, delay || DEFAULT_WAIT),
    [onSearch]
  )

  return (
    <AutoComplete {...rest} onSearch={debouceOnSearch}>
      {children}
    </AutoComplete>
  )
}
