export type CarouselProps = {
  children: React.ReactElement[]
  maxVisibleSlides: number
  infiniteLoop?: boolean
  title: string
  href: string
  hasLink: boolean
}