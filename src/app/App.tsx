import React, { useState } from "react";
import logo from "../content/ZarroeLogoSeafoam-Transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { useId } from "@fluentui/react-hooks";

const logoInfo = [
  { name: "twitch", link: "https://twitch.tv/zarroe" },
  { name: "twitter", link: "https://twitter.com/zarroe_" },
  { name: "discord", link: "https://discord.gg/QBNDYxT75v" },
  { name: "youtube", link: "https://www.youtube.com/channel/UCdNokzQEOaAniDTdOd0vKSw"}
];

interface AppLogoProps {
  logo: any;
}
const AppLogo = (props: AppLogoProps) => {
  return <img src={props.logo} className="App-logo" alt="logo" />;
};
interface SocialLinkProps {
  name: string;
  link: string;
}

const SocialLink = (props: SocialLinkProps) => {
  const [hover, setHover] = useState(false)
  const socialLinkId = useId(`social-link-${props.name}`);
  return (
    <div className={hover ? "icon-container-hover" : "icon-container"}>
      <a
        id={socialLinkId}
        href={props.link}
        className={"icon-container-link"}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <FontAwesomeIcon
          size="2x"
          color="#155148"
          icon={["fab", props.name as IconName]}
        />
      </a>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <main className="app-main">
        <AppLogo logo={logo} />
        <div className="icon-tray">
          {logoInfo.map((info) => {
            return (
              <SocialLink {...info} />
            );
          })}
        </div>
        <div>
          <a className={"vod-link"} href={"https://www.youtube.com/channel/UCOSn25rdcgH5zRcpm9nU3JA"}>Check out the Vods</a>
        </div>
      </main>
    </div>
  );
}

export default App;
