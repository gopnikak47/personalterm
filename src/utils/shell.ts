import React from 'react';
import * as bin from './bin';

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const args = command.split(' ');
  args[0] = args[0].toLowerCase();

  if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (args[0] in bin) {
    const output = await bin[args[0]](args.slice(1));
    setHistory(output);
  } else {
    setHistory(
      `shell: không tìm thấy lệnh: ${args[0]}. Thử gõ 'help' xem.`,
    );
  }

  setCommand('');
};
