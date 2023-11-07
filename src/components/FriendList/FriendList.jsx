import FriendListItem from './FriendListItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendlist}>
      {friends.map((friend, index) => (
        <FriendListItem key={index} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;
