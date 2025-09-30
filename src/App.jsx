import './App.css'
import './index.css'
import MainLayout from './layouts/MainLayout'
import Input from './components/Input'
import Button from './components/Button'
import ChipDisplay from './components/Chip'

function App() { 

  return (
    <>      
      <MainLayout> 
        <ChipDisplay width="631px" height="464px">
          <p>Olá mundo!</p>
        </ChipDisplay>
        
      </MainLayout>
    </>
  )
}

export default App
