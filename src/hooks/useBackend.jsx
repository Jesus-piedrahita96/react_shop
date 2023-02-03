import React from 'react'

const DataContext = createContext();

function DataProvider {
  // const [car, setcar] = useState({
  //   selected
  // })

  return (
    <DataContext.Provider
      value={

      }
    >
      {this.props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;