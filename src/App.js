import './App.css';
import { Credentials } from './Contexts/Credentials';
import { useState } from 'react';
import AllRoutes from './Components/Routes/Routes';
function App() {
  const [cradentials , setCredential] = useState("")
  return <Credentials.Provider value={{cradentials , setCredential}}>
                  <AllRoutes />
         </Credentials.Provider>
}
export default App;
