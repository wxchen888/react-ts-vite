import store from '@/store'

declare module 'react-redux' {
  type RootState = typeof store
}