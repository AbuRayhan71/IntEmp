import React from 'react';
import { Grid, Image } from "@chakra-ui/react";
import styled from 'styled-components';

interface NotificationItemProps {
    title: string;
    category: string;
    date: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ title, category, date }) => {
    return (
        <StyledGridItem>
            <NotificationHeader>{title}</NotificationHeader>
            <CategoryText>{category}</CategoryText>
            <DateText>{date}</DateText>
            <StyledIconContainer>
                <Image src="/images/eye.png" alt="View Notification" />
                <Image src="/images/bin.png" alt="Delete Notification" />
            </StyledIconContainer>
        </StyledGridItem>
    );
}

export default function Notifications() {
    return (
        <div>
            <StyledNotificationBox>
                <NotifMainHeader>Notifications</NotifMainHeader>
                <StyledList>
                    <li>Direct</li>
                    <li>Inbox</li>
                </StyledList>

                <StyledGridContainer templateRows='repeat(4, 1fr)' gap={2}>
                    <NotificationItem title="Upcoming Events" category="NBA - Sports" date="Jan 05 2024" />
                    <NotificationItem title="Upcoming Events" category="Idefest - Arts" date="Nov 10 2024" />
                    <NotificationItem title="Upcoming Events" category="Artshow - Arts" date="Nov 20 2024" />
                    <NotificationItem title="Upcoming Events" category="Museum walk - Arts" date="Nov 22 2024" />
                </StyledGridContainer>
            </StyledNotificationBox>
        </div>
    );
}

// Styled Components
const StyledNotificationBox = styled.div`
    background-color: lightgray;
    height: auto;
    width: 30%;
    max-height: 1100px;
    position: fixed;
    top: 10%;
    right: 10%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
`;

const NotifMainHeader = styled.h3`
    font-size: 36px;
    font-weight: 600;
    padding: 0 0 0 30px;
    margin-bottom: 0;
`;

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    padding-left: 5px;

    & > li {
        padding: 0 0 0 30px;
        font-size: 20px;
        text-decoration: underline;
    }
`;

const StyledGridContainer = styled(Grid)`
    padding: 20px 0 0 20px;
    margin-bottom: 10px;
`;

const StyledIconContainer = styled.div`
    display: flex;
    position: relative;
    left: 80%;
    padding: 10px;

    & > img {
        padding: 0 5px 0 0;
    }
`;

const StyledGridItem = styled.div`
    width: 70%;
    height: auto;
    background-color: #979797;
    border-radius: 30px;
    padding: 20px;
`;

const NotificationHeader = styled.h3`
    font-weight: 600;
    margin-bottom: 10px;
`;

const CategoryText = styled.h4`
    margin-bottom: 10px;
`;

const DateText = styled.p`
    margin-bottom: 20px;
`;
