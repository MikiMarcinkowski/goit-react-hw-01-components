

export const Statistics = ({ stats, title }) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {stats.map(stat => (
        <li class="item" key={stat.id}>
          <span class="label">{stat.label}</span>
          <span class="percentage"> {stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </div>
);
    
