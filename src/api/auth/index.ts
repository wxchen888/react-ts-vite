import userMenuList from './mock/user-menu-list'
import adminMenuList from './mock/admin-menu-list'

export const getAuthMenus = (user: 'user' | 'admin') => {
  if (user === 'user') {
    return new Promise((resolve) => {
      const res = userMenuList
      setTimeout(() => {
        resolve(res)
      }, 500)
    })
  } else {
    return new Promise((resolve) => {
      const res = adminMenuList
      setTimeout(() => {
        resolve(res)
      }, 500)
    })
  }
}