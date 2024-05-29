import styles from './podcasts.module.scss';
// import { usePodcasts } from '../hooks/usePodcasts';
import { Link, useLoaderData } from 'react-router-dom';

// type Item = {
//   id: {
//     attributes: {
//       'im:id': string;
//     };
//   };
//   'im:image': {
//     label: string;
//   }[];
//   'im:name': {
//     label: string;
//   };
//   'im:artist': {
//     label: string;
//   };
// };

export const Podcasts = () => {
  const list = useLoaderData();

  return (
    <div className="container">
      <h1>Los 100 más populares</h1>
      {list ? (
        <ul className={styles.list}>
          {list?.map((item: any) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <Link to={`/podcast/${item.id}`}>{item.name}</Link>
                <p>{item.artist}</p>
              </div>
            </li>
            // <li key={item.id.attributes['im:id']}>
            //   <img
            //     src={item['im:image'][0].label}
            //     alt={item['im:name'].label}
            //   />
            //   <div>
            //     <h2>{item['im:name'].label}</h2>
            //     <p>{item['im:artist'].label}</p>
            //   </div>
            // </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
