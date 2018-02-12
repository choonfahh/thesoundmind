import React from 'react';
import Responsive from 'react-responsive';
import { Header } from 'semantic-ui-react';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const desktopBrowser = {
  chrome: () => <div>
                  <Header size="large">Turn on the Ad Blocker in your Chrome desktop browser to stream music now :)</Header>
                  <Header.Subheader size="small">Otherwise, music can't be streamed (this is a prototype that uses Youtube links right now).<br />
                  <i>Note: uBlock Origin isn't supported.</i><br />
                  Download the Ad Blocker <a href="https://chrome.google.com/webstore/detail/adblock/gighmmpiobklfepjocnamgkkbiglidom">here</a></Header.Subheader>
                </div>,
  firefox: () => <div>
                   <Header size="large">Turn on the Ad Blocker in your Firefox desktop browser to stream music now :)</Header>
                  <Header.Subheader size="small">Otherwise, music can't be streamed (this is a prototype that uses Youtube links right now).<br />
                   <i>Note: uBlock Origin isn't supported.</i><br />
                   Download the Ad Blocker <a href="https://addons.mozilla.org/en-US/firefox/addon/adblock-for-firefox/">here</a></Header.Subheader>
                 </div>,
  opera: () => <div>
                 <Header size="large">Turn on the Ad Blocker in your Opera desktop browser to stream music now :)</Header>
                  <Header.Subheader size="small">Otherwise, music can't be streamed (this is a prototype that uses Youtube links right now).<br />
                 <i>Note: uBlock Origin isn't supported.</i><br />
                 Download the Ad Blocker <a href="https://addons.opera.com/en/extensions/details/adblockforopera/?display=en">here</a></Header.Subheader>
               </div>,
  safari: () => <div>
                   <Header size="large">Turn on the Ad Blocker in your Safari desktop browser to stream music now :)</Header>
                  <Header.Subheader size="small">Otherwise, music can't be streamed (this is a prototype that uses Youtube links right now).<br />
                  <i>Note: uBlock Origin isn't supported.</i><br />
                  Download the Ad Blocker <a href="https://getadblock.com/safari/">here</a></Header.Subheader>
                </div>,
  edge: () => <div>
                <Header size="large">Turn on the Ad Blocker in your Edge desktop browser to stream music now :)</Header>
                  <Header.Subheader size="small">Otherwise, music can't be streamed (this is a prototype that uses Youtube links right now).<br />
              <i>Note: uBlock Origin isn't supported.</i><br />
              Download the Ad Blocker <a href="https://getadblock.com/edge/">here</a></Header.Subheader>
            </div>,
  default: (browser) => <div>
                          <Header size="large">Our website isn't supported on your desktop browser because it requires an Ad Blocker :(</Header>
                  <Header.Subheader size="small">Otherwise, music can't be streamed (this is a prototype that uses Youtube links right now).</Header.Subheader>
                          <Header.Subheader size="small">Click <a href="https://www.google.com/chrome/browser/desktop/index.html">here</a> to download Google Chrome</Header.Subheader>
                          <Header.Subheader size="small">Click <a href="https://chrome.google.com/webstore/detail/adblock/gighmmpiobklfepjocnamgkkbiglidom">here</a> to download AdBlock</Header.Subheader>
                        </div>,
};

const mobileBrowser = {
  firefox: () => <div>
                   <Header size="large">Turn on the Ad Blocker in your Firefox mobile browser to stream music now :)</Header>
                  <Header.Subheader size="small">Otherwise, music can't be streamed (this is a prototype that uses Youtube links right now).<br />
                   <i>Note: uBlock Origin isn't supported.</i><br />
                 Download the Ad Blocker <a href="https://addons.mozilla.org/en-US/firefox/addon/adblock-for-firefox/">here</a></Header.Subheader>
                 </div>,
  opera: () => <div>
                 <Header size="large">Turn on the Ad Blocker in your Opera mobile browser to stream music now :)</Header>
                  <Header.Subheader size="small">Otherwise, music can't be streamed (this is a prototype that uses Youtube links right now).<br />
                 <i>Note: uBlock Origin isn't supported.</i><br />
                 Download the Ad Blocker <a href="https://addons.opera.com/en/extensions/details/adblockforopera/?display=en">here</a></Header.Subheader>
               </div>,
  safari: () => <div>
                <Header size="large">Turn on the Ad Blocker in your Safari mobile browser to stream music now :)</Header>
                <Header.Subheader size="small">Otherwise, music can't be streamed (this is a prototype that uses Youtube links right now).<br />
                <i>Note: uBlock Origin isn't supported.</i><br />
                Download the Ad Blocker <a href="https://itunes.apple.com/app/adblock-plus-abp/id1028871868">here</a>
              </Header.Subheader>
              </div>,
  default: (browser) => <div>
                          <Header size="large">Our website isn't supported on your mobile browser because it requires an Ad Blocker :(</Header>
                  <Header.Subheader size="small">Otherwise, music can't be streamed (this is a prototype that uses Youtube links right now).</Header.Subheader>
                          <Header.Subheader size="small">Click <a href="https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en">here</a> to download Firefox for Android</Header.Subheader>
                          <Header.Subheader size="small">Click <a href="https://addons.mozilla.org/en-US/firefox/addon/adblock-for-firefox/">here</a> to download AdBlock</Header.Subheader>
                          <Header.Subheader size="small">Please use your Safari browser for iOS</Header.Subheader>
                        </div>,
};

export { Desktop, Tablet, Mobile, desktopBrowser, mobileBrowser };
