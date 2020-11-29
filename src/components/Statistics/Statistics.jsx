import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics(stats) {
  return (
    <div className="statistics">
      {stats.title && <h2 className="title">{stats.title}</h2>}
      {stats.children}
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
