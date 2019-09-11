/**
 *
 * Asynchronously loads the component for Workflow
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
