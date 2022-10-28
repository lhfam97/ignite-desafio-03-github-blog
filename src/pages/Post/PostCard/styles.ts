import styled from 'styled-components'

export const ProfileContainer = styled.div`
  height: 13.25rem;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  margin-top: -5rem;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  a {
    width: fit-content;
    span {
      display: flex;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  a:after {
    content: '';
    display: block;
    margin: auto;
    height: 1px;
    width: 0;
    background: transparent;
    transition: width 0.5s ease, background-color 0.5s ease;
  }

  a:hover::after {
    width: 100%;
    background: ${({ theme }) => theme.colors.blue};
  }
`

export const Avatar = styled.div`
  img {
    border-radius: 8px;
    height: 148px;
    width: 148px;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  gap: 0.5rem;
  h2 {
    color: ${({ theme }) => theme.colors['base-title']};
  }
  p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 16px;
    line-height: 160%;
  }
  margin-right: auto;
`

export const InfoList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: auto;
  flex-wrap: wrap;
`
export const Info = styled.li`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`
