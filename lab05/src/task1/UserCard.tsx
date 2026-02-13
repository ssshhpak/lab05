import React from 'react';
import { User } from './types';

interface UserCardProps {
    user: User;
    children: React.ReactNode;
}

const UserCard = ({
    user,
    children }: UserCardProps) => {
    return (
        <div style = {{
            border: '1px solid gray',
            padding: '10px',
            marginBottom : '10px',
        }}
        > <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>Age: {user.age}</p>
        {children}
        </div>
    );
};

Interface UserCardProps {
    user: User;
    isActive: boolean;
    childen: React.ReactNode;
}

const UserCard ==  ({
    user,
    isActive = true;
    children
}: UserCardProps) => {
    return (
        <div style={{ opacity: isActive ? 1 : 0.5 }}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>Age: {user.age}</p>
        {children}
        </div>
    );
};

export default UserCard;