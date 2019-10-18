import cloneDeep from 'lodash.clonedeep';
import queryBuilder from 'query-string';
import compact from 'lodash.compact';

const REQUEST_REGEXP = /^MT_LIST@(.+)_REQUEST$/;
const CRUD_ACTION_SUCCESS = /^(.+)_CRUD_ACTION_SUCCESS$/;
const RSAA = '@@redux-api-middleware/RSAA';

export default store => next => action => {
  if (action[RSAA]) {
    const newAction = { ...action };

    const type =
      typeof action[RSAA].types[0] === 'object'
        ? action[RSAA].types[0].type
        : action[RSAA].types[0];
    if (REQUEST_REGEXP.test(type)) {
      const reducer = type.match(REQUEST_REGEXP)[1];
      const {
        mainTable: {
          [reducer]: { isLoading, filtersValue }
        }
      } = store.getState();
      if (isLoading) {
        return false;
      }
      if (filtersValue && Object.keys(filtersValue).length) {
        const compactedQuery = cloneDeep(filtersValue);
        Object.entries(compactedQuery).forEach(([key, value]) => {
          const arr = Array.isArray(value) ? value : [value];
          compactedQuery[key] = compact(arr);
        });
        const queryString = queryBuilder.stringify(compactedQuery);

        if (queryString.length) {
          newAction[RSAA].endpoint = `${
            newAction[RSAA].endpoint
          }?${queryString}`;

        }
      }

      return next(newAction);
    }

    return next(newAction);
  }

  if (CRUD_ACTION_SUCCESS.test(action.status)) {
  }

  return next(action);
};
