// @ts-nocheck
import * as React from 'react'

import { useAccount } from '../hooks'

export const useMetaCRM = () => {
  const { address } = useAccount()

  React.useEffect(() => {
    if (window?.MetaCRMWidget?.manualConnectWallet) {
      window.MetaCRMWidget.manualConnectWallet(address)
    }

    const handleConnectWidget = () => {
      window.MetaCRMWidget.manualConnectWallet(address)
    }
    document.addEventListener('MetaCRMLoaded', handleConnectWidget)

    return () => {
      document.removeEventListener('MetaCRMLoaded', handleConnectWidget)
    }
  }, [address])

  return null
}
