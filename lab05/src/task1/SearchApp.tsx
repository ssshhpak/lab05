import React, { useState } from 'react';

import {User} from '//types';
import UserCard from '//components/UserCard';

const INITIAL_DATA: User[] = [{
    name: 'Alice',
    email: 'alice@gmail.com'
    age: 30
}, {
    name: 'Bob',
    email: 'bob@gmail.com',
    age: 25
}, {
    name: 'Charlie',
    email: 'char@gmail.com',
    age: 22
}, {
    name: 'David',
    email: 'david@gmail.com',
    age: 28
}, {
    name: 'Eve',
    email: 'eve@gmail.com',
    age: 35
}
];

const SearchApp = () => {
    const [users] = useState<User[]>(INITIAL_DATA);
    const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(term.toLowerCase())));
    }
}

const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSearchTerm('');
    setFilteredUsers(users);
}; {
return (
    <div style={{ padding: '20px' }}>
        <h1>User Search</h1>
        <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name"
            style={{ marginRight : '10px'}}
            />
        <button onClick={handleClear}>Clear</button>
        <div style={{ marginTop : '20px' }}>
           {filteredUsers.lenght === 0 && (
            <p>No users found</p>
           )}
           {filteredUsers.map((user) => (
            <UserCard 
                key={user.email}
                user={user}
                >
                <p>Active</p>
            </UserCard>
           ))}
        </div>
    </div>
    );
};
export default SearchApp;