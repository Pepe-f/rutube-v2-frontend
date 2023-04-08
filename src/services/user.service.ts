import { IUser } from '@/types/user.interface'

import { api } from '../api/api'

export const UserService = {
  async getAll() {
    return api.get<IUser[]>('/user')
  },
  async getUser(id: number) {
    return api.get<IUser>(`/user/by-id/${id}`)
  }
}
