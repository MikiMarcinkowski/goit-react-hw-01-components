import css from './friend-list.module.css';
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
  return (
    <div >
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.itemFriends}>
      <span
        className={
          isOnline
            ? `${css.status} ${css.online}`
            : `${css.status} ${css.offline}`
        }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};


FriendList.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  id: PropTypes.number.isRequired

}