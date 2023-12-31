import { LayoutAuthorization } from '@layouts/layout-authorization'
import { EmailCheck } from '@pages/authorization/email-check'
import { PasswordForgot } from '@pages/authorization/password-forgot'
import { PasswordReset } from '@pages/authorization/password-reset'
import { PasswordResetSuccessfully } from '@pages/authorization/password-reset-successfully'
import { SignIn } from '@pages/authorization/sign-in'
import { SignUp } from '@pages/authorization/sign-up'
import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AppRoutesAuthorization: FC = () => {
  return (
    <Routes>
      {/* Base */}
      <Route path="authorization" element={<LayoutAuthorization />}>
        <Route path="email-check" element={<EmailCheck />} />
        <Route path="password-forgot" element={<PasswordForgot />} />
        <Route path="password-reset" element={<PasswordReset />} />
        <Route
          path="password-reset-successfully"
          element={<PasswordResetSuccessfully />}
        />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route index element={<Navigate to="/authorization/sign-in" />} />
        <Route path="*" element={<Navigate to="/authorization/sign-in" />} />
      </Route>
      {/* Rest */}
      <Route index element={<Navigate to="/authorization" />} />
      <Route path="*" element={<Navigate to="/authorization" />} />
    </Routes>
  )
}
