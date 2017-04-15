import React, {Component} from 'react';
import {Button} from 'antd';
import {Link} from 'react-router';
import error404 from './404.png';
import './style.less';
import {getCurrentSidebarMenuByUrl} from '../../utils';
import IframePage from '../../components/iframe-page/IframePage';
/**
 * 页面未找到分为两种情况：
 * 1. path配置错误，前端没有对应的route
 * 2. 菜单中有url，为打开iframe菜单，前端本身就没有配置route
 */
export class LayoutComponent extends Component {
    state = {
        url: '',
    };

    componentWillMount() {
        // const pathName = window.location.pathname;
        const {actions} = this.props;
        actions.getMenus({
            resolved: (data) => {
                const menu = getCurrentSidebarMenuByUrl(data);
                if (menu && menu.url) {
                    this.setState({
                        url: menu.url,
                    });
                }
            },
            rejected: () => {
            },
        });
    }

    render() {
        const {url} = this.state;
        if (url) {
            return <IframePage url={url}/>;
        }
        return (
            <div className="error-page">
                <img src={error404} alt="404图片"/>
                <p className="error-text">您访问的页面不存在...</p>
                <Button
                    type="primary"
                    className="error-btn"
                    onClick={this.props.router.goBack}
                >
                    返回上一级
                </Button>
                <Button
                    type="primary"
                    className="error-btn error-btn-right"
                >
                    <Link to="/">返回首页</Link>
                </Button>
            </div>
        );
    }
}

export function mapStateToProps() {
    return {};
}
