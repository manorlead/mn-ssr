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
      <Space size={30} className="text-lg">
        <div
          className="relative"
          onClick={() => {
            router.push(PAGE.residentialtSearchPage.url)
          }}
        >
          <span
            className={`extending_stroke ${isFocus(
              PAGE.residentialtSearchPage.url
            )}`}
          >
            {intl.get('nav.Browse Home')}
          </span>
        </div>
        <div
          className="relative"
          onClick={() => {
            router.push(PAGE.developmentSearchPage.url)
          }}
        >
          <span
            className={`extending_stroke ${isFocus(
              PAGE.developmentSearchPage.url
            )}`}
          >
            {intl.get('nav.New Development')}
          </span>
        </div>
      </Space>
    </>
  )
}
