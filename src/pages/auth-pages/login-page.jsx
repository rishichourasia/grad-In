import { Col, Row, Card } from "antd";
import { useState } from "react";
import "./login-page.css";
import { changeTitle } from "../../utils";
import { titleConstants, loginPageTabList } from "../../utils/constants";
import { LoginCard } from "./components/login-card";
import { SignUpCard } from "./components/signup-card";
import { FooterComponent } from "../../components";

const LoginPage = () => {
  const [activeTabKey1, setActiveTabKey1] = useState("login");
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  const tabList = loginPageTabList;

  const contentList = {
    login: <LoginCard />,
    signup: <SignUpCard />,
  };
  changeTitle(titleConstants.loginPage);
  return (
    <div>
      <Row>
        <Col xs={0} md={9} lg={10}>
          <p className="login_hero_text">
            <span className="text_primary_color">Grad In </span>
            Alumni Connect Community Platform
          </p>
          <div className="login_image_wrapper">
            <img src="./images/Group.svg" alt="" />
          </div>
        </Col>
        <Col md={14} xs={24}>
          <div className="login_wrapper">
            <Card
              className="auth_card"
              title="Welcome to Grad In"
              tabList={tabList}
              activeTabKey={activeTabKey1}
              onTabChange={(key) => {
                onTab1Change(key);
              }}
            >
              {contentList[activeTabKey1]}
            </Card>
          </div>
        </Col>
      </Row>
      {/* <FooterComponent /> */}
    </div>
  );
};

export { LoginPage };
