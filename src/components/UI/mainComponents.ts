import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
`;

export const SidebarLayout = styled.div`
  background: #bdbdbd;
  flex: 0 0 152px;
  padding: 35px 0 20px 20px;
`;

export const MainLayout = styled.div`
  flex-basis: 100%;
  padding: 19px 65px 25px 31px;
  position: relative;
`;

interface ButtonPropsType {
  variant?: string;
  color?: string;
  fontSize?: string;
  // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button = styled.button<ButtonPropsType>`
  background: ${({ variant }) => (variant === 'outline' ? 'transparent' : '#4b51ef')};
  border-radius: 5px;
  color: ${({ color }) => (color === 'blue' ? '#4B51EF' : '#fff')};
  outline: none;
  padding: 5px 15px;
  border: none;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '12px')};
`;

export const UserCard = styled.div`
  padding: 10px;
  background: #f3f3f3;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 12px;
`;

export const List = styled.ul`
  padding-left: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  color: #a3a3a3;
  font-size: 11px;
  & span {
    color: #000000;
    margin-left: 7px;
  }
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const Box = styled.div``;
