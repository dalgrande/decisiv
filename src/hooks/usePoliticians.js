import { useContext } from 'react';
import { PoliticiansContext }  from '../contexts/PoliticiansContext';

function usePoliticians(){
  const context = useContext(PoliticiansContext);

  if (!context) {
    throw new Error('usePoliticians must be used within a PoliticiansProvider');
  }

  return context;
}

export default usePoliticians
