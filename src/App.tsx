
import './App.css'
import Topbar from './components/TopBar'
// import FooterRow from './components/FooterRow'
import Row from './components/Row'
// import Table from './components/Table'


function App() {


  return (
    <>
      <div className="h-screen m-0 p-0 overflow-auto scrollbar-hide">
        <Topbar />
        <Row />
        {/* <Table />
        <FooterRow/> */}
      </div>
    </>
  )
}

export default App
