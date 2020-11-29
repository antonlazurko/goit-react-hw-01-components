import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendList() {
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src="" alt="" width="48" />
      <p className="name"></p>
    </li>
  );
}
