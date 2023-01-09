import type {NextPage} from 'next'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import Loginout from './Loginout';
import MyPage from './MyPage';
import Main from './Main';

const Home: NextPage = () => {

  const ifLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <div>
      { ifLoggedIn ? <MyPage/> : <Main/> }
    </div>
  )
}

export default Home