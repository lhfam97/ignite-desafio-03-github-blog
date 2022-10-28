import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostContainer = styled(Link)`
  height: 260px;
  background-color: ${({ theme }) => theme.colors['base-post']};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 1.25rem;

  h3 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: 20px;
    font-weight: bold;
    line-height: 160%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 16x;
    line-height: 160%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
  > div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors['base-span']};
    }
  }
`
