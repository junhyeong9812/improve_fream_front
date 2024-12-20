// 배너
export interface BannerItems {
  img: string;
  backgroundColor: string;
}

// shortcut
export interface ShortcutItems {
  img: string;
  name: string;
}
export interface ShortcutItemWrapProps {
  shortcutList : ShortcutItems[];
}
export interface ShortcutItemProps {
  shortcut: {
    img: string;
    name: string;
  };
}

// 광고
export interface AdvertisementImg {
  img: string;
  backgroundcolor: string;
}
export interface AdvertisementProps {
  advertisement: AdvertisementImg; 
}
export interface AdvertisementNum {
  num: number
}

// product
export type productType = string;
export interface productWrapProps {
  productCategory: string;
}
export interface productInfo {
  transaction: string;
  img: string;
  backgroundcolor: string;
  brand: string;
  name: string;
  price: string;
  buy: boolean;
  coupon: boolean;
  earn: boolean;
}
export interface productProps {
  product: productInfo;
}