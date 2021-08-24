import useScrollPosition from '@react-hook/window-scroll'
import { Avatar, Button, Col, Layout as AntdLayout, Row, Space } from 'antd'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import React, { ReactNode, useEffect } from 'react'
import intl from 'react-intl-universal'
import styled from 'styled-components'
import { PAGE } from '../../helpers/router.helper'
import { getToken } from '../../requests/client'
import { useStores } from '../../store'
import { AnimatedIcon } from './AnimatedIcon'
import { LanguageSelector } from './LanguageSelector'
import { MobileNavMenu } from './MobileNavMenu'
import { NavMenuHorizontal } from './NavMenuHorizontal'

const { Content } = AntdLayout

export const Layout = observer(
  (props: { children?: ReactNode; isTransparent?: boolean }) => {
    const { children, isTransparent } = props

    const router = useRouter()
    const bp = useBreakpoint()
    const scrollY = useScrollPosition(60)
    const {
      SettingsStore: { setMobileMenuState$, mobileMenuOpen$ },
      UserStore: { user$, logout$, restoreUser$ }
    } = useStores()

    const onLogout = () => {
      logout$()
      router.push('/login')
    }

    useEffect(() => {
      if (getToken() && !user$) {
        restoreUser$()
      }
    }, [])

    return (
      <>
        <style jsx>{`
          .menu-container {
            height: 64px;
          }
        `}</style>
        <AntdLayout className="w-full h-full">
          <nav>
            <NavBar
              transparent={isTransparent ? !scrollY : false}
              mobile={!bp.lg}
            >
              <Row justify="space-between" align="middle" className="topBar">
                <Col>
                  <div className="menu-container">
                    <Space size="large">
                      <a href={PAGE.homepage.url}>
                        <Image
                          src="https://frontend-static-images.s3.amazonaws.com/logos/manorlead-logo-may-31.svg"
                          alt="..."
                          layout="fixed"
                          height="64"
                          width="200"
                        />
                      </a>

                      {bp.lg && <NavMenuHorizontal />}
                    </Space>
                  </div>
                </Col>
                <Col>
                  {bp.lg ? (
                    <Space size="middle">
                      <Button size="large">{intl.get('shared.Log In')}</Button>
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

                      <LanguageSelector />
                    </Space>
                  ) : (
                    <AnimatedIcon
                      open={mobileMenuOpen$}
                      onClick={() => setMobileMenuState$(!mobileMenuOpen$)}
                    />
                  )}
                </Col>
              </Row>
              <MobileNavMenu />
            </NavBar>
          </nav>
          <AntdLayout>
            <Content>
              <div>{children}</div>
            </Content>
          </AntdLayout>
        </AntdLayout>
      </>
    )
  }
)

interface NavBarProps {
  transparent: boolean
  mobile: boolean
}

const NavBar = styled.div`
  height: 64px;
  position: fixed;
  background: ${(props: NavBarProps) =>
    props.transparent && !props.mobile ? 'transparent' : 'white'};
  color: ${(props: NavBarProps) =>
    props.transparent && !props.mobile ? 'white' : 'black'};
  width: 100%;
  z-index: 2;

  .topBar {
    padding: 0 20px;
  }
`
