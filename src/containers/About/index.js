import Loadable from '../../components/Loadable';
import { lazy } from 'react';

const LazyAbout = lazy(() => import('./About'));

const About = (props) => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default About;
