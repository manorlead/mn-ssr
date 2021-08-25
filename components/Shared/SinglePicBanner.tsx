import { ReactNode } from 'react'
import styled from 'styled-components'

import { ModuleContainer } from './ModuleContainer'
import Image from 'next/image'

export const SinglePicBanner = (props: {
  url: string
  children?: ReactNode
  height?: string
  filterColor?: string
}) => {
  const { url, children, height, filterColor } = props

  return (
    <>
      <div className="relative">
        <FilteredBanner height={height} filterColor={filterColor}>
          <Image src={url} layout="fill" objectFit="cover" alt="banner" />
        </FilteredBanner>
        <ModuleContainer
          containerStyle={{
            display: 'flex',
            justifyContent: 'center',
            zIndex: 1,
            maxWidth: 1600
          }}
          containerClassName="px-6"
          backgroundStyle={{ height: height }}
        >
          {children}
        </ModuleContainer>
      </div>
    </>
  )
}

interface FilterProps {
  filterColor?: string
  height?: string
}

const FilteredBanner = styled.div`
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: ${(props: FilterProps) => props.filterColor};
    opacity: 0.5;
    height: ${(props: FilterProps) => props.height};
  }
`
