import React from 'react';

export type HelloWorldProps = {
  greetings?: string;
};

export const HelloWorld: React.FC<HelloWorldProps> = ({
  greetings = 'Jane',
}) => {
  return <div>Hello, {greetings}!</div>;
};
