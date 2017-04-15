// common action type

export const SET_STATE = 'SET_STATE';
export const ARR_APPEND_VALUE = 'ARR_APPEND_VALUE';
export const ARR_REMOVE_VALUE = 'ARR_REMOVE_VALUE';
export const ARR_REMOVE_ALL_VALUE = 'ARR_REMOVE_ALL_VALUE';
export const OBJ_SET_VALUE = 'OBJ_SET_VALUE';
export const OBJ_REMOVE_VALUE = 'OBJ_REMOVE_VALUE';

// utils
export const TOAST = 'TOAST';

// middleware
export const SYNC_STATE_TO_STORAGE = 'SYNC_STATE_TO_STORAGE';
export const GET_STATE_FROM_STORAGE = 'GET_STATE_FROM_STORAGE';

// app
export const LOGOUT = 'LOGOUT';
export const GET_MENUS = 'GET_MENUS';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const AUTO_SET_SIDE_BAR_STATUS = 'AUTO_SET_SIDE_BAR_STATUS';
export const AUTO_SET_HEADER_MENU_STATUS = 'AUTO_SET_HEADER_MENU_STATUS';
export const AUTO_SET_PAGE_HEADER_STATUS = 'AUTO_SET_PAGE_HEADER_STATUS';
export const SET_PAGE_HEADER_STATUS = 'SET_PAGE_HEADER_STATUS';
export const SET_PAGE_STATUS = 'SET_PAGE_STATUS';
export const OPEN_TAB_PAGE = 'OPEN_TAB_PAGE';

// setting
export const TOGGLE_SIDE_BAR = 'TOGGLE_SIDE_BAR';
export const SET_SETTING = 'SET_SETTING';

// profile
export const UPDATE_USER_MESSAGE = 'UPDATE_USER_MESSAGE';
export const UPDATE_USER_PASS = 'UPDATE_USER_PASS';

// user
export const GET_USERS_BY_PARAMS = 'GET_USERS_BY_PARAMS';
export const TOGGLE_LOCK_USER = 'TOGGLE_LOCK_USER';
export const RESET_USER_PASS = 'RESET_USER_PASS';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SHOW_USER_EDIT_MODAL = 'SHOW_USER_EDIT_MODAL';
export const HIDE_USER_EDIT_MODAL = 'HIDE_USER_EDIT_MODAL';

// organization
export const GET_ALL_ORGANIZATIONS = 'GET_ALL_ORGANIZATIONS';
export const SET_ORGANIZATION_TREE_DATA = 'SET_ORGANIZATION_TREE_DATA';
export const GET_ORGANIZATION_TREE_DATA = 'GET_ORGANIZATION_TREE_DATA';
export const UNDO_ORGANIZATION = 'UNDO_ORGANIZATION';
export const REDO_ORGANIZATION = 'REDO_ORGANIZATION';
export const SAVE_ORGANIZATION = 'SAVE_ORGANIZATION';

// role
export const GET_ALL_ROLES = 'GET_ALL_ROLES';
export const GET_PERMISSION_TREE_DATA = 'GET_PERMISSION_TREE_DATA';
export const GET_ROLES_BY_PARAMS = 'GET_ROLES_BY_PARAMS';
export const DELETE_ROLE = 'DELETE_ROLE';
export const SHOW_ROLE_EDIT_MODAL = 'SHOW_ROLE_EDIT_MODAL';
export const HIDE_ROLE_EDIT_MODAL = 'HIDE_ROLE_EDIT_MODAL';
export const ADD_ROLE = 'ADD_ROLE';
export const UPDATE_ROLE = 'UPDATE_ROLE';

// menu

export const SET_MENU_TREE_DATA = 'SET_MENU_TREE_DATA';
export const GET_MENU_TREE_DATA = 'GET_MENU_TREE_DATA';
export const UNDO_MENU = 'UNDO_MENU';
export const REDO_MENU = 'REDO_MENU';
export const SAVE_MENU = 'SAVE_MENU';