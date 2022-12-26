import type {NextPage} from 'next'
import Nav from '../components/layout/Nav'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import Loginout from './Loginout';
import MyPage from './MyPage';

const Home: NextPage = () => {

  const ifLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <div>
      { ifLoggedIn ? <MyPage/> : <Loginout/> }
    </div>
  )
}

export default Home