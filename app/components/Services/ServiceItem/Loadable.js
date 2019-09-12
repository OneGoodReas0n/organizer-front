/**
 *
 * Asynchronously loads the component for ServiceItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
