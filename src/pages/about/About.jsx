import React, { useState } from 'react';

import { Input } from '../../components';

const About = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      <Input
        label='თანამდებობა'
        mode='short'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        hint='მინიმუმ 2 სიმბოლო'
        placeholder={'name'}
      />
      <Input
        label='თანამდებობა'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        hint='მინიმუმ 2 სიმბოლო'
        placeholder={'name'}
      />
    </div>
  );
};

export default About;
