import css from './statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.statsTitle}>{title}</h2>
      <ul className={css.statsList}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}> {stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

// const liItem = document.querySelector('.item');
// liItem.style.backgroundColor = '#';
// const setBg = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
// liItem.style.backgroundColor = '#' + randomColor;

// };
//  setBg();
