import { Col, Row } from 'antd'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import intl from 'react-intl-universal'
import styled from 'styled-components'
import useSWR from 'swr'
import { PAGE } from '../../../helpers/router.helper'
import { ThinBigRight } from '../../../icons/ThinBigRight'
import { getDevelopments } from '../../../requests/development'
import { getResidentialListings } from '../../../requests/residential'
import { Line } from '../../Shared/Line'
import { ModuleContainer } from '../../Shared/ModuleContainer'
import { DevelopmentCard } from './DevelopmentCard'

export const DevelopmentSection = () => {
  const router = useRouter()
  const { data, error } = useSWR(
    'priority:ASC',
    (orderBy) =>
      getDevelopments({
        count: 6,
        orderBy
      }),
    {
      revalidateOnFocus: false
    }
  )

  return (
    <>
      <ModuleContainer containerClassName="py-10 px-4">
        <Line className="mb-5" />
        <Row justify="space-between" align="middle" className="mb-5">
          <div>
            <h1 className="text-3xl mb-5 font-bold">
              {intl.get('home.New Developments')}
            </h1>
            <div className="text-xl font-light">
              {intl.get('home.dev-subtitle')}
            </div>
          </div>
        </Row>
        {data && (
          <Row gutter={[16, 16]}>
            {data.developments.map((r, i) => {
              if (i === 0) {
                return (
                  <Col key={r.id} xs={24} sm={12} md={12} lg={12}>
                    <DevelopmentCard development={r} />
                  </Col>
                )
              }
              return (
                <Col key={r.id} xs={24} sm={12} md={12} lg={6}>
                  <DevelopmentCard development={r} />
                </Col>
              )
            })}
            <Col xs={24} sm={12} md={12} lg={6}>
              <MoreHoverCard
                className={`h-full w-full bg_primary`}
                onClick={() => router.push(PAGE.developmentSearchPage.url)}
              >
                <div
                  className={`more-card-text text-4xl secondary_color`}
                  style={{ width: '50%' }}
                >
                  {intl.get('home.view-dev')}
                </div>
                <div className="more-card-arrow">
                  <ThinBigRight className="secondary_color" />
                </div>
              </MoreHoverCard>
            </Col>
          </Row>
        )}
      </ModuleContainer>
    </>
  )
}

const MoreHoverCard = styled.div`
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.3s, border-color 0.3s;
  &:hover {
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
      0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  }

  .more-card-text {
    padding: 20px;
    font-weight: lighter;
  }
  .more-card-arrow {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 20px;
  }
`
