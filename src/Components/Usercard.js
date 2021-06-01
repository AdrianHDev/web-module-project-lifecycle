import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background: #93329e;
  border-radius: 80px;
  border: 5px solid #440a67;
  width: 79vw;
  height: 75vh;
  padding: 50px;
  color: #ffe3fe;
  style: flex;
`;

const SideBySideDiv = styled.div`
  display: flex;
  align-items: left;
`;

const StyledPfp = styled.img`
  width: 12rem;
  height: 12rem;
  border: solid #440a67 10px;
  border-radius: 75px;
`;

const StyledHeader = styled.h1`
  margin: auto;
  font-size: 5rem;
`;

const InfoDiv = styled.div`
  margin: 10px;
  background: #b4aee8;
  color: #440a67;
  padding: 8px;
  border: 3px solid #440a67;
  border-radius: 15px;
`;

class Usercard extends React.Component {
  render() {
    return (
      <StyledCard>
        <SideBySideDiv>
          <StyledPfp src={this.props.user.avatar_url} />
          <StyledHeader>{this.props.user.name}</StyledHeader>
        </SideBySideDiv>
        <SideBySideDiv>
          <InfoDiv>
            <h2>Bio:</h2>
            <p>{this.props.user.bio}</p>
          </InfoDiv>
          <InfoDiv>
            <h2>Location: </h2>
            <p>{this.props.user.location}</p>
          </InfoDiv>
          <InfoDiv>
            <h2>Public Repositories:</h2>
            <p>{this.props.user.public_repos}</p>
          </InfoDiv>
        </SideBySideDiv>
        <SideBySideDiv>
            <h2>Followed by:</h2>
            {this.props.followers.map(follower => {
                return (
                    <InfoDiv key={follower.id}>
                        <h3>{follower.login}</h3>
                    </InfoDiv>
                )
            })}
        </SideBySideDiv>
      </StyledCard>
    );
  }
}

export default Usercard;
