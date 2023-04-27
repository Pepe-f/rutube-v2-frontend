import { IVideo } from '@/types/video.interface'

import { api } from '../api/api'

export const VideoService = {
  async getAll() {
    return api.get<IVideo[]>('/video')
  },
  async getMostPopular() {
    return api.get<IVideo[]>('/video/most-popular')
  }
}
