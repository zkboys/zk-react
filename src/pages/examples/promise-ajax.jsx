import React, {Component} from 'react';
import {Button, Spin} from 'antd';
import './style.less';
import PageContent from '../../components/page-content/PageContent';
import * as promiseAjax from '../../commons/promise-ajax';

export const PAGE_ROUTE = '/example/promise-ajax';

export default class extends Component {
    state = {
        timeOutGetting: false,
        getting: false,
        posting: false,
        single1: false,
        single2: false,
    };
    handleSendGetTimeout = () => {
        this.setState({
            timeOutGetting: true,
        });
        promiseAjax.get('/mock/ajax/get').then(res => {
            console.log('get success', res);
        }).catch(err => {
            console.log('get error', err);
        }).finally(() => {
            console.log('get finally');
            this.setState({
                timeOutGetting: false,
            });
        });
    }
    handleSendGet = () => {
        const data = {
            a: 1,
            b: 2,
        };
        const options = {
            successTip: '请求数据成功！！！',
        };
        this.setState({
            getting: true,
        });
        this.ajaxGet = promiseAjax.get('/mock/ajax/get', data, options).then(res => {
            console.log('get success', res);
        }).catch(err => {
            console.log('get error', err);
        }).finally(() => {
            console.log('get finally');
            this.setState({
                getting: false,
            });
        });
    }

    handleCancelGet = () => {
        console.log('取消了');
        this.setState({
            getting: false,
        });

        if (this.ajaxGet) {
            this.ajaxGet.cancel();
        }
    }

    handleSendPost = () => {
        const data = {
            a: 1,
            b: 2,
        };
        const options = {
            successTip: '请求数据成功！！！',
        };
        this.setState({
            posting: true,
        });
        this.ajaxPost = promiseAjax.post('/mock/ajax/post', data, options).then(res => {
            console.log('post success', res);
        }).catch(err => {
            console.log('post error', err);
        }).finally(() => {
            console.log('post finally');
            this.setState({
                posting: false,
            });
        });
    }

    handleCancelPost = () => {
        console.log('取消了11');
        this.setState({
            posting: false,
        });

        if (this.ajaxPost) {
            this.ajaxPost.cancel();
        }
    }
    handleSendSingleGet = () => {
        console.log(1);
        this.setState({
            single1: true,
        });
        promiseAjax.singleGet('/mock/ajax/single/get').then(() => {
            console.log('single get success');
        }).catch(() => {
            console.log('single get error');
        }).finally(() => {
            console.log('single get finally');
            this.setState({
                single1: false,
            });
        });
    }
    handleSendSingleGet2 = () => {
        console.log(2);
        this.setState({
            single2: true,
        });
        promiseAjax.singleGet('/mock/ajax/single/get2').then(() => {
            console.log('single2 get success');
        }).catch(() => {
            console.log('single2 get error');
        }).finally(() => {
            console.log('single2 get finally');
            this.setState({
                single2: false,
            });
        });
    }

    componentWillMount() {
    }

    render() {
        return (
            <PageContent className="example-promise-ajax">

                <Button
                    type="ghost"
                    size="large"
                    onClick={this.handleSendGetTimeout}
                >
                    <Spin size="small" spinning={this.state.timeOutGetting}/>
                    发送一个超时的get请求
                </Button>
                <br/>
                <br/>
                <Button
                    type="ghost"
                    size="large"
                    onClick={this.handleSendGet}
                >
                    <Spin size="small" spinning={this.state.getting}/>
                    发送一个get请求
                </Button>
                <Button type="primary" size="large" style={{marginLeft: 16}} onClick={this.handleCancelGet}>取消get请求</Button>

                <br/>
                <br/>
                <Button
                    type="ghost"
                    size="large"
                    onClick={this.handleSendPost}
                >
                    <Spin size="small" spinning={this.state.posting}/>
                    发送一个post请求
                </Button>
                <Button type="primary" size="large" style={{marginLeft: 16}} onClick={this.handleCancelPost}>取消post请求</Button>

                <br/>
                <br/>
                <Button
                    type="ghost"
                    size="large"
                    onClick={this.handleSendSingleGet}
                >
                    <Spin size="small" spinning={this.state.single1}/>
                    多次发送相同url的get请求，只保留最后一次
                </Button>
                <Button
                    type="primary"
                    size="large"
                    onClick={this.handleSendSingleGet2}
                    style={{marginLeft: 16}}
                >
                    <Spin size="small" spinning={this.state.single2}/>
                    多次发送相同url的get请求，只保留最后一次
                </Button>
            </PageContent>
        );
    }
}
