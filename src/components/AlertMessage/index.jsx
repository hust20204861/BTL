import { notification } from "antd";

const AlertMessage = (type, message) => {
  const args = {
    message: type,
    description: message,
    style: {
      width: 300,
      border: 20,
      backgroundColor: "rgb(255, 235, 230)",
      color: "rgb(191, 38, 0)",
    },
  };
  notification.open(args);
};

export default AlertMessage;
