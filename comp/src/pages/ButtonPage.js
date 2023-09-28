import Button from "../components/Button";
import { GoBell, GoCloud } from 'react-icons/go';

function ButtonPage() {
  const handleclick = () => {
    console.log('click!!');
  }
  return (
    <div className="App">
      <div>
        <Button primary rounded onClick={handleclick} className="mb-5"><GoBell />Primary</Button>
      </div>
      <div>
        <Button secondary ><GoCloud />secondary</Button>
      </div>
      <div>
        <Button success>success</Button>
      </div>
      <div>
        <Button warning>warning</Button>
      </div>
      <div>
        <Button danger outline>danger</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
