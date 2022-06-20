import { ChangeEvent, useRef } from 'react'

export const SearchBar = () => {

  // npm install -D @types/node @types/jasmine
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) 
      clearTimeout(debounceRef.current);
    
    debounceRef.current = setTimeout(() => {
        //TODO: buscar consulta
        console.log('debounce value:', event.target.value);
    }, 500);
  }

  return (
    <div className='search-container'>
      <input 
        type="text" 
        className='form-control'
        placeholder='Buscar lugar...'
        onChange={ onQueryChanged }
      />
    </div>
  )
}
