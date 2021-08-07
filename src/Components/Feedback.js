
import React, { useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Hidden } from "@material-ui/core";
import { Center } from "@chakra-ui/react";

const HorizontalLoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); 

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" ,paddingBottom:"10px"}}>
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
              style={{
                backgroundColor: "#F2B138",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
              }}
            >
              Send
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

const FooterPage = () => {
  return (
    <div>
      <MDBFooter
        style={{
          backgroundColor: "#003F63",
          paddingTop: "50px",
        }}
        className="font-small pt-8 mt-4 "
      >
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="`10">
              <div>
                <Hidden only="xs">
                  <div style={{ width: "70em" }}>
                    <h1
                      style={{
                        color: "#F2B138",
                        fontFamily: "League Spartan ",
                        fontSize: "32pt",
                        marginLeft: "8em",
                      }}
                    >
                      Subscribe our newsletter for being updated
                    </h1>
                  </div>
                </Hidden>
              </div>

              <Hidden only="lg">
                <h1
                  style={{
                    color: "#F2B138",
                    fontFamily: "League Spartan",
                    fontSize: "16pt",
                  }}
                >
                  Subscribe our newsletter for being updated
                </h1>
              </Hidden>
              <Hidden only="xs">
                <div style={{ marginLeft: "35em" }}>
                  <HorizontalLoginForm />
                </div>
                <br/>
              </Hidden>
              <Hidden only="lg">
                <div>
                  <HorizontalLoginForm />
          
                </div>
              </Hidden>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <span>
              <i className="fa fa-facebook"></i>
            </span>
            &copy; {new Date().getFullYear()} Copyright: <a> Verior </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default FooterPage;
