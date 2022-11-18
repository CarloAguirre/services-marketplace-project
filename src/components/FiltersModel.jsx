import '../assets/css/filters.css'

export const FiltersModel = () => {
  return (
    <div class="form-floating filter-custom">
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option >Filtrar por: Ciudad</option>
            <option >One</option>
            <option >Two</option>
            <option >Three</option>
        </select>
        <label for="floatingSelect">Works with selects</label>
    </div>
  )
}
