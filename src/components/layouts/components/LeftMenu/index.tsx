import React, { FC } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './index.less';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('实时监控', 'sub1', null),
    getItem('数据大屏', 'sub2', null),
    // { type: 'divider' },
    getItem('埋点数据', 'sub3', null),
    getItem('线上调试', 'grp', null)
  ];

const LeftMenu: FC = () => {

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
      };

    return (
        <nav className='st_left_nav'>
            <div className='nav_logo'>
                <img src="/public/icon.svg" alt="" />
                <span>闪调</span>
            </div>
            <Menu
                className='st_left_menu'
                onClick={onClick}
                style={{ width: 220 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </nav>
    );
};

export default LeftMenu;