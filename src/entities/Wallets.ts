import { Networks, Network } from "./Networks"

export type Wallet = {
  name: string
  address: string
  network: Network
}

enum WalletNames {
  DAO = "CityDAO Treasury",
  GUILD = "CityDAO Guild",
}

const WALLETS: Wallet[] = [
  { name: WalletNames.DAO, address: "0x60e7343205c9c88788a22c40030d35f9370d302d", network: Networks.getEth() },
]

export class Wallets {
  public static getAll(): Wallet[] {
    return WALLETS
  }

  public static getAddresses(): string[] {
    return WALLETS.map(w => w.address)
  }
}