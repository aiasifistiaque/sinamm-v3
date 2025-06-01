import React from 'react';

type TextBreakProps = {
  text?: string;
};

const TextBreak = ({ text = '' }: TextBreakProps) => {
  const words = text?.trim().split(' ');

  if (words?.length > 1) {
    const lastWord = words.pop();
    return (
      <>
        {words?.join(' ')} <br /> {lastWord}
      </>
    );
  }

  return <>{text}</>;
};

export default TextBreak;
