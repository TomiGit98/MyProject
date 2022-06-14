import "./SideBarItem.scss";

import { Component, SVGProps } from "react";

interface ItemProperties {
    text: string;
    icon: any;
}

const SideBarItem: React.FC<ItemProperties> = (props  : ItemProperties) => (
    <div className="sidebar-item-container">
        {props.icon}
        <p>{props.text}</p>
    </div>
);

export default SideBarItem;