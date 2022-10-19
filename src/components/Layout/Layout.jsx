import Header from "components/Header";
import { Layout } from "antd";
import styled from "styled-components";

const LayoutStyled = styled(Layout)`
  background-color: #1c233d;
`;

const PrimaryLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <LayoutStyled>{children}</LayoutStyled>
    </Layout>
  );
};

export default PrimaryLayout;
