import React, {createContext, useContext, useReducer, useEffect} from 'react';

const reducer = (state, header) => {
    return {
      ...state,
      title: header.title,
      description: header.description,
      image: header.image
    }
};

const initHeader = {
  header: {
    title: "Plataforma 10",
    description: "Queremos que trabajes con nosotros.",
    image: require('../../../../public/img/bg4.jpg')
  }
}

export const HeaderContext = createContext();

export const HeaderProvider = ({children}) =>(
  <HeaderContext.Provider value={useReducer(reducer, initHeader)}>
    {children}
  </HeaderContext.Provider>
);

export const useHeaderContext = () => useContext(HeaderContext);

export const useDefaultHeader = () => {
  const distpath = useHeaderContext()[1];
  useEffect(() => {
    distpath({
      title: "Plataforma 10",
      description: "Queremos que trabajes con nosotros.",
      image: require('../../../../public/img/bg4.jpg')
    });
  }, []);  
};