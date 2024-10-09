import { Youtube, Facebook, Instagram, Twitter, Video, PlaySquare, Music, FileText, CloudIcon } from 'lucide-react'

export const Icons = {
  Youtube,
  Facebook,
  Instagram,
  Twitter,
  TikTok: Video,
  Vimeo: PlaySquare,
  SoundCloud: Music,
  Dropbox: CloudIcon,
  GoogleDrive: FileText,
}

export type IconName = keyof typeof Icons