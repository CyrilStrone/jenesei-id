import styled from 'styled-components'

export const LayoutUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
`

export const LayoutUserContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  height: 100%;
  overflow: auto;
`

export const LayoutOutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  min-height: max(calc(100dvh - 60px), 488px);
  border-left: 2px solid ${(props) => props.theme.colors.black['5']};
  overflow: overlay;
  @media (max-width: ${(props) => props.theme.screens.mobile.width}) {
    border-left: 0px;
  }
`
