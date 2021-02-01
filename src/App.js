import Header from './components/Header';
import Sidenav from './components/sidenav';
import Mrectangle from './components/mainrectangle';
import Mycontributions from './components/Mycontributions';
import Tabs from './components/Tabs';
import Table1 from './components/Table1';


function App() {
  return (
    <div className="App">
     <Header/>
     <div className="everything">
     <Sidenav/>
     
     <div className="all-content">
      <Mrectangle/>
      <Mycontributions/>
      <Tabs/>
      <Table1 className="lists" />
      

       </div>
     </div>

    </div>
  );
}

export default App;
