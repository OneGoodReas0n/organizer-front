/**
 *
 * Asynchronously loads the component for InfoItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
