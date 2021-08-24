import { Space } from 'antd'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
import { PAGE } from '../../helpers/router.helper'
import styles from '../../styles/variables.module.css'
import styled from 'styled-components'
import intl from 'react-intl-universal'

export const NavMenuHorizontal = () => {
  const router = useRouter()

  const isFocus = (url: string) =>
    router.pathname === url ? styles.primary_color : ''

  return (
    <>
      <Space size="middle" className="text-lg">
        <Link href={PAGE.residentialtSearchPage.url} passHref>
          <NavItem className={isFocus(PAGE.residentialtSearchPage.url)}>
            {intl.get('nav.Browse Home')}
          </NavItem>
        </Link>
        <Link href={PAGE.developmentSearchPage.url} passHref>
          <NavItem className={isFocus(PAGE.developmentSearchPage.url)}>
            {intl.get('nav.New Development')}
          </NavItem>
        </Link>
      </Space>
    </>
  )
}

const NavItem = styled.a``
