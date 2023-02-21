import React from 'react'
import {datos} from '../components/useData.js'
import axios from 'axios'
// import fetch from 'node-fetch'

const DataContext = React.createContext();

function DataProvider({children}) {
  const [count, setCount] = React.useState(0)

  const onChange = (id) => {
    const indice = datos.findIndex(data => data.id === id)

    if (!datos[indice].selected){
      datos[indice].selected = true
      setCount(count+1)
    }else{
      datos[indice].selected = false
      setCount(count-1)
    }
  }

    const crud = {onChange}

  return (
    <DataContext.Provider
      value={
        {
          crud,
          count,
          datos
        }
      }
    >
      {children}
    </DataContext.Provider>
  );
}

function useCrud() {
  const crud = React.useContext(DataContext)
  return crud.crud
}

function useGeneric() {
  const generic = React.useContext(DataContext)
  return generic.count
}

function useData() {
  const data = React.useContext(DataContext)
  return data.datos
}

export {
  DataProvider,
  useCrud,
  useGeneric,
  useData
};