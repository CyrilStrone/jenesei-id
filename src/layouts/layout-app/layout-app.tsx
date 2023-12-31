import { LayoutAppWrapper } from '.'
import { AppRoutesUser, AppRoutesAuthorization } from '@core/router'
import { useProfile } from '@providers/profile-provider'
import React from 'react'

/**
 * The wrapper of the entire application
 */
export const LayoutApp: React.FC = () => {
  const { id } = useProfile()

  return (
    <LayoutAppWrapper>
      {id ? <AppRoutesUser /> : <AppRoutesAuthorization />}
    </LayoutAppWrapper>
  )
}
