import React from 'react'
import { SinglePicBanner } from '../Shared/SinglePicBanner'
import { ResidentialSearch } from './ResidentialSearch'

export const Hero = () => {
  return (
    <>
      <style jsx>
        {`
          .search-container {
            width: 1200px;
          }
          .search-container .title {
            margin-bottom: 3rem;
          }
          .search-container .subtitle {
            margin-bottom: 2rem;
          }
        `}
      </style>
      <SinglePicBanner
        height="90vh"
        url="https://frontend-static-images.s3.amazonaws.com/background/bg-luxury-property.jpg"
      >
        <div className="search-container">
          <div className="text-6xl white title">Discover Your Home</div>
          <div className="text-3xl white subtitle">
            Find new developments and listings in the GTA
          </div>
          <ResidentialSearch />
        </div>
      </SinglePicBanner>
    </>
  )
}
