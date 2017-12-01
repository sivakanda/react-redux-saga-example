import * as types from '../constants/actionTypes';

export const itemsFetchData = (url, filter) => ({
    type: types.ITEMS_FETCH_DATA,
    url:url,
    filter:filter
});

export const itemsHasErrored = (bool) => ({
    type: types.ITEMS_HAS_ERRORED,
    hasErrored: bool
});

export const itemsIsLoading = (bool) => ({
    type: types.ITEMS_IS_LOADING,
    isLoading: bool
});

export const itemsFetchDataSuccess = (items) => ({
    type: types.ITEMS_FETCH_DATA_SUCCESS,
    items
});

export const searchAccount = (accountName) => ({
    type: types.ITEMS_SEARCH,
    accountName
});
