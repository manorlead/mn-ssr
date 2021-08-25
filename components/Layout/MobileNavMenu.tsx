import { observer } from 'mobx-react'
import { useStores } from '../../store'
import styles from '../../styles/variables.module.css'
import styled from 'styled-components'
import React from 'react'
import { Avatar, Button, Divider, Menu, Row, Space } from 'antd'
import Link from 'next/link'
import { PAGE } from '../../helpers/router.helper'
import { useRouter } from 'next/dist/client/router'
import intl from 'react-intl-universal'
import { LanguageSelector } from './LanguageSelector'

export const MobileNavMenu = observer(() => {
  const {
    SettingsStore: { mobileMenuOpen$, setMobileMenuState$ },
    UserStore: { user$, logout$, restoreUser$ }
  } = useStores()

  const router = useRouter()

  const isFocus = (url: string) =>
    router.pathname === url ? styles.primary_color : ''

  const onLogout = () => {
    logout$()
    router.push('/login')
  }
  return (
    <>
      {mobileMenuOpen$ && (
        <MobileNavMenuContainer>
          <Menu
            selectedKeys={[router.pathname]}
            mode="inline"
            onSelect={(key) => {
              router.push(key.key).then(() => {
                setMobileMenuState$(false)
              })
            }}
            selectable
          >
            <Menu.Item key={PAGE.residentialtSearchPage.url}>
              {intl.get('nav.Browse Home')}
            </Menu.Item>
            <Menu.Item key={PAGE.developmentSearchPage.url}>
              {intl.get('nav.New Development')}
            </Menu.Item>
          </Menu>

          <Divider />

          <Row justify="space-between" align="middle">
            <Space size="middle">
              <Button type="text" size="large">
                {intl.get('shared.Log In')}
              </Button>
              <Button type="primary" size="large">
                {intl.get('shared.Sign Up')}
              </Button>

              {user$ && (
                <>
                  <Avatar src={user$.profilePictureUrl} />
                  <div className="text-white">{user$.firstName}</div>
                  <Button onClick={onLogout} type="primary">
                    Logout
                  </Button>
                </>
              )}
            </Space>

            <LanguageSelector />
          </Row>
        </MobileNavMenuContainer>
      )}
    </>
  )
})

const MobileNavMenuContainer = styled.div`
  height: calc(100vh - 64px);
  width: 100%;
  z-index: 3;
  background: white;
`
