import React from 'react'
import { ModuleContainer } from '../Shared/ModuleContainer'

export const Footer = () => {
  return (
    <ModuleContainer className="bg-gray-200" containerClassName="p-4">
      <div className="mb-5">
        ©{new Date().getFullYear()} Manorlead Group Inc., Brokerage. All Rights
        Reserved. By accessing the site, you agree to the Terms of Use and
        Privacy Policy.
      </div>
      <div>
        The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled
        by The Canadian Real Estate Association (CREA) and identify real estate
        professionals who are members of CREA. The trademarks MLS®, Multiple
        Listing Service® and the associated logos are owned by The Canadian Real
        Estate Association (CREA) and identify the quality of services provided
        by real estate professionals who are members of CREA. Used under
        license.
      </div>
    </ModuleContainer>
  )
}
