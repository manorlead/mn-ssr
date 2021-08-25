import { Row } from 'antd'
import React from 'react'
import { parsePrice } from '../../../helpers/utils.hepler'
import { ResidentialListing } from '../../../types/listing.type'
import _startCase from 'lodash/startCase'
import { WowCard } from '../../Shared/WowCard'

export const ListingCard = (props: { listing: ResidentialListing }) => {
  const { listing } = props
  return (
    <>
      <style jsx>{`
        .content {
          width: 100%;
          padding: 10px;
          position: absolute;
          bottom: 0;
        }
      `}</style>
      <WowCard img={listing.images[0]}>
        <div className="content text-white">
          <div className="text-3xl font-semibold">{`$${parsePrice(
            listing.price
          )}`}</div>
          <div>{_startCase(listing.streetAddress)}</div>
          <Row justify="space-between">
            <div>{listing.city}</div>
            <div>
              {parseInt(listing.bedrooms)} bed | {parseInt(listing.baths)} bath
            </div>
          </Row>
        </div>
      </WowCard>
    </>
  )
}
