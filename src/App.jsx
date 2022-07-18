import Sidebar from './components/Sidebar';
import Principal from './components/Principal';
import Menu from './components/Menu';



function App() {
  
  return (
    <>
      <div class="flex">
        <Sidebar/>
        <Principal/>
      </div>
      <Menu/>
    </>
  )
}

export default App
