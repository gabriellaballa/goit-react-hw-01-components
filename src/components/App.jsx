import Profile from './Profile/Profile';
import user from '../components/user.json';
import Statistics from './Statistics/Statistics';
import data from '../components/data.json';
import friends from '../components/friends.json';
import FriendList from './FriendList/FriendList';
//import FriendListItem from './FriendList/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../components/transactions.json';

export const App = () => {
  return (
    <main>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        2023.11.07
      </div>
    </main>
  );
};
