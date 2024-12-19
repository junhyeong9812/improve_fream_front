export interface BannerItems {
  img: string;
  backgroundColor: string;
}

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