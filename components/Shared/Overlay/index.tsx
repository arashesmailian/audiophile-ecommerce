import { store } from '@/redux/store';
import styles from './overlay.module.scss';
import { setModalStatus } from '@/redux/reducers/modalSlice';

type Props = {
  menuOption?: boolean;
  maxOverlay?: boolean;
  event?: () => void;
};

const Overlay = ({ menuOption, maxOverlay, event }: Props) => {
  const handleCartClose = () => {
    store.dispatch(setModalStatus(false));
  };
  return (
    <div
      className={`${styles.container} ${menuOption ? styles.menu_option : ''} ${
        maxOverlay ? styles.max_overlay : ''
      }`}
      onClick={event || handleCartClose}
    />
  );
};

export default Overlay;
