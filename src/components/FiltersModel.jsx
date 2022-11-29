import '../assets/css/filters.css'

export const FiltersModel = (onChange) => {
  return (
    <div className='filters-wrapper'>
    <div className="form-floating form-control filter-custom">
      <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={onChange}>
          <option >Categorias</option>
          <option value={'6341e2381a3fb2d4e2251ce2'}  >Trekking</option>
          <option value={'63488753cf489b14f0e4c8e1'}  >Ciclismo</option>
          <option >Three</option>
      </select>
      <label htmlFor="floatingSelect">Filtra por Categoria</label>
    </div>       
  </div>
  )
}
