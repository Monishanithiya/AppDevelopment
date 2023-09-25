import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge,Image, Space, Typography } from "antd";
import { useState } from "react";

function AppHeader() {
  const [comments] = useState([]);
  const [orders] = useState([]);
  return (
    <div className="AppHeader">
      <Image
        width={40}
      ></Image>
      <Typography.Title>Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
          />
        </Badge>
      </Space>
      
      
    </div>
  );
}
export default AppHeader;
