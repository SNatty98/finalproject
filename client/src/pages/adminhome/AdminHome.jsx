import './adminhome.css'
import homeBanner from "./adminHomeImg.jpg"
const AdminHome = () => {
  return (
    <div className='adminHome'>
      <div className='headerPos'>
      <h1 className="adminHeader">Welcome to Freedom Maths!</h1>
      </div>
      <div className='imgPos'>
        <img className='adminHomeImg' src={homeBanner} alt=''/>
      </div>
    </div>
  )
}

export default AdminHome