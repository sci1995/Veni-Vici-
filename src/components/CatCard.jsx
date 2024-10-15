import React from 'react';


const CatCard = ({ cat, banCat, fetchNewCat }) => {
    const hasBreedInfo = cat.breeds && cat.breeds.length > 0;
    const breed = hasBreedInfo ? cat.breeds[0] : null; 
  
    return (
      <div>
        

        <img  id="cat-image"  src={cat.url} alt="Random Cat" />

        
        {hasBreedInfo && (
          <div>
            
              <button onClick={() => banCat(breed.name)} style={{ marginLeft: '8px' }}>
              Breed Name: {breed.name}
              </button>
           
              <button onClick={() => banCat(breed.temperament)} style={{ marginLeft: '8px' }}>
              Temperament: {breed.temperament}
              </button>
          
              <button onClick={() => banCat(breed.origin)} style={{ marginLeft: '8px' }}>
              Origin: {breed.origin}
              </button>
           
            
              <button onClick={() => banCat(breed.life_span)} style={{ marginLeft: '8px' }}>
              Life Span: {breed.life_span} years
              </button>
      
          </div>
        )}
  
       
      </div>
    );
  };
  
  export default CatCard;