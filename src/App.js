import Card from './componets/Card'
import Container from './componets/Container'
import {useState} from 'react'
import UserForm from './componets/UserForm'
function App() {
  const [usuarios, setUsuarios]= useState([])
  const submit = usuario =>{
    setUsuarios([...usuarios,
    usuario,])
  }
  return (
    <div style={{marginTop: '15%'}}>
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
        <UserForm submit={submit}/>
        </div>
      </Card>
      <Card>
        <ul>
          {usuarios.map(x =>
          <li key={x.email}>{`${x.name} ${x.lastname} ${x.email}`}</li>
          )}
        </ul>
      </Card>
    </Container>
    </div>
  );
}

export default App;
