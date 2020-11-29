import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ isOnline, name, avatar }) {
  return (
    <li className="item">
      {isOnline ? (
        <span className="online"></span>
      ) : (
        <span className="offline"></span>
      )}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
