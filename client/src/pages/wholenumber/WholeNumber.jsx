import './wholenumber.css'
import Sidebar from '../../components/sidebar/Sidebar'
import WholeNumberPage from '../../learningCenterPages/wholenumber/WholeNumberPage'

const WholeNumber = () => {
  return (
    <div className='divider'>
        <WholeNumberPage />
        <Sidebar />
    </div>
  )
}

export default WholeNumber