// import React from "react";

// export default function Feedback() {
//   return (
//     <div id="feedback">
//       <section
//         className="container mx-auto text-center py-6 mb-20 "
//         style={{ height: "100px !important" }}
//       >
//         <div
//           className="text-white py-20"
//           style={{
//             backgroundColor: "linear-gradient(90deg, #184e72 0%, #3179a8 100%)",
//           }}
//         >
//           <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
//             <div className="flex flex-col w-full lg:w-1/3 p-8">
//               <h1 className="ml-6 font-bold text-yellow-300 text-lg uppercase tracking-loose text-center">
//                 REVIEW
//               </h1>
//               <p className="text-3xl md:text-5xl text-black font-bold  my-4 leading-relaxed md:leading-snug">
//                 Leave us a feedback!
//               </p>
//               <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
//                 Please provide your valuable feedback and something something
//                 ...
//               </p>
//             </div>
//             <div className="flex flex-col w-full lg:w-2/3 justify-center">
//               <div className="container w-full px-4">
//                 <div className="flex flex-wrap justify-center">
//                   <div className="w-full lg:w-6/12 px-4">
//                     <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
//                       <div className="flex-auto p-5 lg:p-10">
//                         <h4 className="text-2xl mb-4 text-black font-semibold">
//                           Have a suggestion?
//                         </h4>
//                         <form id="feedbackForm" action method>
//                           <div className="relative w-full mb-3">
//                             <label
//                               className="block uppercase text-gray-700 text-xs font-bold mb-2"
//                               htmlFor="email"
//                             >
//                               Email
//                             </label>
//                             <input
//                               type="email"
//                               name="email"
//                               id="email"
//                               className="border-0 px-3 py-3 rounded text-sm shadow w-full
//                         bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
//                               placeholder=" "
//                               style={{ transition: "all 0.15s ease 0s" }}
//                               required
//                             />
//                           </div>
//                           <div className="relative w-full mb-3">
//                             <label
//                               className="block uppercase text-gray-700 text-xs font-bold mb-2"
//                               htmlFor="message"
//                             >
//                               Message
//                             </label>
//                             <textarea
//                               maxLength={300}
//                               name="feedback"
//                               id="feedback"
//                               rows={4}
//                               cols={80}
//                               className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
//                               placeholder
//                               required
//                               defaultValue={""}
//                             />
//                           </div>
//                           <div className="text-center mt-6">
//                             <button
//                               id="feedbackBtn"
//                               className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
//                               type="submit"
//                               style={{ transition: "all 0.15s ease 0s" }}
//                             >
//                               Submit
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//       </section>
//       <footer
//     style={{background: " #184e72",color: "rgb(241, 185, 0)",fontSize :"10pt", textAlign: "center",justifyContent: "center", alignItems:"center"}}
//       className="w-full align-middle text-center  font-bold p-12 container"
//     >
//       <div style={{ flex: 1, marginTop :"10px" }}>
//        Verior Inc, Copyright &copy; 2021
//       </div>
//     </footer>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Hidden } from "@material-ui/core";
import { Center } from "@chakra-ui/react";

const HorizontalLoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

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
