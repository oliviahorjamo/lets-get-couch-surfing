import styled from "styled-components";
import { useAppSelector } from "../hooks";

const StyledNotification = styled.div`
  background-color: ${(props) => props.theme.colors.failureNotification};
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: 10;
  border-radius: 0.3em;
`;

const Notification = () => {
  const notification = useAppSelector(({ notification }) => notification);

  if (!notification.message) {
    return null;
  }

  return <StyledNotification>{notification.message}</StyledNotification>;
};

export default Notification;
