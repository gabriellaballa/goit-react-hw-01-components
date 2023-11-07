import style from './FriendList.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span
        className={`${style.status} ${isOnline ? style.online : style.offline}`}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
