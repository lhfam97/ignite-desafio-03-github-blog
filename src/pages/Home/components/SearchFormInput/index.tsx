import { useFormContext } from 'react-hook-form'
import { SearchContainer, SearchHeader } from './styles'

interface SearchFormInputProps {
  postsQuantity: number
}

export const SearchFormInput = ({ postsQuantity }: SearchFormInputProps) => {
  const { register } = useFormContext()
  return (
    <SearchContainer>
      <SearchHeader>
        <h3>Publicações</h3>
        <span>
          {postsQuantity !== 1
            ? `${postsQuantity} publicações`
            : `${postsQuantity} publicação`}{' '}
        </span>
      </SearchHeader>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('queryText')}
      />
    </SearchContainer>
  )
}
