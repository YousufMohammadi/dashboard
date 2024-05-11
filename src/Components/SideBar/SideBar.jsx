import React from 'react'
import { useNavigate } from "react-router";

import "../SideBar/SideBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faBuildingColumns,
  faClipboardList,
  faFileInvoiceDollar,
  faHandHoldingDollar,
  faLayerGroup,
  faMoneyCheckDollar,
  faPeopleGroup,
  faPills,
  faTablets,
  faUserTie,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "antd";
import {
  HomeFilled,
  FileTextFilled,
  AreaChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
  StockOutlined,
  DotChartOutlined,
  SettingFilled,
  ExclamationCircleFilled,
} from "@ant-design/icons";
const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
export default function SideBar() {
    const navigate = useNavigate();
  return (
    <nav className='sidBar-container d-flex flex-column justify-content-start gap-1'>
        <Menu
        onClick={({ key }) => {
          navigate(key);
        }}
        defaultSelectedKeys={[window.location.pathname]}
        mode="inline"
        className='sideBar'
        items={[
          {
            label: "Home",
            key: ["/home"],
            icon: <HomeFilled style={{ fontSize: 15 }} />,
          },
          {
            label: "Dashboard",
            key: "/drugsType",
            icon: <FontAwesomeIcon icon={faPills} style={{ fontSize: 15 }} />,
          },
          {
            label: "products",
            key: "/drugs",
            icon: <FontAwesomeIcon icon={faTablets} style={{ fontSize: 15 }} />,
          },
          {
            label: "orders",
            key: "/factors",
            icon: (
              <FontAwesomeIcon
                icon={faFileInvoiceDollar}
                style={{ fontSize: 15 }}
              />
            ),
            children: [
              {
                label: "فاکتور خرید",
                key: "/buyFactor",
                icon: <FileTextFilled style={{ fontSize: 15 }} />,
              },
              {
                label: "فاکتور فروش",
                key: "/saleFactor",
                icon: <FileTextFilled style={{ fontSize: 15 }} />,
              },
              {
                label: "لیست فاکتورها",
                key: "/factorList",
                icon: (
                  <FontAwesomeIcon
                    icon={faClipboardList}
                    style={{ fontSize: 15 }}
                  />
                ),
              },
            ],
          },
          {
            label: "customers",
            key: "/customers",
            icon: (
              <FontAwesomeIcon icon={faPeopleGroup} style={{ fontSize: 15 }} />
            ),
          },
          {
            label: "stacks",
            key: "/stacks",
            icon: (
              <FontAwesomeIcon icon={faLayerGroup} style={{ fontSize: 15 }} />
            ),
          },
          {
            label: "checks",
            key: "/checks",
            icon: (
              <FontAwesomeIcon
                icon={faMoneyCheckDollar}
                style={{ fontSize: 15 }}
              />
            ),
          },
          {
            label: "expends",
            key: "/expenses",
            icon: (
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                style={{ fontSize: 15 }}
              />
            ),
          },
          {
            label: "Zornal",
            key: "/roznamcha",
            icon: (
              <FontAwesomeIcon icon={faBookOpen} style={{ fontSize: 15 }} />
            ),
          },
          {
            label: "Reports",
            key: "/reports",
            icon: <AreaChartOutlined style={{ fontSize: 15 }} />,
            children: [
              {
                label: "گزارش داروها",
                key: "/drugReports",
                icon: <BarChartOutlined style={{ fontSize: 15 }} />,
              },
              {
                label: "گزارش فاکتورها",
                key: "/factorReports",
                icon: <DotChartOutlined style={{ fontSize: 15 }} />,
              },
              {
                label: "گزارش اسناد",
                key: "/checkReports",
                icon: <LineChartOutlined style={{ fontSize: 15 }} />,
              },
              {
                label: "گزارش مشتریان",
                key: "/customerReports",
                icon: <StockOutlined style={{ fontSize: 15 }} />,
              },
            ],
          },
          {
            label: "Users",
            key: "/users",
            icon: <FontAwesomeIcon icon={faUsers} style={{ fontSize: 15 }} />,
          },
          {
            label: "Employees",
            key: "/employee",
            icon: <FontAwesomeIcon icon={faUserTie} style={{ fontSize: 15 }} />,
          },
          {
            label: "Banks",
            key: "/remittance",
            icon: (
              <FontAwesomeIcon
                icon={faBuildingColumns}
                style={{ fontSize: 15 }}
              />
            ),
          },
          {
            label: "Settings",
            key: "/settings",
            icon: <SettingFilled style={{ fontSize: 15 }} />,
          },
          {
            label: "About",
            key: "/aboutUs",
            icon: <ExclamationCircleFilled style={{ fontSize: 15 }} />,
          },
        ]}
      ></Menu>
    </nav>
  )
}
