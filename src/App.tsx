import Container from './container/Container'
import schema from './schema'

function App() {

  return (
      <Container config={schema} onFinish={(v) => console.log(v)}/>
  )
}

export default App
