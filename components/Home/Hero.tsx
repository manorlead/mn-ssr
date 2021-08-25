import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import React from 'react'
import { SinglePicBanner } from '../Shared/SinglePicBanner'
import { ResidentialSearch } from './ResidentialSearch'

export const Hero = () => {
  const bp = useBreakpoint()
  return (
    <>
      <style jsx>
        {`
          .search-container .content {
            width: ${bp.lg ? '60%' : '100%'};
            padding: 40px 30px;
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
          }
        `}
      </style>
      <SinglePicBanner
        height="90vh"
        url="https://frontend-static-images.s3.amazonaws.com/background/bg-luxury-property.jpg"
      >
        <div className="search-container w-full">
          <div className="content">
            <div className="text-6xl text-white mb-8">Discover Your Home</div>
            <div className="text-2xl text-white mb-5">
              Find new developments and listings in the GTA
            </div>
            <ResidentialSearch />
          </div>
        </div>
      </SinglePicBanner>
    </>
  )
}
