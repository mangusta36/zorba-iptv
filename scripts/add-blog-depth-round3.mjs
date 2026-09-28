import { writeFileSync } from "node:fs";
import articles from "../src/config/blog-data.json" with { type: "json" };

const p = (text) => text;
const list = (title, items) => ({ type: "list", title, items });
const table = (caption, headers, rows) => ({ type: "table", caption, headers, rows });
const section = (id, title, blocks) => ({ id, title, blocks });

const additions = {
  "best-iptv-player-for-firestick-2026": [
    section("living-room-stress-test", "A Living-Room Stress Test Before You Commit", [
      p("Before paying for a premium unlock or deleting other players, run a living-room stress test. Add the same lawful source to your top two choices, load the guide, favorite ten channels, search for one channel by name, open one VOD item if available, and hand the remote to someone who did not configure the app. The better player is the one that survives that handoff."),
      p("This test avoids fake certainty. It does not require claiming Zorba tested every player on every Firestick. It gives readers a practical way to compare their own source, device, and household. If TiviMate feels powerful but confusing, Smarters may win. If Smarters feels simple but too shallow for live TV, TiviMate may win."),
      list("Stress-test tasks", ["Load guide from a cold start.", "Jump between three channels.", "Search with the Fire TV remote.", "Create and reopen favorites.", "Restart the app and confirm settings persist."])
    ])
  ],
  "how-to-install-iptv-on-firestick-2026": [
    section("privacy-during-install", "Privacy During Firestick Installation", [
      p("IPTV installation often happens through messages, emails, or support chats, which makes credential privacy easy to overlook. Keep the TV away from guests when typing credentials. Do not take photos of login screens to send to a group chat. If you use the Fire TV mobile remote keyboard, make sure the phone itself is secure."),
      p("If someone else installs the player for you, change or rotate credentials afterward when your provider supports it. At minimum, know which app was installed, where it came from, and whether unknown-app permissions were left enabled. A working stream is not the only measure of a good installation."),
      p("For families, store setup notes in a private password manager or secure note rather than a paper beside the TV. The note should identify the player and support channel, not expose the full password to anyone in the room.")
    ])
  ],
  "iptv-smarters-pro-firestick-setup": [
    section("smarters-when-to-switch", "When To Switch Away From Smarters", [
      p("Smarters is a good fit for many households, but it is not mandatory. If the source is live-TV-heavy and the household constantly complains about guide navigation, test TiviMate. If decoder changes do not fix a repeated playback issue that another player handles well, keep the other player. If the app version available for your device is outdated or filled with confusing clones, choose a better-maintained path."),
      p("Switching players should be based on a named problem, not impatience. Keep Smarters installed until the replacement proves it can load the same credentials, display the EPG, and play the channels or VOD categories that matter. Then remove unused apps to preserve Firestick storage."),
      table("Switching signals", ["Problem", "Try before switching", "Switch if"], [
        ["Guide is awkward", "Favorites and categories", "Household still cannot navigate"],
        ["Playback glitch", "Decoder/external player", "Another player handles same stream"],
        ["VOD poorly organized", "Refresh data", "Another app presents categories better"],
        ["Clone confusion", "Verify official source", "Source cannot be trusted"]
      ])
    ])
  ],
  "tivimate-firestick-setup-2026": [
    section("tivimate-when-not-best", "When TiviMate Is Not The Best Choice", [
      p("TiviMate is excellent for guide-first live TV, but it is not always the best Firestick player. If the household mainly watches Movies and Series, Smarters-style tiles may feel clearer. If the user wants the simplest possible player for one M3U URL, a lighter app may be less intimidating. If premium features are unavailable or unnecessary, a free alternative may be enough."),
      p("This matters because many TiviMate guides treat it as the automatic answer. A good setup guide should help readers recognize fit. TiviMate is strongest when the viewer values guide control, favorites, groups, and remote-first live TV navigation. It is weaker when the viewer wants a Netflix-like VOD launcher or almost no configuration."),
      p("If you are setting up TV for someone else, ask how they watch before choosing. The technically best player can be the wrong household player if the user cannot comfortably find channels.")
    ])
  ],
  "xtream-codes-iptv-setup-guide": [
    section("xtream-renewals-and-expiry", "Renewals, Expiry, And Connection Limits", [
      p("Xtream-style credentials can stop working for reasons unrelated to typing. The account may expire, the provider may reset the password after renewal, or the plan may allow fewer simultaneous connections than the household is using. If credentials worked yesterday and fail today, check account status before rebuilding the player."),
      p("Connection limits can look like buffering, kicking, or login failure. A stream running on a living-room Firestick, a bedroom Smart TV, and a phone may exceed a one-connection plan. The player can display the symptom, but the account rule creates it."),
      table("Account-state symptoms", ["Symptom", "Possible account cause", "What to ask"], [
        ["Invalid details after renewal", "Password or account changed", "Were credentials reset?"],
        ["Stream stops when another starts", "Connection limit", "How many concurrent streams?"],
        ["VOD gone but live works", "Package/category change", "Is VOD included?"],
        ["EPG gone after renewal", "Guide source changed", "Is XMLTV/API EPG still active?"]
      ])
    ])
  ],
  "best-iptv-apps-smart-tv-2026": [
    section("choosing-for-multiple-tvs", "Choosing For Multiple TVs In One Home", [
      p("A home with one Samsung TV, one LG TV, and one Android TV may not be able to use the same native IPTV app everywhere. You can either accept different apps per platform or standardize with external streaming devices. Standardizing costs more upfront but reduces support friction because every room uses the same interface."),
      p("If you choose native apps, document each room separately: TV platform, app name, activation method, credential format, and renewal details. A Samsung web-portal app and an Android TV TiviMate setup may use the same source but have completely different troubleshooting steps."),
      p("For less technical households, consistency often beats theoretical elegance. Two identical streaming devices can be easier to maintain than three different native TV apps with three different activation systems.")
    ])
  ]
};

for (const article of articles) article.sections.push(...(additions[article.slug] || []));

writeFileSync("src/config/blog-data.json", `${JSON.stringify(articles, null, 2)}\n`);
console.log("Added third-round targeted depth sections.");
