import { IconCardNetwork } from '@assets/icons/icon-card-network'
import { IconCurved } from '@assets/icons/icon-curved'
import { ButtonBorderLong } from '@components/button-border/long'
import { UIUserLine } from '@styles/components'
import {
  FrameRowWrapGap,
  FrameRowGap,
  FrameColumnGap,
} from '@styles/components'
import { SpanInterB16, useCards } from 'jenesei-react-ui'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PaymentsFormListCard: React.FC = () => {
  const { t } = useTranslation('payments', { keyPrefix: 'list-card' })
  const { Cards } = useCards({
    value: [
      {
        cardIssuer: 'Тинькофф',
        cardNumberLast4: '4211',
        cardNetwork: IconCardNetwork.visa(),
        cardIcon: IconCardNetwork.tinkoff(),
        expirationDate: '04/25',
        colorBackground: '#2D2829',
        colorFont: '#FFFFFF',
      },
      {
        cardIssuer: 'Сбербанк',
        cardNumberLast4: '4211',
        cardNetwork: IconCardNetwork.mastercard(),
        cardIcon: IconCardNetwork.sberbank(),
        expirationDate: '04/25',
        colorBackground: '#1EB62F',
        colorFont: '#FFFFFF',
      },
    ],
  })
  return (
    <React.Fragment>
      <UIUserLine />
      <FrameRowGap>
        <FrameColumnGap>
          <SpanInterB16>{t('title-1')}</SpanInterB16>
          <FrameRowWrapGap>{Cards}</FrameRowWrapGap>
        </FrameColumnGap>
      </FrameRowGap>
      <ButtonBorderLong
        title={t('buttons.add')}
        type="border"
        icon={IconCurved.Plus}
      />
    </React.Fragment>
  )
}
