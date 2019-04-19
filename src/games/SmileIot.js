import React from 'react';
import Page from '../common/Page';
import { Link } from "react-router-dom";

export default function SmileIot(props) {
  return (
    <Page>
      <h1>3rd</h1>
      <Link
        to={{
          pathname: "/",
          state: { prev: false }
        }}
      >
        back
      </Link>
    </Page>
  );
}