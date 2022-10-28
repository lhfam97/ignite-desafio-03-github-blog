import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 4.25rem;
  gap: 0.75rem;
  input {
    height: 3rem;
    background: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    padding: 12px 16px 12px 16px;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const SearchHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 18x;
    font-weight: bold;
    line-height: 160%;
  }

  span {
    color: ${({ theme }) => theme.colors['base-span']};
  }
`
