import { Link } from 'react-router-dom';
import styles from './podcasts.module.scss';
import { mockListItem } from 'mocks';

export const Podcasts = () => {
  const list = Array(100).fill(mockListItem);
  console.log(list);

  return (
    <div className="container">
      <h1>Los 100 más populares</h1>
      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <Link to={`/podcast/${item.id}`}>{item.name}</Link>
              <p>{item.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
