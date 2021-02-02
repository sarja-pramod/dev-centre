import Header from './components/header/Header';
import Sidenav from './components/Sidenav/sidenav';
import Mrectangle from './components/my-contributions/Mycontributions';
import Mycontributions from './components/documets-tab/Documents-Tabs';
import Tabs from './components/Mycontri-tabs/MycontriTab';
import Table1 from './components/Table/Table1';


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
