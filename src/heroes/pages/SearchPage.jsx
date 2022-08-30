import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const {searchText, onInputChange} = useForm({
    searchText:q
  })

  const onSearchSubmit = (e) =>{
    e.preventDefault();
    // if(searchText.trim().length <= 1) return;
    
    navigate(`?q=${searchText}`)
    
  }

  return (
    <>
    <h1 className='animate__animated animate__fadeInLeft mt-2'>Search</h1>   
  <hr />

  <div className="row">
    <div className="col-5">
      <h4>Searching</h4>
      <hr />
      <form onSubmit={onSearchSubmit} aria-label={'form'}>
        <input type="text"
        placeholder='search your hero'
        className='form-control'
        name='searchText'
        autoComplete='off'
        value={searchText}
        onChange={onInputChange} />
      </form>
      <button 
      className='btn btn-outline-info mt-2'
      onClick={onSearchSubmit}>Search</button>
    </div>
   
    <div className="col-7">
      <h4>Results</h4>
    <hr />
    {/* {
      (q === '') ? <div className="alert alert-primary">
      Search a Hero!
    </div> : (heroes.length === 0) && <div className="alert alert-danger">
      There are no results with <b>{q}</b>
    </div>
    } */}
    
    <div className="animate__animated animate__fadeIn alert alert-primary" aria-label='alert-primary' style={{display: showSearch ? '' :'none'}} >Search a Hero
    </div>

    <div className="animate__animated animate__fadeIn alert alert-danger" aria-label='alert-danger' style={{display:showError? '' : 'none'}} >There are no results with <b>{q}</b>
    </div>

    
      {
      heroes.map(hero => 
        <HeroCard key={hero.id} {...hero}/>
      )
    }
    
    

    {/* <HeroCard/> */}

    </div>
    
  </div>
    
    </>
  )
}
