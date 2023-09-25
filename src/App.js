import './App.css';
import { Credentials } from './Contexts/Credentials';
import { useState } from 'react';
import Routes from './Routes/Routes';
function App() {
  const [credentials , setCredential]= useState([]);
  console.log({credentials})
  const [showSidebar , setShowSidebar] = useState(false)
  return <Credentials.Provider value={{credentials, showSidebar, setShowSidebar , setCredential}}>
                  <Routes />
         </Credentials.Provider>
}
export default App;
