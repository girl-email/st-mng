import React, { FC, useEffect, useState } from 'react';
import { Avatar, Popover, Modal } from 'antd';
import { useNavigate } from 'react-router';
import './index.less';

interface UserInfoRes {
    _id: string,
    userName: string
    avatarUrl: string
    openId: string
    mobile: string
    __v: number
    pwd: string
    createTime: string
}

const CustomAvatar: FC = () => {
    let G_TIMER: any = null;
    const navigator = useNavigate();
    const [locUser, setLocUser] = useState<UserInfoRes | null>(null);
    const [tag, setTag] = useState<boolean>(true);
    const selectList = [
        {
            label: '个人信息',
            key: 0,
            action: () => handleSelf
        },
        {
            label: '退出登录',
            key: 1,
            action: () => handleLogout
        },
    ];

    useEffect(() => {
        G_TIMER = setTimeout(() => {
            if (!JSON.parse(localStorage.getItem('ST_USER_DATA')!)) {
                setTag((oldVal) => !oldVal);
            } else {
                setLocUser(JSON.parse(localStorage.getItem('ST_USER_DATA') || 'null'));
                clearTimeout(G_TIMER);
            }
        }, 20);
    }, [tag]);

    const handleSelf = () => {
        console.log('个人信息');
    };

    const handleLogout = () => {
        Modal.confirm({
            title: '确定退出登录吗',
            content: '退出登录后将返回登录页面',
            onOk() {
                localStorage.removeItem('ST_USER_DATA');
                navigator('/login');
            }
        });
    };

    const renderContent = () => {
        return (
            <div className='avatar_select'>
                {selectList.map(el => <div className='select_item' key={el.key} onClick={el.action()}>{el.label}</div>)}
            </div>
        );
    };


    return (
        <Popover trigger="click" overlayClassName="avatar_pop" getPopupContainer={(triggerNode: HTMLElement) => triggerNode.parentNode as HTMLElement} content={renderContent}>
            <Avatar src={locUser?.avatarUrl} alt={locUser?.userName?.slice(0, 1)} />
        </Popover>
    );
};

export default CustomAvatar;