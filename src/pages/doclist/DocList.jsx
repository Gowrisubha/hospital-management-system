import "./doclist.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DocDatatable from "../../components/docddatatable/DocDatatable"

const DocList = () => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
        <Navbar/>
        <DocDatatable/>
      </div>
    </div>
  )
}

export default DocList