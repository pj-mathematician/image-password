import "./App.css";
import Select from "./components/Select/Select";

const list = [
  {
    name: 'Node 1',
    id: 1,
    children: [
      {
        name: 'Sub Node 11',
        id: 11,
        children: [
          {
            name: 'Sub Sub Node 111',
            id: 111,
            children: []
          }
        ]
      },
      {
        name: 'Sub Node 2',
        id: 12,
        children: [
          {
            name: 'Sub Sub Node 121',
            id: 121,
            children: []
          }
        ]
      }
    ]
  },
  {
    name: 'Node 2',
    id: 2,
    children: [
      {
        name: 'Sub Node 2',
        id: 21,
        children: []
      }
    ]
  }

]

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      {/* <Dropdown /> */}
      <Select list={list}/>
    </div>
  );
}

export default App;
