/**
 *
 * Asynchronously loads the component for FlowItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
