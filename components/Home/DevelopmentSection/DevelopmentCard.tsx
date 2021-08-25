import { Row } from 'antd'
import React from 'react'
import { parsePrice } from '../../../helpers/utils.hepler'
import { ResidentialListing } from '../../../types/listing.type'
import _startCase from 'lodash/startCase'
import { WowCard } from '../../Shared/WowCard'
import { Development } from '../../../types/development.types'

export const DevelopmentCard = (props: { development: Development }) => {
  const { development } = props
  return (
    <>
      <WowCard img={development.heroImageUrl}></WowCard>
      <div className="text-3xl font-semibold mt-2">{development.name}</div>
      <div className="text-lg font-light mt-2">
        {development.address}, {development.municipality},{' '}
        {development.province}
      </div>
    </>
  )
}
