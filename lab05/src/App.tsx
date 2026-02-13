import React from 'react';

import UserCard from '//components/UserCard';
import SkillList from '//components/SkillList';
import types from '//components/types';

import { User, Skill } from './types';
import SearchApp from './SearchApp';

const App = () => {
  return <SearchApp />;
};

const user: User = {
  name: 'Alice',
  email: 'alice@gmail.com',
  age: 30
}

const skills: Skill[] = [
  { id: 1, name: 'React', level: 'Expert' },
  { id: 2, name: 'TypeScript', level: 'Intermediate' },
  { id: 3, name: 'CSS', level: 'Beginner' }
];

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
    <h1>User Profile</h1>
    <UserCard user={user} isActive={true}>
      <h3>Skills</h3>
      <SkillList skills={skills} />
    </UserCard>
  </div>
  );
};
export default App;