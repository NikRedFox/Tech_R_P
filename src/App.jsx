import './App.css'
import './global.css'
import MainLayout from './layouts/MainLayout'
import Input from './components/Input'
import Button from './components/Button'

function App() { 

  return (
    <>      
      <MainLayout>
        <Input width="100px"/>
        <Button width="100px" fontSize="32px"/>
      </MainLayout>
    </>
  )
}

export default App
