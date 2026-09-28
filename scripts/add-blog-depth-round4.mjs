import { writeFileSync } from "node:fs";
import articles from "../src/config/blog-data.json" with { type: "json" };

const section = (id, title, blocks) => ({ id, title, blocks });

const additions = {
  "iptv-smarters-pro-firestick-setup": [
    section("smarters-remote-keyboard", "Fire TV Remote Keyboard Tips For Smarters", [
      "Smarters setup can be derailed by text entry. Server URLs, usernames, and M3U links are awkward with a directional remote, and one invisible trailing space can trigger an authorization error. Use the Fire TV mobile app keyboard when possible, then review each field before submitting.",
      "If the account email or provider message is on a phone, avoid retyping from memory. Copy carefully into the mobile remote or display the message beside the TV while entering it. After login succeeds, save the profile with a clear label so nobody has to repeat the credential entry process unless the account changes."
    ])
  ],
  "tivimate-firestick-setup-2026": [
    section("tivimate-epg-refresh-habits", "EPG Refresh Habits In TiviMate", [
      "A good TiviMate guide depends on refresh habits that match the source and device. Refreshing too rarely can leave stale listings; refreshing too aggressively can slow an older Firestick with a large playlist. Start with the app's default behavior, then adjust only if guide data is missing or outdated.",
      "If a provider updates EPG overnight, a morning refresh may make sense. If the guide is stable, avoid constant manual refreshes. When troubleshooting, refresh once, wait for completion, and then judge the result. Repeatedly pressing refresh can make a slow source look broken when it is simply still processing."
    ])
  ],
  "xtream-codes-iptv-setup-guide": [
    section("xtream-testing-without-exposing", "Testing Xtream Credentials Without Exposing Them", [
      "A careful test uses a trusted second player, not a random website that asks for credentials. If the login fails in one app, try another reputable player on the same device or a second device you control. If it works there, the first app's format or settings are likely the issue.",
      "Avoid web pages that promise to validate Xtream credentials for free. They may collect server URLs, usernames, and passwords. If you need provider confirmation, use the official support channel and mask details anywhere outside that private conversation."
    ])
  ]
};

for (const article of articles) article.sections.push(...(additions[article.slug] || []));

writeFileSync("src/config/blog-data.json", `${JSON.stringify(articles, null, 2)}\n`);
console.log("Added final short depth sections.");
