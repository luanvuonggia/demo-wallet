import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyAbout = lazy(() => import('./Dashboard'));

const Dashboard = (props) => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default Dashboard;
