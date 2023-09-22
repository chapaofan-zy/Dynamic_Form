import './App.css'
import Container from './container/Container'
import o from './schema';

function App() {

  return (
    <>
      <Container config={o} onFinish={(v) => console.log(v)}/>
    </>
  )
}

export default App
