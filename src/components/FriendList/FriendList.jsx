import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ isOnline, name, avatar, id }) => {
        return (
          <FriendListItem
            isOnline={isOnline}
            name={name}
            avatar={avatar}
            key={id}
          />
        );
      })}
    </ul>
  );
}
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
