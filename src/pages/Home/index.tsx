import { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { api } from '../../lib/axios'
import { Post } from './components/Post'
import { SearchFormInput } from './components/SearchFormInput'
import * as zod from 'zod'
import { User, UserProfileCard } from './components/UserProfileCard'
import { HomeContainer, Posts } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'

interface PostProps {
  id: number
  title: string
  updated_at: Date
  number: number
  url: string
  body: string
}

const IssueValidationSchema = zod.object({
  queryText: zod.string(),
})

type IssueFormData = zod.infer<typeof IssueValidationSchema>

export const HomePage = () => {
  const [user, setUser] = useState<User>({} as User)
  const [posts, setPosts] = useState<PostProps[]>([])

  const issueForm = useForm<IssueFormData>({
    resolver: zodResolver(IssueValidationSchema),
    defaultValues: {
      queryText: '',
    },
  })

  async function getUser() {
    const { data } = await api.get('/users/lhfam97')
    setUser(data)
  }

  const getPosts = useCallback(async (query: string = '') => {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:lhfam97/ignite-desafio-03-blog-posts`,
    )

    setPosts(response.data.items)
  }, [])

  const onSubmit = (data: IssueFormData) => {
    getPosts(data.queryText)
  }
  useEffect(() => {
    getUser()
    getPosts()
  }, [])

  return (
    <HomeContainer className="container">
      <UserProfileCard user={user} />

      <FormProvider {...issueForm}>
        <form onSubmit={issueForm.handleSubmit(onSubmit)}>
          <SearchFormInput postsQuantity={posts.length} />
        </form>
      </FormProvider>

      <Posts>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              date={post.updated_at}
              number={post.number}
              // description={post.body}
              description=" Programming languages all have built-in data structures, but these often
              differ from one language to another. This article attempts to list the
              built-in data structures available in JavaScript and what properties
              they have. These can be used to build other data structures. Wherever
              possible, comparisons with other languages are drawn."
            ></Post>
          )
        })}

        {/* <Post
          title="JavaScript data types and data structures"
          date={new Date()}
          description=" Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn."
        ></Post>
        <Post
          title="JavaScript data types and data structures"
          date={new Date()}
          description=" Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn."
        ></Post>
        <Post
          title="JavaScript data types and data structures"
          date={new Date()}
          description=" Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn."
        ></Post>
        <Post
          title="JavaScript data types and data structures"
          date={new Date()}
          description=" Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn."
        ></Post>
        <Post
          title="JavaScript data types and data structures"
          date={new Date()}
          description=" Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn."
        ></Post> */}
      </Posts>
    </HomeContainer>
  )
}
