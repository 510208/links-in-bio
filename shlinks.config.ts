import { Globe, Newspaper } from "lucide-vue-next";

import {
  GitHubIcon,
  ThreadsIcon,
  InstagramIcon,
  YouTubeIcon,
  WakaTimeIcon,
  XIcon,
  FigmaIcon,
  SteamIcon,
  RedditIcon,
} from "vue3-simple-icons";

import designImage1 from "@/assets/links/mega-link_bg_1.png";
import designImage2 from "@/assets/links/mega-link_bg_2.png";
import type { Config } from "./src/types/config.d";

const config: Config = {
  links: {
    big: [
      {
        label: "個人網站",
        href: "https://510208.github.io",
        title: "Introduction",
        icon: Globe,
        bgImage: designImage1,
      },
      {
        label: "部落格",
        href: "https://samhacker.xyz",
        title: "Blog",
        icon: Newspaper,
        bgImage: designImage2,
      },
    ],
    list: [
      {
        label: "GitHub",
        icon: GitHubIcon,
        href: "https://github.com/510208",
      },
      {
        label: "Threads",
        icon: ThreadsIcon,
        href: "https://www.threads.com/@samhacker.xyz",
      },
      {
        label: "Instagram",
        icon: InstagramIcon,
        href: "https://www.instagram.com/samhacker.xyz",
      },
      {
        label: "YouTube",
        icon: YouTubeIcon,
        href: "https://www.youtube.com/channel/UC6orwHdQNVzwHsA6M7HYD9g",
      },
      {
        label: "WakaTime",
        icon: WakaTimeIcon,
        href: "https://wakatime.com/@SamHacker",
      },
      {
        label: "Twitter",
        icon: XIcon,
        href: "https://x.com/xux510208",
      },
      {
        label: "Figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/@samhacker",
      },
      {
        label: "Steam",
        icon: SteamIcon,
        href: "https://steamcommunity.com/id/PB510208/",
      },
      {
        label: "Reddit",
        icon: RedditIcon,
        href: "https://www.reddit.com/user/DiligentCarpenter421/",
      },
    ],
  },
};

export default config;
