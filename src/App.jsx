import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import Calendar from "./Components/Calendar/Calendar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-10 m-5">
        <div className="col-span-1 flex-col flex">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <Calendar />
        </div>
      </div>
    </>
  )
}

