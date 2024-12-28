import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--background);
  padding: 10px;
`;

const PageTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const SubscriberBar = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 15px;
`;

const SubscriberItem = styled.a`
  flex: 0 0 auto;
  width: 280px;
  background-color: var(--card-background);
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Content = styled.div`
  padding: 10px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 5px;
  color: ${({ theme }) => theme.text};
`;

const Views = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const ThemeButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--button-bg);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const subscriptions = [
  {
    title: "How to Ace JavaScript Interviews",
    channel: "Code With Me",
    views: "12k views • 1 day ago",
    thumbnail:
      "https://i.ytimg.com/vi/ucn4jAPWBdQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC8pw6bUQrSE0SlSLnwcTKlYjlqPw",
    url: "https://youtu.be/ucn4jAPWBdQ?si=1FVuI8KNmEm10eyP",
  },
  {
    title: "Healthy Recipes for Beginners",
    channel: "Foodie Channel",
    views: "5k views • 3 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/_f4ArgoSmoM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDZQBI63UibUwQtu486-L0BtFD9QA",
    url: "https://youtu.be/_f4ArgoSmoM?si=HpT25FIovTgQTeTz",
  },
  {
    title: "Yoga for Beginners",
    channel: "Fitness Gurus",
    views: "18k views • 1 week ago",
    thumbnail:
      "https://i.ytimg.com/vi/T41mYCmtWls/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDm9ZGXiKyWVA2UYwnHVbQvwDVvag",
    url: "https://youtu.be/T41mYCmtWls?si=5QPYAvatCmLPid2O",
  },
];

const Subscription = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Container>
      <PageTitle>Your Subscriptions</PageTitle>
      <SubscriberBar>
        {subscriptions.map((subscription, index) => (
          <SubscriberItem href={subscription.url} key={index}>
            <div>
              <Thumbnail src={subscription.thumbnail} alt="Thumbnail" />
            </div>
            <Content>
              <Title>{subscription.title}</Title>
              <Views>{subscription.views}</Views>
            </Content>
          </SubscriberItem>
        ))}
      </SubscriberBar>
    </Container>
  );
};

export default Subscription;
