// eslint-disable-next-line react/prop-types

const SearchFilter=({search,setSearch,filter,setFilter,countries,setCountries})=>{
    const handleInputChange=(event)=>{
        event.preventDefault();
        setSearch(event.target.value);
    }
    const handleSelectChange=(event)=>{
        event.preventDefault();
        setFilter(event.target.value);
    }
    // In react we can't directly update the state variable we need to copy the variable
    const sortCountries=(value)=>{
         const sortCountry=[...countries].sort((a,b)=>{
            return value==="asc"?a.name.common.localeCompare(b.name.common):b.name.common.localeCompare(a.name.common)
         })
         setCountries(sortCountry);
    }
    return (
        <>
        <section className="section-searchFilter container">
            <input type="text" placeholder="search" value={search} onChange={handleInputChange}/>
        </section>
        <div>
            <button onClick={()=>sortCountries("asc")}></button>
        </div>
        <div>
            <button onClick={()=>sortCountries("desc")}></button>
        </div>
        <div>
               <select className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Ocenia">Ocenia</option>
               </select>
        </div>
        </>
    )
}
export default SearchFilter;