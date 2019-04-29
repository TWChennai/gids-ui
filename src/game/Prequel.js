import React from "react";
import Page from "../common/Page";
import './dashboard.css'
import _ from 'lodash';
import {countDownTimer} from "../lib/timer";
import {Col, Container, Row} from "react-bootstrap";

export default class Prequel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {status: 'ready'};
    this.start = this.start.bind(this);
    this.kickoff = this.kickoff.bind(this);
  }

  start() {
    const {onStart = _.noop} = this.props;
    onStart();
  }

  kickoff() {
    countDownTimer({
      tick: () => {
        const {countDown} = this.state;
        this.setState({countDown: countDown - 1});
      },
      completed: () => {
        this.setState({countDown: 0, status: 'begin'});
      },
    });
    this.setState({status: 'start', countDown: 3});
  }

  renderMessage() {
    const {status, countDown} = this.state;
    switch (status) {
      case "ready":
        return (
            <Page>
              <a className="gooey" onClick={this.kickoff}>
                <span className="link">Start</span>
              </a>
            </Page>
        );
      case "start":
        return (
            <Page>
              <div className="gooey no-pointer">
                <span className="link">{countDown}</span>
              </div>
            </Page>
        );
      case "begin":
        return (
            <Page>
              <Container>
                <Row>
                  <Col>
                    <div className="save-the-server">
                      <p>You are in a world that runs on <strong>Open Source Software.</strong> But there are forces
                        beyond reason, that
                        are constantly threatening the ways of the internet. </p>
                      <p>As you’re reading this, <strong>hackers</strong> are breaking
                        into your most-dependable open source web server. </p>
                      <p>The future of internet is in <strong>your hands</strong> right now. Complete all levels of the
                        challenge and save the day!</p>
                      <div className="action">
                        <a className="link" onClick={this.start}>Save the Server</a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <a className="gooey" onClick={this.start}>
                <span className="link" >Save the Server</span>
              </a>
            </Page>
        );
      default:
        return (<a>Welcome</a>);
    }
  }

  render() {
    return this.renderMessage();
  };
}