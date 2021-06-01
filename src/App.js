import "./App.css";
import Usercard from "./Components/Usercard";
import styled from "styled-components";
import React from "react";


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
    following_url:
      "",
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
    received_events_url:
      "",
    repos_url: "",
    site_admin: false,
    starred_url:
      "",
    subscriptions_url: "",
    twitter_username: null,
    type: "",
    updated_at: "",
    url: "",
  },
  followers: [
    {
      login: "spotlightishere",
      id: 10055256,
      node_id: "MDQ6VXNlcjEwMDU1MjU2",
      avatar_url: "https://avatars.githubusercontent.com/u/10055256?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/spotlightishere",
      html_url: "https://github.com/spotlightishere",
      followers_url: "https://api.github.com/users/spotlightishere/followers",
      following_url:
        "https://api.github.com/users/spotlightishere/following{/other_user}",
      gists_url: "https://api.github.com/users/spotlightishere/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/spotlightishere/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/spotlightishere/subscriptions",
      organizations_url: "https://api.github.com/users/spotlightishere/orgs",
      repos_url: "https://api.github.com/users/spotlightishere/repos",
      events_url:
        "https://api.github.com/users/spotlightishere/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/spotlightishere/received_events",
      type: "User",
      site_admin: false,
    },
    {
      login: "EastAPOLO",
      id: 12688094,
      node_id: "MDQ6VXNlcjEyNjg4MDk0",
      avatar_url: "https://avatars.githubusercontent.com/u/12688094?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/EastAPOLO",
      html_url: "https://github.com/EastAPOLO",
      followers_url: "https://api.github.com/users/EastAPOLO/followers",
      following_url:
        "https://api.github.com/users/EastAPOLO/following{/other_user}",
      gists_url: "https://api.github.com/users/EastAPOLO/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/EastAPOLO/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/EastAPOLO/subscriptions",
      organizations_url: "https://api.github.com/users/EastAPOLO/orgs",
      repos_url: "https://api.github.com/users/EastAPOLO/repos",
      events_url: "https://api.github.com/users/EastAPOLO/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/EastAPOLO/received_events",
      type: "User",
      site_admin: false,
    },
    {
      login: "mastercode10",
      id: 36807046,
      node_id: "MDQ6VXNlcjM2ODA3MDQ2",
      avatar_url: "https://avatars.githubusercontent.com/u/36807046?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mastercode10",
      html_url: "https://github.com/mastercode10",
      followers_url: "https://api.github.com/users/mastercode10/followers",
      following_url:
        "https://api.github.com/users/mastercode10/following{/other_user}",
      gists_url: "https://api.github.com/users/mastercode10/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mastercode10/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/mastercode10/subscriptions",
      organizations_url: "https://api.github.com/users/mastercode10/orgs",
      repos_url: "https://api.github.com/users/mastercode10/repos",
      events_url: "https://api.github.com/users/mastercode10/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mastercode10/received_events",
      type: "User",
      site_admin: false,
    },
    {
      login: "banishlight",
      id: 8949740,
      node_id: "MDQ6VXNlcjg5NDk3NDA=",
      avatar_url: "https://avatars.githubusercontent.com/u/8949740?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/banishlight",
      html_url: "https://github.com/banishlight",
      followers_url: "https://api.github.com/users/banishlight/followers",
      following_url:
        "https://api.github.com/users/banishlight/following{/other_user}",
      gists_url: "https://api.github.com/users/banishlight/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/banishlight/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/banishlight/subscriptions",
      organizations_url: "https://api.github.com/users/banishlight/orgs",
      repos_url: "https://api.github.com/users/banishlight/repos",
      events_url: "https://api.github.com/users/banishlight/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/banishlight/received_events",
      type: "User",
      site_admin: false,
    },
    {
      login: "4nickpick",
      id: 3085512,
      node_id: "MDQ6VXNlcjMwODU1MTI=",
      avatar_url: "https://avatars.githubusercontent.com/u/3085512?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/4nickpick",
      html_url: "https://github.com/4nickpick",
      followers_url: "https://api.github.com/users/4nickpick/followers",
      following_url:
        "https://api.github.com/users/4nickpick/following{/other_user}",
      gists_url: "https://api.github.com/users/4nickpick/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/4nickpick/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/4nickpick/subscriptions",
      organizations_url: "https://api.github.com/users/4nickpick/orgs",
      repos_url: "https://api.github.com/users/4nickpick/repos",
      events_url: "https://api.github.com/users/4nickpick/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/4nickpick/received_events",
      type: "User",
      site_admin: false,
    },
    {
      login: "ZachBosch",
      id: 81101241,
      node_id: "MDQ6VXNlcjgxMTAxMjQx",
      avatar_url: "https://avatars.githubusercontent.com/u/81101241?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ZachBosch",
      html_url: "https://github.com/ZachBosch",
      followers_url: "https://api.github.com/users/ZachBosch/followers",
      following_url:
        "https://api.github.com/users/ZachBosch/following{/other_user}",
      gists_url: "https://api.github.com/users/ZachBosch/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ZachBosch/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/ZachBosch/subscriptions",
      organizations_url: "https://api.github.com/users/ZachBosch/orgs",
      repos_url: "https://api.github.com/users/ZachBosch/repos",
      events_url: "https://api.github.com/users/ZachBosch/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ZachBosch/received_events",
      type: "User",
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
