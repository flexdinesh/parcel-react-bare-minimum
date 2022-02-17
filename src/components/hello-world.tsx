import React from 'react';

type Props = {
  greetings?: string;
};

export const HelloWorld: React.FC<Props> = ({
  greetings = 'Jane',
}) => {
  return <div>Hello, {greetings}!</div>;
};
