import { ParachainId } from '@zenlink-interface/chain'
import type { ethers } from 'ethers'
import type { Limited } from '../entities'
import type { MultiCallProvider } from '../MultiCallProvider'
import { LiquidityProviders } from './LiquidityProvider'
import { UniswapV2BaseProvider } from './UniswapV2Base'

export class ArthSwapProvider extends UniswapV2BaseProvider {
  factory = {
    [ParachainId.ASTAR]: '0xA9473608514457b4bF083f9045fA63ae5810A03E',
  } as const

  initCodeHash = {
    [ParachainId.ASTAR]: '0x613b36de6401276e4d938ad0db4063490e66bb3ab2e4aec17cab78a15ea7a0b6',
  } as const

  public constructor(
    chainDataProvider: ethers.providers.BaseProvider,
    multiCallProvider: MultiCallProvider,
    chainId: ParachainId,
    l: Limited,
  ) {
    super(chainDataProvider, multiCallProvider, chainId, l)
  }

  public getType(): LiquidityProviders {
    return LiquidityProviders.ArthSwap
  }

  public getPoolProviderName(): string {
    return 'ArthSwap'
  }
}