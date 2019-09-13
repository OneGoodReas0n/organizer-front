import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the support state domain
 */

const selectSupportDomain = state => state.support || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Support
 */

const makeSelectSupport = () =>
  createSelector(
    selectSupportDomain,
    substate => substate,
  );

export default makeSelectSupport;
export { selectSupportDomain };
