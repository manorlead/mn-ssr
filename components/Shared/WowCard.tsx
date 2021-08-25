import React, { ReactNode } from 'react'
import styled from 'styled-components'

export const WowCard = (props: {
  img: string
  children?: ReactNode
  className?: string
  onClick?: () => void
}) => {
  const { img, children, className, onClick } = props
  return (
    <Card className={className} onClick={onClick}>
      <div
        className="bg"
        style={{
          background: `linear-gradient(rgba(20, 20, 20, 0) 50%,rgba(20, 20, 20, 0.8)),url(${img}) center/cover`
        }}
      ></div>
      {children}
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  cursor: pointer;
  overflow: hidden;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }
  .bg:hover {
    transform: scale(1.1);
  }
`
