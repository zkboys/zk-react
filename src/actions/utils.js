import {createAction} from 'redux-actions';
import * as types from '../constants/actionTypes';
import * as Storage from '../utils/storage';
import pageInitState from '../page-init-state';

// 显示提示信息
export const toast = createAction(types.TOAST, ({type, text, timeout = 1000}) => {
    return {
        type,
        text,
        timeout,
        id: new Date().getTime(),
    };
});

// 同步本地数据到state中
export const getStateFromStorage = createAction(types.GET_STATE_FROM_STORAGE, () => {
    let keys = ['setting'];
    if (pageInitState) {
        keys = keys.concat(Object.keys(pageInitState).map(key => {
            if (pageInitState[key] && pageInitState[key].sync === true) {
                return key;
            }
            return null;
        }));
    }
    return Storage.multiGet(keys);
}, (resolved, rejected) => {
    return {
        resolved,
        rejected,
    };
});
