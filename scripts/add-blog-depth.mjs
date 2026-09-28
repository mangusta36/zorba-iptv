import { writeFileSync } from "node:fs";
import articles from "../src/config/blog-data.json" with { type: "json" };

const p = (text) => text;
const table = (caption, headers, rows) => ({ type: "table", caption, headers, rows });
const section = (id, title, blocks) => ({ id, title, blocks });

const additions = {
  "how-to-watch-mlb-playoffs-2026": [
    section("affiliate-and-authentication", "Local Affiliates, Authentication, And MLB.TV Notes", [
      p("The MLB postseason is national television, but local station access still matters when FOX or NBC is involved. A live TV streaming package can advertise local channels while still varying by ZIP code. If your plan includes FOX in one city but you travel during October, do not assume the same local affiliate appears in the destination market. Check the service's live guide from the location where you will watch."),
      p("Authenticated MLB.TV access is different from a standalone postseason streaming pass. MLB's postseason materials note that certain postseason games on FOX, FS1, and TNT Sports platforms are available to MLB.TV subscribers who authenticate through a participating pay TV provider. That means the TV provider entitlement is still the key. If the provider does not include the network, MLB.TV authentication may not solve the problem."),
      p("Radio can be a useful backup, especially for travel, but it does not replace video rights. If you care about Spanish-language coverage, check MLB and broadcaster listings close to game day because Spanish TV and audio options can differ from the English-language feed.")
    ]),
    section("postseason-examples", "Examples: Which App Should A Fan Open?", [
      p("Example one: a Wild Card Game 2 is listed for NBC. A Peacock subscriber may be able to stream through Peacock if the game is carried there, while an antenna viewer may use a local NBC station if reception is strong. A live TV streaming subscriber should check whether the local NBC affiliate is included. The correct app is not generic; it follows the listing."),
      p("Example two: an NLDS game is listed for FS1. A fan should look for FS1 in a cable, satellite, or live TV streaming plan, or use a FOX app path that authenticates the same entitlement. Opening Peacock because it carried the Wild Card round will not help once the NLDS moves to FOX networks."),
      p("Example three: an ALCS game is listed for TBS. The viewer needs the TNT Sports side of the distribution, not FOX and not Peacock. If the household follows both an AL and NL team, this is exactly why the broad postseason guide needs a round-by-round channel map.")
    ])
  ],
  "how-to-watch-world-series-2026": [
    section("games-five-six-seven", "How To Treat Games 5, 6, And 7", [
      p("Games 5, 6, and 7 are planning holds, not promises. If the series ends in four games, those nights disappear. If the series reaches Game 6 or Game 7, demand and attention climb sharply, which is when account, network, and app problems feel most painful. Put the possible dates on your calendar, but label them if necessary."),
      p("For a subscription decision, this matters because a viewer who signs up only for the World Series may need enough billing runway to cover a possible October 31 Game 7. For a watch party, it matters because you should not invite people to an if-necessary game without making clear that the matchup may already be over."),
      p("The practical move is to test FOX before Game 1 and then re-test before any elimination game. Elimination games attract more casual viewers and can reveal app-capacity problems or account prompts at the worst possible time.")
    ]),
    section("antenna-world-series", "Using An Antenna For The World Series", [
      p("An antenna can be a clean World Series option if your local FOX station is strong. It avoids streaming latency, account authentication, and app outages. It also depends heavily on geography, building materials, antenna placement, and local signal conditions. A cheap indoor antenna near a window may work beautifully in one home and fail in another."),
      p("Run a channel scan several days before Game 1 and again after moving the antenna. Test during the evening, because interference and household electronics can change reception. If the picture breaks up during the test, solve that before the game by repositioning the antenna, trying a different room, or using a streaming backup."),
      table("Antenna checklist", ["Check", "Good sign", "Problem sign"], [
        ["Channel scan", "FOX appears with stable signal", "FOX missing or duplicate weak channels"],
        ["Evening test", "No dropouts over 15 minutes", "Pixelation when people move around"],
        ["Audio/video sync", "TV speakers or soundbar stay synced", "Delay that worsens over time"],
        ["Backup", "Streaming login is ready", "No second option if reception fails"]
      ])
    ]),
    section("fox-app-authentication", "FOX App Authentication Pitfalls", [
      p("If you use the FOX app or website, the key question is whether your account has live FOX entitlement. Installing the app is not enough. The app may ask for a TV provider, a FOX streaming subscription, or another supported sign-in depending on current FOX product rules and your market."),
      p("Authentication problems often look like loops: sign in, return to app, get asked again. Try completing sign-in on a phone or laptop, then reopen the TV app. If that fails, test the same account in a browser. If browser playback works but TV app playback does not, the issue is device-app specific rather than account-wide.")
    ])
  ],
  "how-to-watch-nba-games-2026-27": [
    section("league-pass-decision-tree", "League Pass Decision Tree", [
      p("League Pass is easiest to understand by asking three questions. Is the game nationally televised? If yes, use the national partner. Is the game local to your market? If yes, use the local rights holder. Is the game outside your market and not national? That is where League Pass is most likely to be useful."),
      p("This decision tree prevents the most common purchase mistake. Fans often buy League Pass because they want more NBA, then discover their favorite local team is unavailable live. That does not mean the product failed; it means the product is not designed to replace local rights."),
      table("League Pass decision tree", ["Question", "If yes", "If no"], [
        ["Is it national?", "Use ABC/ESPN, NBC/Peacock, or Prime Video", "Check local status"],
        ["Is it your local team?", "Use local rights holder", "Check League Pass"],
        ["Is it out-of-market and non-national?", "League Pass may fit", "Look for team/local listing"],
        ["Is it blacked out?", "Use the listed rights holder", "Troubleshoot app/device normally"]
      ])
    ]),
    section("nba-cup-and-special-events", "NBA Cup, Holidays, Play-In, And Playoffs", [
      p("The regular weekly pattern is helpful, but special NBA events deserve separate checks. NBA Cup games can have partner-specific windows. Christmas games often concentrate on ABC/ESPN. Play-In and playoff games can shift the importance of Prime Video, ESPN, ABC, NBC, and Peacock depending on the round and official schedule."),
      p("Do not use an October regular-season habit as a playoff plan. The NBA's national distribution changes by event type, and the postseason is exactly when casual viewers return and app demand rises. Save the NBA schedule page and check the game's Watch link on the day of the event."),
      p("For a household following one team, add the team schedule to a calendar but still verify national pickup. A game can move into a broader national window or receive additional distribution notes that affect where it appears.")
    ]),
    section("local-rights-scenarios", "Local Rights Scenarios For Cord-Cutters", [
      p("Local NBA rights can be the hardest part of the season because they vary by team. Some teams rely on regional sports networks, some use over-the-air partners, and some offer direct streaming options. A national NBA article should not pretend one local answer fits all 30 teams."),
      p("Cord-cutters should compare the team schedule, the local rights holder, and their live TV package before the season starts. If the local rights holder is missing, a national-game package and League Pass may still leave a large gap for the home team."),
      p("If the team offers a direct-to-consumer local option, compare device support and blackout language carefully. The app that works on a phone may not be available on the living-room TV, and casting rules can differ by platform.")
    ])
  ],
  "best-iptv-player-for-firestick-2026": [
    section("player-scorecard", "Firestick Player Scorecard", [
      p("A useful comparison page should help a reader score players against their own habits. Give one point for each must-have: Xtream login, M3U support, EPG that handles large lists, VOD layout, recording, multiple playlists, remote-friendly search, and simple favorites. The player with the highest score for the household wins, even if another app is more popular online."),
      table("Player scorecard", ["Need", "TiviMate", "Smarters Pro", "OTT Navigator", "VLC"], [
        ["TV-style EPG", "Strong", "Moderate", "Strong", "Weak"],
        ["Beginner tiles", "Moderate", "Strong", "Moderate", "Weak"],
        ["Raw playlist test", "Good", "Good", "Good", "Strong"],
        ["VOD browsing", "Moderate", "Strong", "Varies", "Weak"],
        ["Power customization", "Strong", "Moderate", "Strong", "Weak"]
      ]),
      p("The scorecard is deliberately qualitative because app versions, device models, and feature packaging change. It avoids fake testing claims while still giving readers a practical way to decide.")
    ]),
    section("fire-tv-model-considerations", "Fire TV Model Considerations", [
      p("Older Firesticks can run out of patience before they run out of theoretical compatibility. Large EPG imports, heavy VOD libraries, and multiple playlists put pressure on storage and memory. A player that feels excellent on a newer 4K Max can feel sluggish on an older stick with little free space."),
      p("If the reader owns an older Firestick, prioritize a lean setup: fewer visible groups, one playlist at first, modest EPG refresh frequency, and a player with a clear remote interface. If they are buying hardware specifically for IPTV, the player decision and device decision should be made together.")
    ]),
    section("comparison-faq-depth", "Questions A Real Comparison Should Answer", [
      p("Is TiviMate always better than Smarters? No. It is often better for live guide navigation, but Smarters can be better for a family that uses Movies and Series tiles every day. Is VLC a main IPTV player? Usually not for living-room use, but it is excellent for checking whether an M3U stream itself works. Is recording worth choosing a player for? Only if the device storage and source behavior support it reliably."),
      p("The comparison should also answer what not to do: do not install five players permanently on a low-storage stick, do not buy a premium unlock before confirming the source works, and do not mistake a player's popularity for proof that it fits your playlist.")
    ])
  ],
  "how-to-install-iptv-on-firestick-2026": [
    section("developer-options-variations", "Developer Options And Install Unknown Apps Variations", [
      p("Fire TV setup guides often fail because Amazon changes menu labels and device behavior over time. Some devices show Developer Options plainly. Some require selecting the device name in About several times before developer settings appear. Some newer devices may restrict sideloading more aggressively. The article should teach readers to identify the menu pattern, not memorize one brittle path."),
      p("If Downloader does not appear under Install Unknown Apps, open Downloader once and attempt the install flow again, then return to settings. If it still does not appear, check whether the Fire TV model supports the behavior you are trying to use. Do not keep granting permissions to unrelated apps just to make a guide match an old screenshot.")
    ]),
    section("downloader-cleanup", "Downloader Cleanup And Post-Install Hygiene", [
      p("After installing a player through Downloader, delete the APK from Downloader's file prompt if you do not need it. Keeping old installers wastes storage and can cause confusion when a newer app version is released. The installed app remains even after the installer file is removed."),
      p("Then review permissions. If the Fire TV allows per-app unknown-install toggles, turn off the permission for Downloader after installation. Leave ADB debugging off unless you specifically need it. These steps reduce the attack surface without changing the IPTV player setup.")
    ]),
    section("installation-error-map", "Installation Error Map", [
      table("Installation error map", ["Symptom", "Likely cause", "Next action"], [
        ["Parse error", "Wrong APK or incompatible device", "Verify official source and architecture"],
        ["App not installed", "Storage, conflict, or policy issue", "Free storage and check existing app"],
        ["Downloader blocked", "Install permission missing", "Enable permission only for Downloader"],
        ["App opens then closes", "Incompatible version or device resources", "Restart and verify version"],
        ["Login screen loads but fails", "Credentials issue, not install issue", "Move to M3U/Xtream checks"]
      ]),
      p("This map keeps installation troubleshooting separate from playback troubleshooting. Once the app opens and reaches a login screen, the installation job is mostly complete. The next problem belongs to credentials, EPG, network, or source.")
    ])
  ],
  "iptv-smarters-pro-firestick-setup": [
    section("multi-user-profiles", "Multi-User Profiles And Household Setup", [
      p("Smarters-style profile screens can be useful when a household uses more than one playlist or account. Give profiles clear names such as Living Room, Kids, or Backup rather than leaving generic labels. If support is needed later, the profile name can help identify which source is failing."),
      p("Profiles do not necessarily mean separate provider accounts. They are app-level containers. If two profiles use the same underlying subscription at the same time, they may still count against the provider's connection limit. That distinction matters when buffering or login kicks happen during simultaneous viewing.")
    ]),
    section("smarters-epg-controls", "EPG And Time Settings In Smarters", [
      p("A blank Smarters guide after login can mean the source does not provide EPG, the EPG failed to download, or the app needs a manual refresh. A shifted guide usually points to time-zone or offset settings. A few wrong channels point to mapping problems from the source. The pattern tells you which fix is worth trying."),
      p("After changing time or EPG settings, close and reopen the app before judging the result. Some players cache guide data, so the screen you see immediately after a change may not reflect a fresh download.")
    ]),
    section("smarters-playback-settings", "Playback Settings To Change Carefully", [
      p("Smarters may offer native player, hardware decoder, software decoder, or external player options depending on version and platform. Change these only for a specific symptom. Black screen, audio-only playback, audio drift, and stutter can each respond differently."),
      p("Do not copy an entire settings list from a forum. A setting that helps one provider's sports channel may hurt another provider's movie stream. Make one change, test the same channel, and write down whether it improved, worsened, or did nothing.")
    ])
  ],
  "tivimate-firestick-setup-2026": [
    section("backup-restore-reality", "Backup And Restore Reality Check", [
      p("TiviMate users often care about backups because a polished setup can take time: groups hidden, favorites sorted, EPG adjusted, and playback settings tuned. If the current TiviMate version offers backup/restore in your setup, use it only after the configuration is stable. Backing up a messy first attempt preserves the mess."),
      p("Store backups somewhere you can actually retrieve, and do not assume a backup from one device will solve licensing, storage, or compatibility issues on another. Backup protects organization; it does not grant content access or fix an expired playlist.")
    ]),
    section("multiple-playlists", "Multiple Playlists Without Chaos", [
      p("TiviMate can become confusing when multiple playlists contain similar channel names. Use clear playlist labels and hide duplicate groups. If one source is for live TV and another for testing, name them that way. A vague label like Provider 1 becomes useless three months later."),
      p("When troubleshooting, disable or ignore extra playlists and test the failing source alone. This prevents a common support problem: the user reports a broken channel without knowing which playlist supplied it.")
    ]),
    section("tivimate-common-errors", "Common TiviMate Errors And What They Usually Mean", [
      table("TiviMate symptom map", ["Symptom", "Likely layer", "First useful check"], [
        ["Playlist processing fails", "Credentials or URL format", "Re-enter server/M3U exactly"],
        ["EPG blank", "Guide source", "Refresh EPG and confirm source data"],
        ["Favorites disappear", "Storage/app data issue", "Check storage and profile"],
        ["One channel loops", "Stream/source", "Test same channel in another player"],
        ["Recording fails", "Storage/source/app feature", "Test short recording first"]
      ]),
      p("These are starting points, not guaranteed diagnoses. The goal is to narrow the layer before reinstalling the app or resetting the Firestick.")
    ])
  ],
  "xtream-codes-iptv-setup-guide": [
    section("m3u-conversion", "When An M3U Link Contains Xtream-Style Parts", [
      p("Many M3U URLs visibly contain a username and password inside the query string. That does not mean you should paste the whole URL into Xtream fields. It means the account can sometimes be expressed in both formats if you know the server, username, and password. Ask the provider for the correct Xtream fields rather than guessing from a long URL."),
      p("Guessing can create subtle errors. The playlist host may not be the same as the API server. The output parameter may not belong in the server field. Tokens may expire. A clean set of fields from the provider is safer than reverse-engineering a URL on a TV remote.")
    ]),
    section("smart-tv-xtream-entry", "Entering Xtream Credentials On Smart TVs", [
      p("Smart TV apps can make credential entry harder than Firestick or Android TV because remotes are slower and some apps use web portals. If the app shows a device code or MAC address and asks you to add a playlist through a website, follow that app's portal instructions rather than looking for on-screen Xtream fields that do not exist."),
      p("Portal-based entry can be convenient, but it also means the website handling your credentials must be trusted. Check the app's official site and avoid lookalike activation portals. If an app charges an activation fee, confirm the fee belongs to the player app and not a suspicious third-party page.")
    ]),
    section("xtream-support-script", "What To Send Support Without Exposing Credentials", [
      p("A useful support request can be written without secrets: 'TiviMate on Fire TV Stick 4K Max, Xtream login, server field accepted yesterday, now says invalid details, other apps on the same network work.' That gives device, player, format, timing, and symptom without posting the password."),
      p("Do not send full screenshots of credential screens unless you are in a private trusted support channel and have been asked to. If you must share a screenshot, mask the server domain, username, password, and any token. Public forums should never receive real credentials.")
    ])
  ],
  "best-iptv-apps-smart-tv-2026": [
    section("samsung-specific-notes", "Samsung Tizen Notes", [
      p("Samsung TV users should think in terms of approved store apps. Consumer Samsung TVs do not behave like Android boxes, and generic APK instructions are usually irrelevant. If an IPTV app is not in the Samsung Apps store for your model and region, the clean alternative is usually another supported app or an external streaming device."),
      p("Samsung app performance can vary with TV storage and age. Large playlists and heavy EPG data may feel slow even if the same source is smooth on a streaming stick. If the TV is otherwise excellent, adding a separate streaming device may be cheaper and more pleasant than replacing the television.")
    ]),
    section("lg-specific-notes", "LG webOS Notes", [
      p("LG webOS installation problems often start before IPTV credentials are involved. LG account status, service country, accepted user agreements, network connection, webOS version, and available storage can all affect whether an app installs or updates. Solve those platform issues first."),
      p("If an LG app installs but your playlist will not load, compare the app's supported formats. Some TV apps prefer M3U upload portals, while others support Xtream fields. A provider message written for TiviMate on Android TV may not match the LG app's workflow.")
    ]),
    section("android-google-tv-notes", "Android TV And Google TV Notes", [
      p("Android TV and Google TV are the most flexible Smart TV-style platforms for IPTV players, but flexibility can create noise. Install apps designed for TV remote use, not phone layouts stretched onto a big screen. Store descriptions that mention Android TV, Google TV, or remote navigation are better signs than generic Android support."),
      p("For households that switch between several TVs, an Android TV device on each screen can create a more consistent experience than a mix of Samsung, LG, and built-in apps. Consistency matters when someone else needs to find favorites without learning a new app on every television.")
    ])
  ],
  "how-to-fix-iptv-buffering-freezing": [
    section("layered-diagnostic-walkthrough", "Layered Diagnostic Walkthrough", [
      p("Start with the stream. Test another channel in the same app. If the second channel works, the original stream or category is suspect. Next test the same channel in another player if possible. If both players fail, the source is more likely than the app. Then test another app on the same device. If every app struggles, move to device or network."),
      p("Now test the network. Move from Wi-Fi to Ethernet if possible, or move the device closer to the router. If the problem disappears, Wi-Fi quality is the prime suspect. If the problem remains on Ethernet, test another device. If another device works on the same network, the original device or player settings deserve attention."),
      p("This layered approach is slower than blaming the provider, but it produces better answers. You end with a sentence like 'only one category fails' or 'Wi-Fi fails but Ethernet works,' which is far more useful than 'IPTV buffers.'")
    ]),
    section("symptom-to-layer-table", "Symptom-To-Layer Table", [
      table("Symptom-to-layer map", ["Symptom", "Most likely layer", "Best first test"], [
        ["All apps buffer", "Network/device", "Speed and packet stability near TV"],
        ["Only IPTV app buffers", "Player/source", "Same stream in another player"],
        ["Only one channel buffers", "Source", "Another channel in same category"],
        ["After 30 minutes", "Heat/device resources", "Restart and improve airflow"],
        ["At peak sports times", "Source congestion or household traffic", "Lower bitrate and pause downloads"],
        ["When VPN is on", "Routing/VPN", "Test VPN off"]
      ]),
      p("The table is not a guarantee, but it points you toward the cheapest reversible test. Good troubleshooting minimizes random changes.")
    ]),
    section("when-to-contact-provider", "When To Contact The Provider", [
      p("Contact the provider after you have narrowed the symptom enough to be useful. Include channel name, category, time, player, device, network type, and whether other channels work. If you tested another player or Ethernet, mention the result. That information helps support separate a source problem from a home setup problem."),
      p("Do not send passwords or full playlist URLs in the first message. A provider may need account identification through a private channel, but public or casual support messages should contain symptoms, not secrets."),
      p("If the provider responds only with generic VPN or speed-test advice while your notes show one specific category failing across devices, that is a signal too. Good support should engage with the layer you isolated.")
    ])
  ]
};

for (const article of articles) {
  article.sections.push(...(additions[article.slug] || []));
}

writeFileSync("src/config/blog-data.json", `${JSON.stringify(articles, null, 2)}\n`);
console.log("Added article-specific depth sections.");
