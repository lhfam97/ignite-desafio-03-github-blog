import {
  Avatar,
  DescriptionContainer,
  Info,
  InfoList,
  ProfileContainer,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { IPost } from '..'

interface PostCardProps {
  post: IPost
}

export const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <a href="">
          <span>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </span>
        </a>
        <h2>{post.title}</h2>
        <InfoList>
          <Info>
            <FontAwesomeIcon icon={faGithub} /> {post.user?.login}
          </Info>
          <Info>
            <FontAwesomeIcon icon={faCalendar} /> Há 1 dia
            {/* {user.company} */}
          </Info>
          <Info>
            <FontAwesomeIcon icon={faComment} /> {post.comments} comentários
            {/* {user.followers} seguidores */}
          </Info>
        </InfoList>
      </DescriptionContainer>
      <div>
        <a href="">
          <span>
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </span>
        </a>
      </div>
    </ProfileContainer>
  )
}
