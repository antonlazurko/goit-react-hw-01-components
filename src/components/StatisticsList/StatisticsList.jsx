import PropTypes from 'prop-types';
import styles from './StatisticsList.module.css';
export default function StatisticsList(items) {
  const stats = items.stats;
  return (
    <ul className="stat-list">
      {stats.map(item => (
        <li key={item.id} className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
      ))}

      {/* <li className="item">
        <span className="label">.mp3</span>
        <span className="percentage">14%</span>
      </li>
      <li className="item">
        <span className="label">.pdf</span>
        <span className="percentage">41%</span>
      </li>
      <li className="item">
        <span className="label">.mp4</span>
        <span className="percentage">12%</span>
      </li> */}
    </ul>
  );
}
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
