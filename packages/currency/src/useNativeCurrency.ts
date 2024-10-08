import { ParachainId } from '@zenlink-interface/chain'
import { useMemo } from 'react'

import { Native } from './Native'

export function useNativeCurrency({ chainId = ParachainId.MANTA_POLKADOT }: { chainId?: number }): Native {
  return useMemo(() => Native.onChain(chainId), [chainId])
}
