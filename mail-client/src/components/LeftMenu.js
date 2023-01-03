import React from "react";
import { Sidebar } from "flowbite-react";
import { HiTable, HiChartPie, HiViewBoards, HiInbox, HiUser, HiArrowSmRight, HiShoppingBag } from "react-icons/hi";

function LeftMenu(props) {
    return (
        <div className="w-fit">
            <Sidebar aria-label="Default sidebar example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={HiChartPie}
                        >
                            Home
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/c/inbox"
                            icon={HiInbox}
                            label="3"
                        >
                            Inbox
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="localhost:3000/c"
                            icon={HiArrowSmRight}
                        >
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiTable}
                        >
                            Sign Up
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}

export default LeftMenu;