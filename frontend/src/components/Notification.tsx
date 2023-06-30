import styled from "styled-components";
import { useAppSelector } from "../hooks";

const StyledErrorNotification = styled.div`
  background-color: ${(props) => props.theme.colors.failureNotification};
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: 10;
  border-radius: 0.3em;
`;

const StyledSuccessNotification = styled.div`
  background-color: ${(props) => props.theme.colors.successNotification};
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: 10;
  border-radius: 0.3em;
`;

const Notification = () => {
  const notification = useAppSelector(({ notification }) => notification);

  if (!notification.message) {
    return null;
  }

  if (notification.type === 'success') {
    return (
      <StyledSuccessNotification>{notification.message}</StyledSuccessNotification>
    )
  }

  return (
    <StyledErrorNotification>{notification.message}</StyledErrorNotification>
  );
};

export default Notification;
