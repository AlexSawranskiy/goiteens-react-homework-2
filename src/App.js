import './App.css';
import './Components/Profile';
import { Profile } from './Components/Profile';
import user from './user.json';
import { TransactionHistory } from './Components/TransactionHistory';
import transaction from './transaction.json';

const {username, tag, location, avatar, stats} = user;

function App() {
  return (
    <>
      <Profile
    username = {username}
    tag = {tag}
    location = {location}
    avatar = {avatar}
    stats = {stats}
    />
     <TransactionHistory items = {transaction}/>
    </>
  )
}

export default App;
