import React from 'react';
import Responsive from 'react-responsive';
import { Header } from 'semantic-ui-react';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const desktopBrowser = {
  chrome: () => <div>
                  <Header size="large">You have not activated AdBlock in your Chrome desktop browser :(</Header>
                  <Header.Subheader size="small">Click <a href="https://chrome.google.com/webstore/detail/adblock/gighmmpiobklfepjocnamgkkbiglidom">here</a> to activate it</Header.Subheader>
                </div>,
  firefox: () => <div>
                   <Header size="large">You have not activated AdBlock in your Firefox desktop browser :(</Header>
                   <Header.Subheader size="small">Click <a href="https://addons.mozilla.org/en-US/firefox/addon/adblock-for-firefox/">here</a> to activate it</Header.Subheader>
                 </div>,
  opera: () => <div>
                 <Header size="large">You have not activated AdBlock in your Opera desktop browser :(</Header>
                 <Header.Subheader size="small">Click <a href="https://addons.opera.com/en/extensions/details/adblockforopera/?display=en">here</a> to activate it</Header.Subheader>
               </div>,
  safari: () => <div>
                  <Header size="large">You have not activated AdBlock in your Safari desktop browser :(</Header>
                  <Header.Subheader size="small">Click <a href="https://safari-extensions.apple.com/details/?id=com.betafish.adblockforsafari-UAMUU4S2D9">here</a> to activate it</Header.Subheader>
                </div>,
  edge: () => <div>
              <Header size="large">You have not activated AdBlock in your Edge desktop browser :(</Header>
              <Header.Subheader size="small">Click <a href="https://www.microsoft.com/en-sg/store/p/adblock/9nblggh4rfhk">here</a> to activate it</Header.Subheader>
            </div>,
  default: (browser) => <div>
                          <Header size="large">Our website isn't supported on your desktop browser :(</Header>
                          <Header.Subheader size="small">Click <a href="https://www.google.com/chrome/browser/desktop/index.html">here</a> to download Google Chrome</Header.Subheader>
                          <Header.Subheader size="small">Click <a href="https://chrome.google.com/webstore/detail/adblock/gighmmpiobklfepjocnamgkkbiglidom">here</a> to activate AdBlock</Header.Subheader>
                        </div>,
};

const mobileBrowser = {
  firefox: () => <div>
                   <Header size="large">You have not activated AdBlock in your Firefox mobile browser :(</Header>
                   <Header.Subheader size="small">Click <a href="https://addons.mozilla.org/en-US/firefox/addon/adblock-for-firefox/">here</a> to activate it</Header.Subheader>
                 </div>,
  opera: () => <div>
                 <Header size="large">You have not activated AdBlock in your Opera mobile browser :(</Header>
                 <Header.Subheader size="small">Click <a href="https://addons.opera.com/en/extensions/details/adblockforopera/?display=en">here</a> to activate it</Header.Subheader>
               </div>,
  default: (browser) => <div>
                          <Header size="large">Our website isn't supported on your mobile browser :(</Header>
                          <Header.Subheader size="small">Click <a href="https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en">here</a> to download Firefox for Android</Header.Subheader>
                          <Header.Subheader size="small">Click <a href="https://itunes.apple.com/sg/app/firefox-web-browser/id989804926?mt=8">here</a> to download Firefox for iOS</Header.Subheader>
                          <Header.Subheader size="small">Click <a href="https://addons.mozilla.org/en-US/firefox/addon/adblock-for-firefox/">here</a> to activate AdBlock</Header.Subheader>
                        </div>,
};

export { Desktop, Tablet, Mobile, desktopBrowser, mobileBrowser };
