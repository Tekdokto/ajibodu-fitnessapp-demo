// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

export type ActivityLayoutType = {
  id: string | undefined
}

export type ActivitiesType = {
  id: number
  title: string
  number: number
  level: number
  avatarColor?: ThemeColor
}
