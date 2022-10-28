import { PostContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
interface PostProps {
  title: string
  description: string
  number: number
  date: Date
}

export const Post = ({ title, date, number, description }: PostProps) => {
  return (
    <PostContainer to={`/post/${number}`}>
      <div>
        <h3>{title}</h3>
        <span>
          {formatDistanceToNow(new Date(date), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{description}</p>
    </PostContainer>
  )
}
