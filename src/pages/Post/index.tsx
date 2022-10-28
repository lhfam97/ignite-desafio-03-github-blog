import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostCard } from './PostCard'
import { PostContent } from './PostContent'
import { PostContainer } from './styles'

export interface IPost {
  title: string
  body: string
  created_at: Date
  comments: number
  user: {
    login: string
    html_url: string
  }
}

export const PostPage = () => {
  const [post, setPost] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/lhfam97/ignite-desafio-03-blog-posts/issues/${id}`,
      )

      setPost(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <PostContainer className="container">
      <PostCard post={post} />
      <PostContent content={post.body} />
    </PostContainer>
  )
}
