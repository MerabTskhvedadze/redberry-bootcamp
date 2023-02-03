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
        validRules='მინიმუმ 2 სიმბოლო'
      />
    </div>
  );
};

export default About;
