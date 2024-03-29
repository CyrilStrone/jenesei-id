import { i18n } from '@assets/i18n'
import { queryClient } from '@core/query'
import NiceModal from '@ebay/nice-modal-react'
import { LayoutAnimatedTransition } from '@layouts/layout-animated-transition'
import { LayoutApp } from '@layouts/layout-app'
import { ProviderAxios } from '@providers/provider-axios'
import { ProviderLanguage } from '@providers/provider-language'
import { ProviderToast } from '@providers/provider-toast'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { JeneseiTheme } from 'jenesei-react-ui'
import { CookiesProvider } from 'react-cookie'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={JeneseiTheme}>
            <ProviderAxios>
              <BrowserRouter>
                <ProviderLanguage>
                  <ProviderToast>
                    <LayoutAnimatedTransition>
                      <NiceModal.Provider>
                        <LayoutApp />
                      </NiceModal.Provider>
                    </LayoutAnimatedTransition>
                  </ProviderToast>
                </ProviderLanguage>
              </BrowserRouter>
            </ProviderAxios>
          </ThemeProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </CookiesProvider>
  )
}

export default App
