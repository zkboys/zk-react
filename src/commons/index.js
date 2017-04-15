import {session} from '../utils/storage';
import config from '../configs';

export function setCurrentLoginUser(user) {
    session.setItem('currentLoginUser', user);
}

export function getCurrentLoginUser() {
    return session.getItem('currentLoginUser');
}

function getMenuDataFromServer() {
    // TODO 后端请求系统菜单
    return new Promise(resolve => resolve(
        [
            {
                key: 'base-information',
                text: '基础信息维护',
                icon: 'fa-users',
                path: '',
            },
            {
                key: 'common001',
                parentKey: 'base-information',
                text: '系统管理',
                icon: 'fa-sitemap',
                path: '/base-information/system_page',
            },
            {
                key: 'common002',
                parentKey: 'base-information',
                text: '管理用户管理',
                icon: 'fa-user',
                path: '/base-information/manager',
            },
            {
                key: 'common003',
                parentKey: 'base-information',
                text: '业务用户管理',
                icon: 'fa-user',
                path: '/base-information/business/users',
            },
            {
                key: 'common004',
                parentKey: 'base-information',
                text: '角色管理',
                icon: 'fa-lock',
                path: '/base-information/roles',
            },
            {
                key: 'common005',
                parentKey: 'base-information',
                text: '权限管理',
                icon: 'fa-lock',
                path: '/base-information/permissions',
            },
            {
                key: 'menu_permission',
                parentKey: 'base-information',
                text: '菜单&权限',
                icon: 'fa-lock',
                path: '/base-information/menu_permission',
            },
            {
                key: 'system',
                text: '系统',
                icon: 'fa-th-list',
                order: 1,
                functions: [],
            },
            {
                key: 'system-004002',
                parentKey: 'system',
                text: '修改密码',
                icon: 'fa-lock',
                path: '/system/profile/pass',
                order: 1,
                functions: [],
            },
            {
                key: 'system-002',
                parentKey: 'system',
                text: '系统设置',
                icon: 'fa-cog',
                path: '/system/settings',
                order: 1,
                functions: [],
            },
            {
                key: 'system-004001',
                parentKey: 'system',
                text: '修改个人信息',
                icon: 'fa-user',
                path: '/system/profile/message',
                order: 1,
                functions: [],
            },
            {
                key: 'example',
                text: 'Example',
                icon: 'fa-file-code-o',
                path: '',
            },
            {
                key: 'example-promise-ajax',
                parentKey: 'example',
                text: 'promise-ajax',
                icon: 'fa-th-list',
                path: '/example/promise-ajax',
            },
            {
                key: 'example-actions-set-state',
                parentKey: 'example',
                text: 'actions-set-state',
                icon: 'fa-th-list',
                path: '/example/actions-set-state',
            },
            {
                key: 'example-font-icon',
                parentKey: 'example',
                text: 'font-icon',
                icon: 'fa-th-list',
                path: '/example/font-icon',
            },
            {
                key: 'example-iframe',
                parentKey: 'example',
                text: '测试iframe',
                icon: 'fa-th-list',
                path: '/example/iframe-test',
                url: 'http://www.baidu.com',
            },
        ]
    ));
}

export function getMenuData(fromServer) {
    if (fromServer === true) {
        return getMenuDataFromServer();
    }

    const sessionMenu = session.getItem('menus');
    if (!sessionMenu) {
        return getMenuDataFromServer();
    }
    return new Promise(resolve => resolve(sessionMenu));
}

export function isLogin() {
    const currentLoginUser = getCurrentLoginUser();
    return currentLoginUser && currentLoginUser.authToken;
}

export function toLogin() {
    location.href = config.signInPath;
    return false;
}

