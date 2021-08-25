import { Button, Input } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { SearchIcon } from '../../icons/SearchIcon'
import { DelayedAutoComplete } from '../Shared/DelayedAutoComplete'

export const ResidentialSearch = () => {
  const handleSearch = (value: string) => {
    console.log(value)
  }
  return (
    <>
      <style jsx>{`
        .searchbar {
          padding: 10px;
          background: white;
          display: flex;
        }
      `}</style>
      <div className="searchbar">
        <DelayedAutoComplete style={{ width: '100%' }} onSearch={handleSearch}>
          <SearchArea size="large" placeholder="Search" />
        </DelayedAutoComplete>
        <Button
          icon={<SearchIcon style={{ margin: 5 }} />}
          type="primary"
          size="large"
        />
      </div>
    </>
  )
}

const SearchArea = styled(Input)`
  border: 0px;
  box-shadow: none;
  &:focus,
  &:hover {
    border: 0px;
    box-shadow: none;
  }
`
