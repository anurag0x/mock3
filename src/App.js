import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Todo/>
      </ChakraProvider>
    
    </div>
  );
}

export default App;
