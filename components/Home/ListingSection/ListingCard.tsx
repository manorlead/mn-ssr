import { Row } from 'antd'
import React from 'react'
import { ResidentialListing } from '../../../types/listing.type'

export const ListingCard = (props: { listing: ResidentialListing }) => {
  const { listing } = props
  return (
    <>
      <style jsx>{`
        .home-listing-card {
          position: relative;
          width: 100%;
          height: 220px;
          background: linear-gradient(
              rgba(20, 20, 20, 0) 50%,
              rgba(20, 20, 20, 0.8)
            ),
            url(${listing.images[0]});
          background-size: cover;
        }
        .home-listing-card .content {
          width: 100%;
          padding: 10px;
          position: absolute;
          bottom: 0;
        }
      `}</style>
      <div className="home-listing-card">
        <div className="content white">
          <div>{listing.price}</div>
          <div>{listing.streetAddress}</div>
          <Row justify="space-between">
            <div>{listing.city}</div>
            <div>
              {listing.bedrooms} bed | {listing.baths} bath
            </div>
          </Row>
        </div>
      </div>
    </>
  )
}
