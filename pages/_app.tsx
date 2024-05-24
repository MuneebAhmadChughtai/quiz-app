import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/header'
import Footer from '@/components/footer'
// import Store from '@/store/store'
import { useEffect } from 'react'
import { createContext, useReducer } from 'react';



const StoreContext = createContext();

const ACTION_TYPES = {
  INCREMENT : 'INCREAMENT',
  DECREMENT:'DECREMENT'
}

const StoreReducer  = (state:any, action:any) =>{
  switch(action.type){
    case ACTION_TYPES.INCREMENT : {
      return { ...state, obtainedMarks : state.obtainedMarks +  1}
    }
  }
}


const StoreProvider = ({children}: any)=>{
  
  const initialState = {
    obtainedMarks: 0,
  };

  const [state, dispatch] = useReducer(StoreReducer, initialState)
  return (
    <StoreContext.Provider value={{state, dispatch}} >
      {children}
    </StoreContext.Provider>
  )
}





function App({ Component, pageProps }: AppProps) {

  // const store = new Store();

  // useEffect(()=>store.loadQuestions,[])

  
  return <>
    <Header />
    <StoreProvider>
      <Component {...pageProps} />    
    </StoreProvider>
    <Footer />
  </>
}


export default App
