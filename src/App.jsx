import { useEffect } from "react";
import {useDispatch} from "react-redux";

import { current } from "./redux/auth/auth-operations";

import AppRoutes from "./AppRoutes";

// import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(current())
  }, [dispatch]);

  return (
    <div className="App">
      {/* <ChakraProvider> */}
        <AppRoutes />
      {/* </ChakraProvider > */}
    </div>
  );
}

export default App;
