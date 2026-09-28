import { spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const blogDataPath = path.join(root, "src/config/blog-data.json");
const imageRoot = path.join(root, "public/images/blog");

const copper = "#c8863c";
const gold = "#f0c46c";
const teal = "#35d3c5";
const red = "#d45f52";
const orange = "#f08a3e";
const green = "#56c271";
const blue = "#6aa8ff";
const purple = "#9b7cff";
const cream = "#f6e6c4";

const imagePlan = {
  "how-to-watch-mlb-playoffs-2026": {
    hero: {
      scene: "mlbHero",
      file: "mlb-playoffs-2026-baseball-stadium-streaming-hero.webp",
      alt: "Baseball stadium at night with a glowing diamond, baseball, bracket cards, and a home TV streaming setup"
    },
    inline: [
      {
        scene: "mlbBracket",
        file: "mlb-playoffs-2026-postseason-bracket-schedule.webp",
        alt: "Postseason baseball bracket and game schedule cards over a copper-lit baseball diamond"
      },
      {
        scene: "mlbLivingRoom",
        file: "mlb-playoffs-2026-living-room-baseball-streaming.webp",
        alt: "Living room television streaming a baseball game with a remote, baseball, and warm game-night lighting"
      }
    ]
  },
  "how-to-watch-world-series-2026": {
    hero: {
      scene: "worldSeriesHero",
      file: "world-series-2026-championship-baseball-streaming-hero.webp",
      alt: "Championship baseball stadium under bright lights with a trophy silhouette, baseball, and living room viewing screen"
    },
    inline: [
      {
        scene: "worldSeriesSchedule",
        file: "world-series-2026-games-1-7-schedule.webp",
        alt: "Premium World Series Games 1 through 7 schedule board beside a baseball diamond under stadium lights"
      },
      {
        scene: "worldSeriesBroadcast",
        file: "world-series-2026-broadcast-tv-viewing.webp",
        alt: "Championship baseball broadcast concept on a home television with studio lights and a baseball field graphic"
      }
    ]
  },
  "how-to-watch-nba-games-2026-27": {
    hero: {
      scene: "nbaHero",
      file: "nba-2026-27-basketball-arena-streaming-hero.webp",
      alt: "Basketball arena with a glowing court, hoop, basketball, and home streaming screen"
    },
    inline: [
      {
        scene: "nbaDecision",
        file: "nba-2026-27-channel-decision-board.webp",
        alt: "Basketball viewing choice board comparing national, local, and league subscription paths"
      },
      {
        scene: "nbaDevices",
        file: "nba-2026-27-multi-device-streaming.webp",
        alt: "Basketball game streaming across a TV, tablet, and phone with an orange court backdrop"
      }
    ]
  },
  "best-iptv-player-for-firestick-2026": {
    hero: {
      scene: "playerHero",
      file: "firestick-iptv-player-selection-hero.webp",
      alt: "Streaming stick and remote in front of a television showing a polished IPTV player selection interface"
    },
    inline: [
      {
        scene: "playerComparison",
        file: "firestick-iptv-player-comparison.webp",
        alt: "Three IPTV player comparison panels with guide, favorites, and playback features highlighted"
      },
      {
        scene: "playerEpg",
        file: "firestick-remote-friendly-epg-comparison.webp",
        alt: "Remote-friendly IPTV channel guide interface on a television with large readable program rows"
      }
    ]
  },
  "how-to-install-iptv-on-firestick-2026": {
    hero: {
      scene: "installHero",
      file: "firestick-iptv-installation-setup-hero.webp",
      alt: "Streaming stick, TV, and remote showing an IPTV installation setup checklist"
    },
    inline: [
      {
        scene: "installDownloader",
        file: "firestick-downloader-install-workflow.webp",
        alt: "Downloader-style installation workflow with download, install, and open steps on a TV screen"
      },
      {
        scene: "installLogin",
        file: "firestick-m3u-xtream-login-setup.webp",
        alt: "IPTV setup screen with M3U and Xtream login options using fictional example fields"
      }
    ]
  },
  "iptv-smarters-pro-firestick-setup": {
    hero: {
      scene: "smartersHero",
      file: "iptv-smarters-firestick-category-interface-hero.webp",
      alt: "Fire TV setup showing an original tile-based IPTV player interface inspired by live TV, movies, and series categories"
    },
    inline: [
      {
        scene: "smartersLogin",
        file: "iptv-smarters-xtream-login-example.webp",
        alt: "Original Xtream credentials login concept on a television with fictional server, username, and password fields"
      },
      {
        scene: "smartersTiles",
        file: "iptv-smarters-live-tv-movies-series-interface.webp",
        alt: "Original IPTV home interface with separate Live TV, Movies, and Series tiles on a dark television screen"
      }
    ]
  },
  "tivimate-firestick-setup-2026": {
    hero: {
      scene: "tivimateHero",
      file: "tivimate-firestick-epg-channel-guide-hero.webp",
      alt: "Television with a polished IPTV channel guide grid beside a streaming remote and compact device"
    },
    inline: [
      {
        scene: "tivimateSetup",
        file: "tivimate-playlist-epg-setup.webp",
        alt: "Playlist and EPG setup concept showing guide data flowing into a TV channel schedule"
      },
      {
        scene: "tivimateGroups",
        file: "tivimate-favorites-channel-groups.webp",
        alt: "Favorites and channel groups interface with highlighted guide rows and a remote cursor"
      }
    ]
  },
  "xtream-codes-iptv-setup-guide": {
    hero: {
      scene: "xtreamHero",
      file: "xtream-codes-iptv-fictional-login-hero.webp",
      alt: "TV setup showing fictional Server URL, Username, and Password fields flowing into an IPTV player"
    },
    inline: [
      {
        scene: "xtreamVsM3u",
        file: "xtream-codes-vs-m3u-setup-comparison.webp",
        alt: "Xtream Codes versus M3U setup comparison with fictional credentials and playlist URL examples"
      },
      {
        scene: "xtreamDevices",
        file: "xtream-codes-multi-device-setup.webp",
        alt: "Fictional Xtream IPTV account setup shared across a television, tablet, and phone"
      }
    ]
  },
  "best-iptv-apps-smart-tv-2026": {
    hero: {
      scene: "smartTvHero",
      file: "smart-tv-iptv-app-platforms-hero.webp",
      alt: "Modern smart TV surrounded by neutral platform tiles representing Tizen, webOS, and Android TV style app choices"
    },
    inline: [
      {
        scene: "smartTvComparison",
        file: "smart-tv-iptv-app-comparison.webp",
        alt: "Smart TV app comparison board with neutral platform columns and IPTV app feature rows"
      },
      {
        scene: "smartTvDevice",
        file: "smart-tv-native-app-vs-streaming-device.webp",
        alt: "Native smart TV app path compared with an external streaming device connected by HDMI"
      }
    ]
  },
  "how-to-fix-iptv-buffering-freezing": {
    hero: {
      scene: "bufferHero",
      file: "iptv-buffering-router-wifi-hero.webp",
      alt: "Television stream stuck on a buffering spinner beside a router and Wi-Fi signal warnings"
    },
    inline: [
      {
        scene: "bufferDiagnostic",
        file: "iptv-buffering-router-diagnostics.webp",
        alt: "Router, Wi-Fi, device, and TV diagnostic scene with signal strength and latency indicators"
      },
      {
        scene: "bufferChain",
        file: "iptv-buffering-troubleshooting-chain.webp",
        alt: "Troubleshooting chain from source to internet to router to device to IPTV player with a highlighted weak link"
      }
    ]
  }
};

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  })[char]);
}

function svg(width, height, scene, body) {
  const id = `${scene}-${width}-${height}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">
  <defs>
    <linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#050b10"/>
      <stop offset="0.48" stop-color="#101922"/>
      <stop offset="1" stop-color="#21150d"/>
    </linearGradient>
    <radialGradient id="glow-${id}" cx="50%" cy="30%" r="72%">
      <stop offset="0" stop-color="#f0c46c" stop-opacity=".32"/>
      <stop offset=".5" stop-color="#c8863c" stop-opacity=".14"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft-${id}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#000000" flood-opacity=".42"/>
    </filter>
    <style>
      .label{font-family:Arial,Helvetica,sans-serif;font-weight:700;letter-spacing:0;fill:${cream}}
      .small{font-family:Arial,Helvetica,sans-serif;font-weight:700;letter-spacing:0;fill:#d7c9ad}
      .muted{fill:#7f8c95}
      .line{stroke:${gold};stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
      .thin{stroke:${copper};stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
      .panel{fill:#101922;stroke:#31414d;stroke-width:2}
    </style>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg-${id})"/>
  <rect width="100%" height="100%" fill="url(#glow-${id})"/>
  ${body}
</svg>`;
}

const rounded = (x, y, w, h, r, fill, stroke = "#344650", sw = 2, extra = "") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${extra}/>`;

const text = (value, x, y, size = 28, klass = "label", anchor = "middle") =>
  `<text x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}" class="${klass}">${esc(value)}</text>`;

function tv(x, y, w, h, content, accent = copper) {
  return `<g>
    ${rounded(x, y, w, h, 24, "#081116", "#4d5b62", 3)}
    ${rounded(x + 24, y + 24, w - 48, h - 62, 16, "#0e1a22", "#26343c", 2)}
    <rect x="${x + w * 0.43}" y="${y + h - 34}" width="${w * 0.14}" height="38" rx="6" fill="#27343a"/>
    <rect x="${x + w * 0.34}" y="${y + h}" width="${w * 0.32}" height="12" rx="6" fill="#48545a"/>
    <path d="M${x + 40} ${y + 48}H${x + w - 40}" stroke="${accent}" stroke-width="4" opacity=".7"/>
    ${content}
  </g>`;
}

function remote(x, y, rot = -12) {
  return `<g transform="rotate(${rot} ${x + 30} ${y + 95})">
    ${rounded(x, y, 60, 190, 26, "#101820", "#56626b", 2)}
    <circle cx="${x + 30}" cy="${y + 34}" r="12" fill="${gold}"/>
    <circle cx="${x + 30}" cy="${y + 82}" r="23" fill="#1e2a32" stroke="${copper}" stroke-width="3"/>
    <circle cx="${x + 30}" cy="${y + 82}" r="8" fill="${cream}"/>
    ${[0, 1, 2].map((i) => `<rect x="${x + 17}" y="${y + 124 + i * 18}" width="26" height="7" rx="4" fill="#6d7880"/>`).join("")}
  </g>`;
}

function stick(x, y, rot = 8) {
  return `<g transform="rotate(${rot} ${x + 80} ${y + 22})">
    ${rounded(x, y, 160, 44, 20, "#111921", "#59656d", 2)}
    <rect x="${x + 160}" y="${y + 12}" width="38" height="20" rx="4" fill="#3b454b"/>
    <circle cx="${x + 34}" cy="${y + 22}" r="8" fill="${copper}"/>
  </g>`;
}

function baseball(x, y, r, rotate = 0) {
  return `<g transform="rotate(${rotate} ${x} ${y})">
    <circle cx="${x}" cy="${y}" r="${r}" fill="#efe7d6" stroke="#b89d74" stroke-width="3"/>
    <path d="M${x - r * .45} ${y - r * .85}C${x - r * .2} ${y - r * .25} ${x - r * .2} ${y + r * .25} ${x - r * .45} ${y + r * .85}" fill="none" stroke="${red}" stroke-width="${Math.max(2, r * .08)}"/>
    <path d="M${x + r * .45} ${y - r * .85}C${x + r * .2} ${y - r * .25} ${x + r * .2} ${y + r * .25} ${x + r * .45} ${y + r * .85}" fill="none" stroke="${red}" stroke-width="${Math.max(2, r * .08)}"/>
  </g>`;
}

function diamond(cx, cy, size, color = "#1d6c48") {
  return `<g>
    <path d="M${cx} ${cy - size}L${cx + size} ${cy}L${cx} ${cy + size}L${cx - size} ${cy}Z" fill="${color}" stroke="${gold}" stroke-width="5"/>
    <path d="M${cx} ${cy - size * .54}L${cx + size * .54} ${cy}L${cx} ${cy + size * .54}L${cx - size * .54} ${cy}Z" fill="#b68243" opacity=".9"/>
    <circle cx="${cx}" cy="${cy}" r="${size * .1}" fill="#f6e6c4"/>
  </g>`;
}

function stadiumLights(width) {
  return `<g opacity=".95">
    ${[130, width - 130].map((x) => `<g>
      <rect x="${x - 7}" y="92" width="14" height="230" fill="#2e3b42"/>
      <path d="M${x - 58} 84H${x + 58}" stroke="#87949b" stroke-width="10" stroke-linecap="round"/>
      ${[-40, -14, 14, 40].map((dx) => `<circle cx="${x + dx}" cy="84" r="15" fill="${gold}"/>`).join("")}
    </g>`).join("")}
  </g>`;
}

function bracket(x, y, w, h, labels) {
  return `<g>
    ${labels.map((label, i) => {
      const yy = y + i * (h + 18);
      return `${rounded(x, yy, w, h, 12, "#111c24", "#7b5730", 2)}${text(label, x + w / 2, yy + h / 2 + 9, 20, "small")}`;
    }).join("")}
    <path d="M${x + w} ${y + h / 2}H${x + w + 35}V${y + h * 1.5 + 18}H${x + w}" fill="none" class="line"/>
    <path d="M${x + w} ${y + h * 2.5 + 36}H${x + w + 35}V${y + h * 3.5 + 54}H${x + w}" fill="none" class="line"/>
    <path d="M${x + w + 35} ${y + h * 1.5 + 18}H${x + w + 76}V${y + h * 2.5 + 36}H${x + w + 35}" fill="none" class="line"/>
  </g>`;
}

function court(cx, cy, w, h) {
  return `<g>
    <rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="18" fill="#a85b2d" stroke="${gold}" stroke-width="4"/>
    <line x1="${cx}" y1="${cy - h / 2}" x2="${cx}" y2="${cy + h / 2}" class="thin"/>
    <circle cx="${cx}" cy="${cy}" r="${h * .23}" fill="none" class="thin"/>
    <path d="M${cx - w / 2} ${cy - h * .22}H${cx - w * .28}V${cy + h * .22}H${cx - w / 2}" fill="none" class="thin"/>
    <path d="M${cx + w / 2} ${cy - h * .22}H${cx + w * .28}V${cy + h * .22}H${cx + w / 2}" fill="none" class="thin"/>
  </g>`;
}

function basketball(x, y, r) {
  return `<g>
    <circle cx="${x}" cy="${y}" r="${r}" fill="${orange}" stroke="#6e351b" stroke-width="4"/>
    <path d="M${x - r} ${y}H${x + r}M${x} ${y - r}V${y + r}" stroke="#5a2a17" stroke-width="4"/>
    <path d="M${x - r * .64} ${y - r * .78}C${x - r * .25} ${y - r * .2} ${x - r * .25} ${y + r * .2} ${x - r * .64} ${y + r * .78}M${x + r * .64} ${y - r * .78}C${x + r * .25} ${y - r * .2} ${x + r * .25} ${y + r * .2} ${x + r * .64} ${y + r * .78}" fill="none" stroke="#5a2a17" stroke-width="4"/>
  </g>`;
}

function hoop(x, y) {
  return `<g>
    <rect x="${x}" y="${y}" width="110" height="72" rx="8" fill="#edf2f2" stroke="#a8b5ba" stroke-width="4"/>
    <rect x="${x + 35}" y="${y + 18}" width="40" height="30" fill="none" stroke="#d45f52" stroke-width="4"/>
    <ellipse cx="${x + 55}" cy="${y + 82}" rx="43" ry="12" fill="none" stroke="${orange}" stroke-width="7"/>
    <path d="M${x + 20} ${y + 86}L${x + 36} ${y + 142}M${x + 55} ${y + 92}V${y + 150}M${x + 90} ${y + 86}L${x + 74} ${y + 142}" stroke="#d7c9ad" stroke-width="3" opacity=".75"/>
  </g>`;
}

function epg(x, y, w, h, rows = 5, accent = teal) {
  const rowH = h / rows;
  return `<g>
    ${rounded(x, y, w, h, 14, "#0d1820", "#40515a", 2)}
    <rect x="${x}" y="${y}" width="${w}" height="${rowH}" rx="14" fill="#192833"/>
    ${text("GUIDE", x + 70, y + rowH / 2 + 8, 22, "small")}
    ${Array.from({ length: rows - 1 }, (_, i) => {
      const yy = y + rowH * (i + 1);
      return `<line x1="${x}" y1="${yy}" x2="${x + w}" y2="${yy}" stroke="#2a3a44" stroke-width="2"/>
      <rect x="${x + 18}" y="${yy + 13}" width="${w * .2}" height="${rowH - 26}" rx="9" fill="${i === 1 ? accent : "#182630"}" opacity="${i === 1 ? ".95" : ".78"}"/>
      <rect x="${x + w * .28}" y="${yy + 18}" width="${w * .55}" height="10" rx="5" fill="#9ba8ad" opacity=".7"/>
      <rect x="${x + w * .28}" y="${yy + 38}" width="${w * .36}" height="8" rx="4" fill="#59666d"/>`;
    }).join("")}
  </g>`;
}

function credentialPanel(x, y, w, h, title = "EXAMPLE LOGIN") {
  const rows = [["Server URL", "https://example.tv"], ["Username", "demo_user"], ["Password", "••••••••"]];
  return `<g>
    ${rounded(x, y, w, h, 18, "#101922", "#6f5732", 3)}
    ${text(title, x + w / 2, y + 42, 22, "small")}
    ${rows.map(([a, b], i) => {
      const yy = y + 70 + i * 54;
      return `${rounded(x + 28, yy, w - 56, 38, 10, "#081116", "#2f414a", 2)}
      ${text(a, x + 46, yy + 25, 15, "small", "start")}
      ${text(b, x + w - 46, yy + 25, 15, "small", "end")}`;
    }).join("")}
  </g>`;
}

function devices(x, y, accent = teal, sport = "stream") {
  return `<g>
    ${tv(x, y, 330, 205, `<rect x="${x + 58}" y="${y + 62}" width="214" height="92" rx="16" fill="${accent}" opacity=".22"/>${text(sport, x + 165, y + 118, 25, "label")}`, accent)}
    ${rounded(x + 365, y + 42, 110, 175, 18, "#101922", "#56626b", 2)}
    <rect x="${x + 377}" y="${y + 62}" width="86" height="128" rx="12" fill="${accent}" opacity=".2"/>
    ${rounded(x + 500, y + 82, 80, 142, 18, "#101922", "#56626b", 2)}
    <rect x="${x + 510}" y="${y + 104}" width="60" height="82" rx="10" fill="${accent}" opacity=".24"/>
  </g>`;
}

function sceneBody(scene, width, height) {
  const s = Math.min(width / 1200, height / 630);
  switch (scene) {
    case "mlbHero":
      return `${stadiumLights(width)}${diamond(width * .43, height * .55, 170 * s)}
      ${baseball(width * .76, height * .38, 62 * s, -18)}
      ${tv(width * .08, height * .2, 310 * s, 210 * s, `${diamond(width * .19, height * .36, 45 * s)}${text("POSTSEASON", width * .21, height * .49, 22 * s, "small")}`, gold)}
      ${bracket(width * .62, height * .57, 120 * s, 38 * s, ["WC", "DS", "CS", "FINAL"])}
      ${text("OCTOBER BASEBALL", width * .5, height * .12, 42 * s)}`;
    case "mlbBracket":
      return `${diamond(width * .73, height * .5, 140 * s)}${bracket(width * .1, height * .17, 130 * s, 44 * s, ["WILD CARD", "DIVISION", "LEAGUE", "FINAL"])}
      ${baseball(width * .73, height * .2, 42 * s, 12)}${text("POSTSEASON PATH", width * .48, height * .12, 32 * s)}`;
    case "mlbLivingRoom":
      return `${tv(width * .15, height * .15, width * .58, height * .5, `${diamond(width * .44, height * .34, 72 * s)}${text("LIVE GAME", width * .44, height * .53, 24 * s, "small")}`, green)}
      ${remote(width * .72, height * .42, 18)}${baseball(width * .22, height * .78, 42 * s, -24)}${stick(width * .57, height * .73, -8)}
      <rect x="0" y="${height * .82}" width="${width}" height="${height * .18}" fill="#0b0d0f" opacity=".62"/>`;
    case "worldSeriesHero":
      return `${stadiumLights(width)}${diamond(width * .5, height * .62, 185 * s, "#18583c")}
      <path d="M${width * .5} ${height * .2}c45 0 70 28 70 70 0 60-38 86-70 126-32-40-70-66-70-126 0-42 25-70 70-70z" fill="${gold}" opacity=".85" stroke="#fff1b5" stroke-width="3"/>
      ${baseball(width * .25, height * .4, 54 * s, 18)}
      ${tv(width * .69, height * .39, 250 * s, 165 * s, `${text("GAME 7", width * .795, height * .49, 27 * s)}`, gold)}
      ${text("CHAMPIONSHIP NIGHT", width * .5, height * .12, 42 * s)}`;
    case "worldSeriesSchedule":
      return `${text("GAMES 1-7", width * .5, height * .12, 34 * s)}
      ${Array.from({ length: 7 }, (_, i) => {
        const x = width * .11 + (i % 4) * width * .2;
        const y = height * .22 + Math.floor(i / 4) * height * .27;
        return `${rounded(x, y, width * .15, height * .18, 14, i === 6 ? "#3a2811" : "#101922", i === 6 ? gold : "#46545b", 3)}${text(`Game ${i + 1}`, x + width * .075, y + height * .105, 18 * s, "small")}`;
      }).join("")}${diamond(width * .5, height * .77, 62 * s)}${baseball(width * .82, height * .17, 34 * s, -14)}`;
    case "worldSeriesBroadcast":
      return `${tv(width * .18, height * .12, width * .58, height * .52, `${diamond(width * .47, height * .32, 66 * s)}${text("BROADCAST", width * .47, height * .53, 25 * s)}`, gold)}
      <path d="M${width * .08} ${height * .2}L${width * .18} ${height * .4}M${width * .92} ${height * .2}L${width * .76} ${height * .4}" class="line"/>
      ${baseball(width * .77, height * .72, 45 * s, 16)}${remote(width * .08, height * .58, -18)}`;
    case "nbaHero":
      return `${court(width * .48, height * .62, width * .7, height * .48)}${hoop(width * .7, height * .16)}${basketball(width * .24, height * .31, 68 * s)}
      ${tv(width * .09, height * .47, 255 * s, 170 * s, `${text("LIVE HOOPS", width * .195, height * .575, 23 * s)}`, orange)}
      ${text("BASKETBALL STREAMING", width * .5, height * .12, 42 * s)}`;
    case "nbaDecision":
      return `${court(width * .5, height * .58, width * .82, height * .42)}
      ${["National", "Local", "League"].map((l, i) => `${rounded(width * (.14 + i * .25), height * .2, width * .2, height * .2, 18, "#101922", i === 1 ? orange : "#47555d", 3)}${text(l, width * (.24 + i * .25), height * .31, 21 * s, "small")}`).join("")}
      ${basketball(width * .78, height * .72, 40 * s)}${text("VIEWING CHOICE", width * .5, height * .12, 31 * s)}`;
    case "nbaDevices":
      return `${devices(width * .11, height * .22, orange, "GAME LIVE")}${basketball(width * .78, height * .28, 48 * s)}${hoop(width * .12, height * .12)}`;
    case "playerHero":
      return `${tv(width * .19, height * .14, width * .58, height * .54, `${epg(width * .26, height * .23, width * .44, height * .33, 4, teal)}`, teal)}
      ${stick(width * .11, height * .72, -9)}${remote(width * .79, height * .37, 10)}${text("PLAYER PICKER", width * .5, height * .12, 38 * s)}`;
    case "playerComparison":
      return `${["Clean Guide", "Favorites", "Playback"].map((l, i) => `${rounded(width * (.08 + i * .3), height * .22, width * .24, height * .47, 18, "#101922", i === 0 ? teal : i === 1 ? gold : purple, 3)}${text(l, width * (.2 + i * .3), height * .34, 20 * s, "small")}${epg(width * (.105 + i * .3), height * .4, width * .19, height * .18, 3, i === 0 ? teal : i === 1 ? gold : purple)}`).join("")}${text("PLAYER COMPARISON", width * .5, height * .13, 30 * s)}`;
    case "playerEpg":
      return `${tv(width * .16, height * .11, width * .64, height * .56, `${epg(width * .24, height * .2, width * .48, height * .38, 5, gold)}`, gold)}${remote(width * .74, height * .45, -15)}`;
    case "installHero":
      return `${tv(width * .2, height * .15, width * .55, height * .48, `${text("1 Download", width * .39, height * .31, 23 * s, "small")}${text("2 Install", width * .39, height * .4, 23 * s, "small")}${text("3 Sign in", width * .39, height * .49, 23 * s, "small")}`, copper)}
      ${stick(width * .14, height * .69, 8)}${remote(width * .78, height * .38, -12)}${text("FIRE TV SETUP", width * .5, height * .12, 40 * s)}`;
    case "installDownloader":
      return `${tv(width * .16, height * .12, width * .63, height * .55, `${rounded(width * .26, height * .25, width * .43, height * .09, 12, "#081116", copper, 3)}${text("Download URL", width * .475, height * .31, 20 * s, "small")}${["Download", "Install", "Open"].map((l, i) => `${rounded(width * (.27 + i * .14), height * .43, width * .11, height * .08, 12, i === 1 ? copper : "#1b2a34", "#59656d", 2)}${text(l, width * (.325 + i * .14), height * .485, 14 * s, "small")}`).join("")}`, copper)}${text("INSTALL WORKFLOW", width * .5, height * .12, 29 * s)}`;
    case "installLogin":
      return `${credentialPanel(width * .12, height * .18, width * .34, height * .5, "XTREAM")}${rounded(width * .55, height * .19, width * .32, height * .48, 18, "#101922", teal, 3)}${text("M3U URL", width * .71, height * .34, 25 * s)}${text("playlist.example/m3u", width * .71, height * .47, 17 * s, "small")}${text("SETUP OPTIONS", width * .5, height * .12, 30 * s)}`;
    case "smartersHero":
      return `${tv(width * .17, height * .13, width * .62, height * .55, `${tileGrid(width * .27, height * .24, width * .42, height * .31, ["Live TV", "Movies", "Series"], [teal, gold, purple])}`, purple)}${remote(width * .8, height * .42, 14)}${text("IPTV HOME", width * .5, height * .12, 38 * s)}`;
    case "smartersLogin":
      return `${tv(width * .2, height * .1, width * .56, height * .62, `${credentialPanel(width * .29, height * .19, width * .38, height * .42, "EXAMPLE ACCOUNT")}`, purple)}${stick(width * .67, height * .72, -8)}`;
    case "smartersTiles":
      return `${tileGrid(width * .15, height * .18, width * .7, height * .56, ["Live TV", "Movies", "Series", "Catch-up", "Settings", "Guide"], [teal, gold, purple, copper, blue, green])}${text("ORIGINAL CATEGORY MENU", width * .5, height * .12, 26 * s)}`;
    case "tivimateHero":
      return `${tv(width * .13, height * .12, width * .68, height * .56, `${epg(width * .21, height * .21, width * .52, height * .39, 6, teal)}`, teal)}${remote(width * .78, height * .43, -18)}${stick(width * .11, height * .72, 12)}`;
    case "tivimateSetup":
      return `${rounded(width * .1, height * .2, width * .25, height * .3, 18, "#101922", teal, 3)}${text("Playlist", width * .225, height * .33, 24 * s)}${rounded(width * .1, height * .56, width * .25, height * .17, 18, "#101922", gold, 3)}${text("EPG", width * .225, height * .66, 24 * s)}<path d="M${width * .38} ${height * .35}H${width * .52}M${width * .38} ${height * .64}H${width * .52}" class="line"/>${epg(width * .55, height * .2, width * .34, height * .52, 5, teal)}${text("GUIDE SETUP", width * .5, height * .12, 29 * s)}`;
    case "tivimateGroups":
      return `${epg(width * .16, height * .18, width * .5, height * .54, 6, gold)}${["Sports", "News", "Kids", "Favs"].map((l, i) => `${rounded(width * .7, height * (.2 + i * .12), width * .16, height * .075, 12, i === 3 ? gold : "#101922", "#52616a", 2)}${text(l, width * .78, height * (.25 + i * .12), 17 * s, "small")}`).join("")}${remote(width * .68, height * .56, 14)}`;
    case "xtreamHero":
      return `${credentialPanel(width * .09, height * .21, width * .34, height * .46, "FICTIONAL LOGIN")}<path d="M${width * .47} ${height * .44}H${width * .59}" class="line"/><path d="M${width * .56} ${height * .4}L${width * .6} ${height * .44}L${width * .56} ${height * .48}" fill="none" class="line"/>${tv(width * .61, height * .19, width * .31, height * .37, `${epg(width * .65, height * .28, width * .23, height * .2, 3, teal)}`, teal)}${text("XTREAM SETUP", width * .5, height * .12, 38 * s)}`;
    case "xtreamVsM3u":
      return `${credentialPanel(width * .09, height * .18, width * .35, height * .5, "XTREAM")}${rounded(width * .56, height * .18, width * .35, height * .5, 18, "#101922", teal, 3)}${text("M3U", width * .735, height * .3, 28 * s)}${text("playlist.example/list.m3u", width * .735, height * .43, 17 * s, "small")}${text("Two setup paths", width * .5, height * .78, 22 * s, "small")}`;
    case "xtreamDevices":
      return `${credentialPanel(width * .08, height * .21, width * .27, height * .43, "ACCOUNT")}${devices(width * .41, height * .24, teal, "IPTV")}`;
    case "smartTvHero":
      return `${tv(width * .24, height * .16, width * .52, height * .48, `${tileGrid(width * .32, height * .27, width * .36, height * .23, ["TV Apps", "Guide", "Live"], [teal, gold, green])}`, gold)}${["Tizen-style", "webOS-style", "Android TV"].map((l, i) => `${rounded(width * (.1 + i * .3), height * .73, width * .22, height * .09, 18, "#101922", [teal, gold, green][i], 3)}${text(l, width * (.21 + i * .3), height * .785, 18 * s, "small")}`).join("")}${text("SMART TV APPS", width * .5, height * .12, 38 * s)}`;
    case "smartTvComparison":
      return `${["Platform A", "Platform B", "Platform C"].map((l, i) => `${rounded(width * (.08 + i * .3), height * .18, width * .24, height * .55, 18, "#101922", [teal, gold, green][i], 3)}${text(l, width * (.2 + i * .3), height * .3, 18 * s, "small")}${["App", "EPG", "Remote"].map((r, j) => `<rect x="${width * (.12 + i * .3)}" y="${height * (.38 + j * .09)}" width="${width * .16}" height="${height * .045}" rx="8" fill="#26343c"/>`).join("")}`).join("")}${text("APP COMPARISON", width * .5, height * .12, 29 * s)}`;
    case "smartTvDevice":
      return `${tv(width * .12, height * .2, width * .34, height * .36, `${text("Native App", width * .29, height * .38, 22 * s)}`, teal)}${tv(width * .56, height * .19, width * .32, height * .34, `${text("HDMI Device", width * .72, height * .37, 21 * s)}`, gold)}${stick(width * .58, height * .65, -7)}<path d="M${width * .46} ${height * .4}H${width * .56}" class="line"/>${text("TV APP OR DEVICE", width * .5, height * .12, 29 * s)}`;
    case "bufferHero":
      return `${tv(width * .15, height * .13, width * .58, height * .52, `${bufferSpinner(width * .44, height * .37, 66 * s)}${text("BUFFERING", width * .44, height * .54, 25 * s)}`, red)}${router(width * .75, height * .56, 1.15 * s)}${wifi(width * .82, height * .33, red)}${text("STREAM FREEZING", width * .5, height * .12, 40 * s)}`;
    case "bufferDiagnostic":
      return `${router(width * .14, height * .46, 1.1 * s)}${wifi(width * .24, height * .25, gold)}${devices(width * .42, height * .25, red, "LOW BITRATE")}${text("NETWORK DIAGNOSTIC", width * .5, height * .12, 29 * s)}${text("ping 96ms", width * .28, height * .78, 19 * s, "small")}${text("Wi-Fi weak", width * .52, height * .78, 19 * s, "small")}`;
    case "bufferChain":
      return `${["Source", "Internet", "Router", "Device", "Player"].map((l, i) => {
        const x = width * (.07 + i * .18);
        return `${rounded(x, height * .38, width * .13, height * .16, 16, i === 2 ? "#3b1717" : "#101922", i === 2 ? red : gold, 3)}${text(l, x + width * .065, height * .475, 17 * s, "small")}${i < 4 ? `<path d="M${x + width * .14} ${height * .46}H${x + width * .18}" class="line"/>` : ""}`;
      }).join("")}${bufferSpinner(width * .5, height * .72, 38 * s)}${text("TROUBLESHOOTING CHAIN", width * .5, height * .16, 27 * s)}`;
    default:
      throw new Error(`Unknown scene: ${scene}`);
  }
}

function tileGrid(x, y, w, h, labels, colors) {
  const cols = labels.length > 3 ? 3 : labels.length;
  const rows = Math.ceil(labels.length / cols);
  const gap = 16;
  const tw = (w - gap * (cols - 1)) / cols;
  const th = (h - gap * (rows - 1)) / rows;
  return `<g>${labels.map((label, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const xx = x + col * (tw + gap);
    const yy = y + row * (th + gap);
    return `${rounded(xx, yy, tw, th, 16, colors[i % colors.length], "#ffffff", 1, 'opacity=".86"')}${text(label, xx + tw / 2, yy + th / 2 + 7, Math.min(22, tw / 7), "label")}`;
  }).join("")}</g>`;
}

function bufferSpinner(x, y, r) {
  return `<g>
    <circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#2d3940" stroke-width="${r * .16}"/>
    <path d="M${x} ${y - r}A${r} ${r} 0 0 1 ${x + r} ${y}" fill="none" stroke="${red}" stroke-width="${r * .16}" stroke-linecap="round"/>
    <circle cx="${x}" cy="${y}" r="${r * .14}" fill="${red}"/>
  </g>`;
}

function router(x, y, scale = 1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    ${rounded(0, 0, 130, 54, 18, "#101922", "#68757c", 2)}
    <path d="M22 4L-8 -50M108 4L138 -50" stroke="#68757c" stroke-width="7" stroke-linecap="round"/>
    <circle cx="35" cy="29" r="5" fill="${green}"/><circle cx="58" cy="29" r="5" fill="${gold}"/><circle cx="82" cy="29" r="5" fill="${red}"/>
  </g>`;
}

function wifi(x, y, color = gold) {
  return `<g fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round" opacity=".9">
    <path d="M${x - 70} ${y + 30}Q${x} ${y - 35} ${x + 70} ${y + 30}"/>
    <path d="M${x - 45} ${y + 58}Q${x} ${y + 18} ${x + 45} ${y + 58}"/>
    <path d="M${x - 20} ${y + 84}Q${x} ${y + 66} ${x + 20} ${y + 84}"/>
    <circle cx="${x}" cy="${y + 105}" r="7" fill="${color}" stroke="none"/>
  </g>`;
}

function convert(svgPath, webpPath) {
  const result = spawnSync("magick", [svgPath, "-quality", "82", "-define", "webp:method=6", webpPath], {
    stdio: "inherit"
  });
  if (result.status !== 0) {
    throw new Error(`ImageMagick failed for ${webpPath}`);
  }
}

mkdirSync(imageRoot, { recursive: true });

const articles = JSON.parse(readFileSync(blogDataPath, "utf8"));
const manifest = [];

for (const article of articles) {
  const plan = imagePlan[article.slug];
  if (!plan) continue;

  article.images.hero.alt = plan.hero.alt;
  article.images.hero.src = `/images/blog/${plan.hero.file}`;
  const heroSrc = article.images.hero.src;
  const heroSvg = path.join(root, "public", heroSrc.replace(/^\//, "").replace(/\.webp$/, ".svg"));
  const heroWebp = path.join(root, "public", heroSrc.replace(/^\//, ""));
  writeFileSync(heroSvg, svg(article.images.hero.width, article.images.hero.height, plan.hero.scene, sceneBody(plan.hero.scene, article.images.hero.width, article.images.hero.height)));
  convert(heroSvg, heroWebp);
  manifest.push({ slug: article.slug, kind: "hero", src: heroSrc, svg: `/${path.relative(path.join(root, "public"), heroSvg)}`, alt: plan.hero.alt, width: article.images.hero.width, height: article.images.hero.height });

  article.images.inline.forEach((image, index) => {
    const item = plan.inline[index];
    image.alt = item.alt;
    image.src = `/images/blog/${item.file}`;
    const imageSvg = path.join(root, "public", image.src.replace(/^\//, "").replace(/\.webp$/, ".svg"));
    const imageWebp = path.join(root, "public", image.src.replace(/^\//, ""));
    writeFileSync(imageSvg, svg(image.width, image.height, item.scene, sceneBody(item.scene, image.width, image.height)));
    convert(imageSvg, imageWebp);
    manifest.push({ slug: article.slug, kind: `supporting ${index + 1}`, src: image.src, svg: `/${path.relative(path.join(root, "public"), imageSvg)}`, alt: item.alt, width: image.width, height: image.height });
  });
}

writeFileSync(blogDataPath, `${JSON.stringify(articles, null, 2)}\n`);
writeFileSync(path.join(root, "public/images/blog/image-remediation-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Replaced ${manifest.length} blog images and updated image alt text.`);
