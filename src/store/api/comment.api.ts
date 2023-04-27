import { IComment, ICommentDto } from '@/types/comment.interface'

import { apiRtk } from '@/store/api/api'

export const commentApi = apiRtk.injectEndpoints({
  endpoints: builder => ({
    createComment: builder.mutation<IComment, ICommentDto>({
      query: body => ({
        url: `/comment`,
        method: 'POST',
        body
      }),
      invalidatesTags: (result, error, { videoId }) => [
        { type: 'Video', id: videoId }
      ]
    })
  })
})
