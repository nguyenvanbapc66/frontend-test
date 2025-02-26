import { LoaderIcon } from '../../assets/icons';
import styles from './style.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderIcon />
    </div>
  );
};

export default Loader;
