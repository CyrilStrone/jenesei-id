import {
  ServicesButtonsContainer,
  ServicesListContainer,
  ServicesListItemContainer,
  ServicesProps,
  ServicesTitleContainer,
} from '.'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorderLong } from '@components/button-border/long'
import { FrameAuthorizationWrapper } from '@styles/components'
import {
  StyledInterB32,
  StyledInterR16,
  StyledInterSB14,
} from '@styles/fonts/inter'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Services: FC<ServicesProps> = () => {
  const { t } = useTranslation('services')

  return (
    <FrameAuthorizationWrapper>
      <ServicesTitleContainer>
        <StyledInterB32>
          {t('pages.title-big') + 'Stassie Strone'}
        </StyledInterB32>
        <StyledInterR16>{t('pages.title-min')}</StyledInterR16>
      </ServicesTitleContainer>
      <ServicesListContainer>
        <ServicesListContainer>
          <ServicesListItemContainer
            target="_blank"
            rel="noopener noreferrer"
            to={'https://task.jenesei.ru'}
          >
            <LogoServices.JeneseiTask.Default />
            <StyledInterSB14>{t('JeneseiTask.name')}</StyledInterSB14>
          </ServicesListItemContainer>
          <ServicesListItemContainer to={`/user/personal-info`}>
            <LogoServices.JeneseiID.Default />
            <StyledInterSB14>{t('JeneseiID.name')}</StyledInterSB14>
          </ServicesListItemContainer>
        </ServicesListContainer>
      </ServicesListContainer>
      <ServicesButtonsContainer>
        <ButtonBorderLong
          type="border"
          title={t('pages.logout')}
          // onClick={() => setProfile({ id: '' })}
        />
      </ServicesButtonsContainer>
    </FrameAuthorizationWrapper>
  )
}