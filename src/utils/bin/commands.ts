// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Hú hú xin chào! Đây là một số lệnh:
\n${c}\n
[tab]: tự xử đi =)) nó là trigger completion, mà tớ mù tiếng Việt nên chả biết dịch như nào =))
[ctrl+l]/clear: clear cả cái terminal này.\n
Gõ 'sumfetch' để xem thông tin về tớ.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Đang mở repo GitHub...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Xin chàoooooo, tớ là ${config.name} đây, sinh viên K18 Khoa Công nghệ Đa phương tiện, Đại học Công nghiệp Hà Nội. 
Cậu muốn xem thêm về tớ? Hãy gõ lệnh:
'sumfetch' - một chút gì đó của tớ.
'resume' - resume của tớ (thực ra tớ lười làm resume lắm, để hôm khác nhé!).
'readme' - github readme của tớ.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Đang mở resume... (nói thật, chả có gì đâu)';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `cảm ơn vì tấm lòng nhân ái của cậu nhó =)) 
cậu có thể donate tại:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Email tớ hả? Oke đang mở email:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Đang mở GitHub...';
};

export const facebook = async (args: string[]): Promise<string> => {
  window.open(`https://www.facebook.com/${config.social.facebook}/`);

  return 'Đang mở Facebook...';
};

export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.social.instagram}/`);

  return 'Đang mở Instagram...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Đang search google cho ${args.join(' ')}, đợi tí`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Đang search DuckDuckGo cho ${args.join(' ')}, đợi tí`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Cậu định dùng Bing để tìm ${args.join(' ')} đấy à? =)) đùa nhau thật à =)))`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Đang tìm ${args.join(' ')} trên đýt đỏ...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `cậu
đang
tìm
cái
gì
ở
đây?`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `ờm...tớ không thể thêm dir vào đây được
nhưng nếu cậu muốn giúp thì hãy 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `vẫn xài 'vi' cơ à? Vãi chưởng thế? Thử 'vim' đi =)).`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' cũ vl. thử 'nvim' đi =))`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? xịn quá hay sao mà không xài? hay muốn tryhard với 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `biết gì không? hay là dùng vscode đi.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Lệnh bị từ chối =))`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ██╗  ██╗██╗██╗
  ██║  ██║██║██║
  ███████║██║██║
  ██╔══██║██║╚═╝
  ██║  ██║██║██╗
  ╚═╝  ╚═╝╚═╝╚═╝
                
                         
Chào mừng cậu đến với web cá nhân của tớ!
Cậu có thể gõ một số lệnh:
Gõ 'help' để xem các lệnh có thể sử dụng được.
Gõ 'sumfetch' để xem thông tin của tớ.
Gõ 'repo' hoặc bấm <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">cái này</a></u> để xem repo GitHub của web này.
Btw, web này được forked từ LiveTerm của Cveinnt. Check it out.
`;
};
