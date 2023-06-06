import store from '@/store'

declare module 'react-redux' {
  type RootState = ReturnType<typeof store.getState>
}