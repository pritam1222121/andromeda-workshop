import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Uniswap",
    chainId: "galileo-1",
   createdDate: "2025-07-30T20:04:43.130Z",
  modifiedDate: "2025-07-30T20:04:43.130Z",
    id: "andromeda",
    collections: [
        {
            exchange:
               "andr1wdm9z3t3e6ky5zy3llem7fap5v6c03g8k6jkhmftkwardq58l39sefrqdx",
            cw20: "andr1znuwhw57ycqum2lvazev6md5n4yrn8jjx9uwut6dkz8hnlqctn2qlqdd0q",
            name: "Uniswap",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
