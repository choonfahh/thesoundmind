import React from 'react';
import Responsive from 'react-responsive';
import { Header } from 'semantic-ui-react';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const desktopBrowser = {
  chrome: () => <div>
                  <Header size="large">Please activate the Ad Blocker in your Chrome desktop browser.</Header>
                  <Header.Subheader size="small">Note: uBlock Origin isn't supported.</Header.Subheader>
                </div>,
  firefox: () => <div>
                   <Header size="large">Please activate the Ad Blocker in your Firefox desktop browser.</Header>
                     <Header.Subheader size="small">Note: uBlock Origin isn't supported.</Header.Subheader>
                 </div>,
  opera: () => <div>
                 <Header size="large">Please activate the Ad Blocker in your Opera desktop browser.</Header>
                  <Header.Subheader size="small">Note: uBlock Origin isn't supported.</Header.Subheader>
               </div>,
  safari: () => <div>
                  <Header size="large">Please activate the Ad Blocker in your Safari desktop browser.</Header>
                    <Header.Subheader size="small">Note: uBlock Origin isn't supported.</Header.Subheader>
                </div>,
  edge: () => <div>
              <Header size="large">Please activate the Ad Blocker in your Edge desktop browser.</Header>
                <Header.Subheader size="small">Note: uBlock Origin isn't supported.</Header.Subheader>
            </div>,
  default: (browser) => <div>
                          <Header size="large">Our website isn't supported on your desktop browser because it requires an Ad Blocker :(</Header>
                          <Header.Subheader size="small">Click <a href="https://www.google.com/chrome/browser/desktop/index.html">here</a> to download Google Chrome</Header.Subheader>
                          <Header.Subheader size="small">Click <a href="https://chrome.google.com/webstore/detail/adblock/gighmmpiobklfepjocnamgkkbiglidom">here</a> to download AdBlock</Header.Subheader>
                        </div>,
};

const mobileBrowser = {
  firefox: () => <div>
                   <Header size="large">Please activate the Ad Blocker in your Firefox mobile browser.</Header>
                     <Header.Subheader size="small">Note: uBlock Origin isn't supported.</Header.Subheader>
                 </div>,
  opera: () => <div>
                 <Header size="large">Please activate the Ad Blocker in your Opera mobile browser.</Header>
                  <Header.Subheader size="small">Note: uBlock Origin isn't supported.</Header.Subheader>
               </div>,
  default: (browser) => <div>
                          <Header size="large">Our website isn't supported on your mobile browser because it requires an Ad Blocker :(</Header>
                          <Header.Subheader size="small">Click <a href="https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en">here</a> to download Firefox for Android</Header.Subheader>
                          <Header.Subheader size="small">Click <a href="https://itunes.apple.com/sg/app/firefox-web-browser/id989804926?mt=8">here</a> to download Firefox for iOS</Header.Subheader>
                          <Header.Subheader size="small">Click <a href="https://addons.mozilla.org/en-US/firefox/addon/adblock-for-firefox/">here</a> to download AdBlock</Header.Subheader>
                        </div>,
};

export { Desktop, Tablet, Mobile, desktopBrowser, mobileBrowser };
