import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'onion') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            VỀ TỚ
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">Resume của tớ (sẽ add trong tương lai)</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      DONATE
 @@           @@          @@        @@       <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
  @@           @@        @@        @@        <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u> 
   @@             @@@@@@          @@        B MBBank: 279996868 - Nguyen Hai Anh
     @@@                        @@@         -----------
        @@@                  @@@ @@          LIÊN HỆ 
         @|  @@@@@@@@@@@@@@@@   @@           <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
         @|                      @@          <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                                            m <u><a href="https://facebook.com/${config.social.facebook}" target="_blank">facebook.com/${config.social.facebook}</a></u>
                                            i <u><a href="https://instagram.com/${config.social.instagram}" target="_blank">instagram.com/${config.social.instagram}</a></u>                    
                                          

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             VỀ TỚ
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">Resume của tớ (sẽ add trong tương lai)</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Repo GitHub của project này</a></u>
▐▓                                 ▐▓       -----------
▐▓      > A B O U T O N I O N      ▐▓        DONATE 
▐▓                                 ▐▓        <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u> 
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓          B MBBank: 279996868 - Nguyen Hai Anh 
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             LIÊN HỆ 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                                            m <u><a href="https://facebook.com/${config.social.facebook}" target="_blank">facebook.com/${config.social.facebook}</a></u>
                                            i <u><a href="https://instagram.com/${config.social.instagram}" target="_blank">instagram.com/${config.social.instagram}</a></u>
                                            -----------
                                            Thực sự khuyên các bạn nên xem qua GitHub của <u><a href="https://github.com/Cveinnt">Tác giả Vincent (Cveinnt)<a></u>, và donate cho <a href="https://github.com/Cveinnt">anh ấy<a> nhé! 

`;
  }
};

export default sumfetch;
