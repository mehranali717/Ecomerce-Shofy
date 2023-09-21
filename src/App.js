import './App.css';
import { Credentials } from './Contexts/Credentials';
import { useState } from 'react';
import Routes from './Routes/Routes';
function App() {
  const [cradentials , setCredential]= useState([]);
  const [showSidebar , setShowSidebar] = useState(false)
  return <Credentials.Provider value={{cradentials, showSidebar, setShowSidebar , setCredential}}>
                  <Routes />
         </Credentials.Provider>
}
export default App;
