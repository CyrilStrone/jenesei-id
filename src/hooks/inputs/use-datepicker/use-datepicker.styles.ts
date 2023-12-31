import {
  FontInterB14,
  FontInterM12,
  FontInterM14,
  FontInterR16,
} from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'

export const UseDatePickerWrapper = styled.div`
  width: 100%;
  & .react-datepicker-wrapper {
    width: 100%;
  }
  &
    .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  &
    .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle {
    &::after {
      left: -30px;
      border-bottom-color: ${theme.colors.default.white};
      border-top-color: ${theme.colors.default.white};
      box-shadow: ${theme.inputs.default.effects.boxShadow};
      bottom: 0px;
      display: none;
    }
    &::before {
      left: -30px;
      border-bottom-color: ${theme.colors.gray['d3d3d3']};
      box-shadow: ${theme.inputs.default.effects.boxShadow};
      bottom: 0px;
      display: none;
    }
  }
  & .react-datepicker__day-names,
  & .react-datepicker__week {
    display: flex;
    justify-content: space-around;
  }
  & .react-datepicker {
    ${FontInterM14};
    border-radius: 24px;
    background: ${theme.colors.default.white};
    border: 1px solid ${theme.colors.gray['d3d3d3']};
    box-shadow: ${theme.inputs.default.effects.boxShadow};
    color: ${theme.colors.gray['737373']};
  }
  & .react-datepicker__header {
    user-select: none;
    background-color: transparent;
  }
  & .react-datepicker__day,
  & .react-datepicker__day--keyboard-selected {
    ${FontInterM14};
    user-select: none;
    display: inline-flex;
    width: 34px;
    height: 34px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    &:hover {
      border-radius: 100px;
      background: ${theme.colors.product['20']};
    }
  }
  & .react-datepicker__day--selected {
    ${FontInterB14};
    border-radius: 100px;
    color: ${theme.colors.default.white};
    background: ${theme.colors.product['100']};
    &:hover {
      color: ${theme.colors.black['80']};
    }
  }
  & .react-datepicker__day--today {
    border-radius: 100px;
    background: ${theme.colors.product['20']};
  }
  & .react-datepicker__day-name {
    ${FontInterM12};
    display: inline-flex;
    width: 34px;
    height: 34px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.black['80']};
  }
`

export const StyledDatePickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 8px;
  align-items: center;
  user-select: none;
  min-width: 300px;
  gap: 8px;
`

export const StyledDatePicker = styled(DatePicker)`
  ${FontInterR16};
  display: flex;
  padding: 16px 20px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  resize: none;
  overflow: hidden;
  outline: none;
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  line-height: 12px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${theme.colors.black['60']};
  background: ${theme.colors.default.white};
  color: ${theme.colors.black['80']};
  box-shadow: ${theme.inputs.default.effects.boxShadow};

  &::placeholder {
    color: ${theme.colors.black['40']};
    font-weight: 700;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    font-weight: 700;
    color: ${theme.colors.black['40']};
  }
  &:focus,
  &:active,
  &:focus-visible {
    outline: 1px solid ${theme.colors.black['100']};
  }
  &*,
  &*::before,
  &*::after {
    box-sizing: border-box;
  }
`
