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
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

export interface User {
  avatar_url?: string
  bio: string
  company: string
  followers: number
  login: string
  name: string
  html_url: string
}

interface UserProfileCardProps {
  user: User
}

export const UserProfileCard = ({ user }: UserProfileCardProps) => {
  return (
    <ProfileContainer>
      <Avatar>
        <img src={user.avatar_url} alt="me" />
      </Avatar>
      <DescriptionContainer>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <InfoList>
          <Info>
            <FontAwesomeIcon icon={faGithub} /> {user.login}
          </Info>
          <Info>
            <FontAwesomeIcon icon={faBuilding} />
            {user.company}
          </Info>
          <Info>
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers} seguidores
          </Info>
        </InfoList>
      </DescriptionContainer>
      <div>
        <a href={user.html_url}>
          <span>
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </span>
        </a>
      </div>
    </ProfileContainer>
  )
}
