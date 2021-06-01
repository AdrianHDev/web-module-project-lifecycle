import "./App.css";
import Usercard from "./Components/Usercard";
import styled from "styled-components";
import React from "react";
import axios from "axios";

const StyledPage = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  minheight: 100%;
  background: #b4aee8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const initialState = {
  user: {
    avatar_url: "",
    bio: "",
    blog: "",
    company: null,
    created_at: "",
    email: null,
    events_url: "",
    followers: 0,
    followers_url: "",
    following: 13,
    following_url: "",
    gists_url: "",
    gravatar_id: "",
    hireable: null,
    html_url: "",
    id: 0,
    location: "",
    login: "",
    name: "",
    node_id: "",
    organizations_url: "",
    public_gists: 0,
    public_repos: 0,
    received_events_url: "",
    repos_url: "",
    site_admin: false,
    starred_url: "",
    subscriptions_url: "",
    twitter_username: null,
    type: "",
    updated_at: "",
    url: "",
  },
  followers: [
    {
      login: "",
      id: 0,
      node_id: "",
      avatar_url: "",
      gravatar_id: "",
      url: "",
      html_url: "",
      followers_url: "",
      following_url: "",
      gists_url: "",
      starred_url: "",
      subscriptions_url: "",
      organizations_url: "",
      repos_url: "",
      events_url: "",
      received_events_url: "",
      type: "",
      site_admin: false,
    },
  ],
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/AdrianHDev").then((res) => {
      this.setState({ ...this.state, user: res.data });
      axios.get(res.data.followers_url).then((res) => {
        console.log(res);
        this.setState({ ...this.state, followers: res.data });
      });
    });
  }

  render() {
    return (
      <StyledPage>
        <Usercard user={this.state.user} followers={this.state.followers} />
      </StyledPage>
    );
  }
}

export default App;
