import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import { useRef } from "react";
import Form, { FormHandle } from "./components/Form";

function App() {
  const customForm=useRef<FormHandle>(null);
  function handleSave(data:unknown){
    const extractdata=data as {name:string;age:string};
    console.log(extractdata);
    customForm.current?.clear();

  }
  const input=useRef<HTMLInputElement>(null)
  return (
  <main>
    {/* <Input id="name" label="Your Name" type='text' />
     <Input id="age" label="Your Age" type='number' />
     <p>
     <Button>A Button</Button></p>
     <p>
     <Button href="https://google.com">A Link</Button></p> */}
     <Input label="Test" id="test" ref={input}/>
     <Container as ={Button} onClick={()=>console.log("button Clicked")}>Click Me</Container>

     <Form onSave={handleSave}>
      <Input type="text" label="Name" id="name"/>
      <Input type="number" label="Age" id="age"/>
      <Button>Save</Button>
     </Form>
  </main>
  );
}

export default App;
