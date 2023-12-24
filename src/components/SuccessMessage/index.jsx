import { notification } from "antd";
const SuccessMessage = (type, message) => {
  const args = {
    message: type,
    description: message,
    style: {
      width: 300,
      border: 20,
      backgroundColor: "#52c41a",
      color: "#fff",
    },
  };
  notification.open(args);
};

export default SuccessMessage;
