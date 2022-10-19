import { useState, useEffect } from "react";
import styled from "styled-components";
import { Avatar, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connectWallet, hashShortener, disConnect } from "sdk/iconSDK.js";
import { EthereumInstance } from "sdk/metamask.js";

const HeaderStyled = styled(Layout.Header)`
  position: fixed;
  z-index: 99;
  width: 100%;
  display: flex;
  align-items: center;
`;


const UserStyled = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-left: 10px;
`;

// eslint-disable-next-line arrow-body-style
const Header = () => {
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [metamaskAddress, setMetamaskAddress] = useState(
    localStorage.getItem("metamask-address")
  );
  useEffect(() => {
    if (localStorage.getItem("metamask-address")) {
      EthereumInstance.getEthereumAccounts();
    }
  }, []);
  const connectMetamask = async (setMetamaskAddress) => {
    if (localStorage.getItem("metamask-address")) {
      EthereumInstance.getEthereumAccounts();
    } else {
      const account = await EthereumInstance.connectMetaMaskWallet();
      setMetamaskAddress(account[0]);
    }
  };
  return (
    <HeaderStyled>

        <div className="header-lg">
          {address || metamaskAddress ? (
            <UserStyled
              style={{
                paddingRight: 20,
                marginRight: 20,
              }}
            >
              <Avatar size={30} icon={<UserOutlined />} />
              <span style={{ marginLeft: 5, color: "#fff" }}>
                {address
                  ? hashShortener(address)
                  : hashShortener(metamaskAddress)}
              </span>
              <button
                className="connect-btn"
                onClick={() => {
                  disConnect();
                  setAddress("");
                  setMetamaskAddress("");
                }}
              >
                Disconnect
              </button>
            </UserStyled>
          ) : (
            <>
              <button
                className="connect-btn"
                onClick={() => connectWallet(setAddress)}
              >
                Connect Hana
              </button>
              <button
                className="connect-btn"
                onClick={() => connectMetamask(setMetamaskAddress)}
              >
                Connect Metamask
              </button>
            </>
          )}
        </div>
    </HeaderStyled>
  );
};

export default Header;
