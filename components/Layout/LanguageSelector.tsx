import { Dropdown, Menu } from 'antd'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import styled from 'styled-components'

export const LanguageSelector = () => {
  const router = useRouter()

  const switchLang = (language: string) => {
    router.replace(
      { pathname: router.pathname, query: router.query },
      undefined,
      {
        shallow: true,
        locale: language
      }
    )
  }

  const LocaleName: { [key: string]: string } = {
    'en-US': 'English',
    'zh-CN': '中文'
  }

  const menu = (
    <Menu
      selectable
      onSelect={(key) => {
        switchLang(key.key)
      }}
      selectedKeys={[LocaleName[router.locale || 'en-US']]}
    >
      <Menu.Item key="en-US">English</Menu.Item>
      <Menu.Item key="zh-CN">中文</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <LangDisp>{LocaleName[router.locale || 'en-US']}</LangDisp>
    </Dropdown>
  )
}

const LangDisp = styled.div`
  padding: 0 10px;
  user-select: none;
`
