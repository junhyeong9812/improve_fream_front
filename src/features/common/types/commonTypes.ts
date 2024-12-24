// homeTop
export interface TopProps {
  select: string;
}

// 배너
export interface BannerItems {
  img: string;
  backgroundColor: string;
}

// shortcut
import { ShortcutItems } from "../../home/types/homeTypes";
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
import { AdvertisementImg } from "../../home/types/homeTypes";
export interface AdvertisementProps {
  advertisement: AdvertisementImg; 
}

// product
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

// product loading
export interface productLoadingProps {
  select: string;
}

// ranking top
export interface rankingTopProps {
  select: string;
}
