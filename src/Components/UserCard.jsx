import React, { useState } from "react";
import { Card } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const UserCard = ({ user, onDelete, onEdit }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => setLiked(!liked);
  const handleDelete = () => onDelete(user.id);
  const handleEdit = () => onEdit(user);

  return (
    <Card
      className="user-card"
      cover={
        <img
          className="user-card-cover"
          alt={user.name}
          src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
          draggable={false}
        />
      }
      actions={[
        liked ? (
          <HeartFilled
            key="heart-filled"
            onClick={handleLikeToggle}
            style={{ color: "red", fontSize: "20px" }}
          />
        ) : (
          <HeartOutlined
            key="heart-outlined"
            onClick={handleLikeToggle}
            style={{ color: "#555", fontSize: "20px" }}
          />
        ),
        <EditOutlined
          key="edit"
          onClick={handleEdit}
          style={{ color: "#555", fontSize: "20px" }}
        />,
        <DeleteOutlined
          key="delete"
          onClick={handleDelete}
          style={{ color: "#555", fontSize: "20px" }}
        />,
      ]}
    >
      <Meta
        title={<span className="user-name">{user.name}</span>}
        description={
          <div className="user-details">
            <p>
              <MailOutlined className="icon" /> {user.email}
            </p>
            <p>
              <PhoneOutlined className="icon" /> {user.phone}
            </p>
            <p>
              <GlobalOutlined className="icon" />{" "}
              <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
                {user.website}
              </a>
            </p>
          </div>
        }
      />
    </Card>
  );
};

export default UserCard;
