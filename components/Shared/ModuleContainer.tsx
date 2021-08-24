import { CSSProperties } from 'react'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import styled from 'styled-components'

interface IProps {
  children?: React.ReactNode
  id?: string
  backgroundStyle?: CSSProperties
  containerStyle?: CSSProperties
  className?: string
  containerClassName?: string
  onClick?: () => void
}
export const ModuleContainer = (props: IProps) => {
  const {
    children,
    id,
    backgroundStyle,
    containerStyle,
    className,
    containerClassName,
    onClick
  } = props
  const bp = useBreakpoint()
  return (
    <Background
      style={backgroundStyle}
      id={id}
      className={className}
      onClick={onClick}
    >
      <Container style={containerStyle} className={containerClassName}>
        {children}
      </Container>
    </Background>
  )
}

const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`
