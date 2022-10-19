import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { Input } from "antd";
import { PrimaryLayout } from "components/Layout";
import { transfer } from "sdk/iconSDK.js";
import { EthereumInstance } from "sdk/metamask.js";
const DashboardStyle = styled.div`
  ul {
    li {
      list-style-type: none;
      padding: 0;
      display: inline;
      margin-right: 20px;
    }
  }
  .error-message {
    color: red;
    font-size: 14px;
  }
  .send-btn {
    background-color: black;
  }
`;
const Dashboard = () => {

  const sendToken = (price) => {
    transfer({
      to: "hxd2a3d25b71df7c58c9289606eb590baa91efb590", //TicketPal
      value: price,
    });
  };

  const onSubmit = async (values) => {
    sendToken(values.price);
  };

  const transferMetaMask = async (values) => {
    EthereumInstance.transfer(
      "0x773539d4Ac0e786233D90A233654ccEE26a613D9",
      values.price
    );
  };

  const required = (value) => (value ? undefined : "Required");
  const mustBeNumber = (value) =>
    isNaN(value) ? "Must be a number" : undefined;
  const minValue = (min) => (value) =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
  return (
    <PrimaryLayout>
      <DashboardStyle>
        <div className="App">
          <header className="App-header">
            <div className="info-form">
              <Form
                onSubmit={onSubmit}
                render={({
                  handleSubmit,
                  form,
                  submitting,
                  pristine,
                  values,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Field
                      name="price"
                      validate={composeValidators(
                        required,
                        mustBeNumber,
                        minValue(0)
                      )}
                    >
                      {({ input, meta }) => (
                        <div>
                          <Input
                            {...input}
                            type="number"
                            placeholder="input price"
                          />
                          {meta.error && meta.touched && (
                            <span className="error-message">{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>

                    <div className="buttons">
                      <button
                        className="send-btn"
                        type="submit"
                        disabled={submitting}
                      >
                        Send ICX
                      </button>
                      <button
                        className="send-btn"
                        type="button"
                        onClick={() => {
                          transferMetaMask(values);
                        }}
                      >
                        Send Metamask
                      </button>
                    </div>
                  </form>
                )}
              />
            </div>
          </header>
        </div>
      </DashboardStyle>
    </PrimaryLayout>
  );
};

export default Dashboard;
