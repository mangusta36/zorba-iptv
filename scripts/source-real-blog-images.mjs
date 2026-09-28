import { spawnSync } from "node:child_process";
import { createWriteStream, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { get } from "node:https";
import path from "node:path";

const root = process.cwd();
const blogDataPath = path.join(root, "src/config/blog-data.json");
const outputDir = path.join(root, "public/images/blog");
const tmpDir = path.join(root, ".tmp-real-blog-images");
const downloadDate = "2026-09-27";
const license = "Pexels License";
const licenseUrl = "https://www.pexels.com/license/";
const licenseNotes = "Pexels marks the selected photo as Free/Free to use. Pexels License allows website/blog use and modification; attribution is not required.";

const imagePlan = {
  "how-to-watch-mlb-playoffs-2026": {
    file: "mlb-playoffs-real-baseball-stadium-hero.webp",
    alt: "Crowded baseball stadium during a live game with the field and grandstands visible",
    sourcePage: "https://www.pexels.com/photo/crowd-on-a-baseball-stadium-17061702/",
    directAssetSource: "https://images.pexels.com/photos/17061702/pexels-photo-17061702.jpeg?auto=compress&cs=tinysrgb&w=1800",
    creator: "Courtney Garner",
    gravity: "center",
    notes: "Real baseball stadium photograph selected for the MLB Playoffs article."
  },
  "how-to-watch-world-series-2026": {
    file: "world-series-real-baseball-stadium-game-hero.webp",
    alt: "Aerial view of a crowded baseball game in a large city stadium",
    sourcePage: "https://www.pexels.com/photo/baseball-match-at-stadium-25547642/",
    directAssetSource: "https://images.pexels.com/photos/25547642/pexels-photo-25547642.jpeg?auto=compress&cs=tinysrgb&w=1800",
    creator: "NIKOLAI FOMIN",
    gravity: "center",
    notes: "Real baseball stadium photograph selected to visually differ from the MLB Playoffs stadium image."
  },
  "how-to-watch-nba-games-2026-27": {
    file: "nba-real-indoor-basketball-court-hero.webp",
    alt: "Empty indoor basketball court with blue arena seating",
    sourcePage: "https://www.pexels.com/photo/empty-indoor-basketball-court-with-official-29180063/",
    directAssetSource: "https://images.pexels.com/photos/29180063/pexels-photo-29180063.jpeg?auto=compress&cs=tinysrgb&w=1800",
    creator: "Rodrigo Ortega",
    gravity: "center",
    notes: "Real basketball court and arena photograph selected for immediate basketball relevance."
  },
  "best-iptv-player-for-firestick-2026": {
    file: "firestick-iptv-real-smart-tv-control-equipment-hero.webp",
    alt: "Modern smart TV control equipment with remote control and streaming device on a table",
    sourcePage: "https://www.pexels.com/photo/modern-smart-tv-control-equipment-11031497/",
    directAssetSource: "https://images.pexels.com/photos/11031497/pexels-photo-11031497.jpeg?auto=compress&cs=tinysrgb&w=1800",
    creator: "MOISES RIBEIRO",
    gravity: "center",
    notes: "Reusable real TV, remote, and streaming-device product-style photograph selected instead of an official Amazon asset whose editorial reuse was not verified."
  },
  "how-to-install-iptv-on-firestick-2026": {
    file: "firestick-install-real-tv-remote-setup-hero.webp",
    alt: "Person holding a television remote toward a TV in a living room setup",
    sourcePage: "https://www.pexels.com/photo/photo-of-person-holding-remote-control-4048092/",
    directAssetSource: "https://images.pexels.com/photos/4048092/pexels-photo-4048092.jpeg?auto=compress&cs=tinysrgb&w=1800",
    creator: "Erik Mclean",
    gravity: "center",
    notes: "Real TV and remote setup photograph selected to communicate device setup without unverified Fire TV branding."
  },
  "iptv-smarters-pro-firestick-setup": {
    file: "iptv-smarters-real-tv-gadgets-setup-hero.webp",
    alt: "Hands holding a smartphone and remote control in front of a TV and home entertainment devices",
    sourcePage: "https://www.pexels.com/photo/modern-technology-setup-with-tv-and-gadgets-31121857/",
    directAssetSource: "https://images.pexels.com/photos/31121857/pexels-photo-31121857.jpeg?auto=compress&cs=tinysrgb&w=1800",
    creator: "Jakub Zerdzicki",
    gravity: "center",
    notes: "No official IPTV Smarters media with clearly verified reuse terms was used; selected a real TV/device setup photo."
  },
  "tivimate-firestick-setup-2026": {
    file: "tivimate-real-tv-remote-device-setup-hero.webp",
    alt: "Hand using a remote control with a TV and laptop in a cozy room",
    sourcePage: "https://www.pexels.com/photo/controlling-entertainment-devices-in-a-cozy-room-29148795/",
    directAssetSource: "https://images.pexels.com/photos/29148795/pexels-photo-29148795.jpeg?auto=compress&cs=tinysrgb&w=1800",
    creator: "Jakub Zerdzicki",
    gravity: "center",
    notes: "No official TiviMate media with clearly verified reuse terms was used; selected a real TV/remote setup photo."
  },
  "xtream-codes-iptv-setup-guide": {
    file: "xtream-codes-real-tv-remote-streaming-hero.webp",
    alt: "Hand holding a remote control toward a television in a dim living room",
    sourcePage: "https://www.pexels.com/photo/faceless-person-switching-channels-on-tv-7400892/",
    directAssetSource: "https://images.pexels.com/photos/7400892/pexels-photo-7400892.jpeg?auto=compress&cs=tinysrgb&w=1800",
    creator: "Nothing Ahead",
    gravity: "center",
    notes: "No legitimate Xtream-specific photograph with verified reuse terms was found; selected a relevant real TV/streaming setup photo."
  },
  "best-iptv-apps-smart-tv-2026": {
    file: "smart-tv-real-minimal-living-room-hero.webp",
    alt: "Minimalist living room with modern furniture and a flat-screen television",
    sourcePage: "https://www.pexels.com/photo/tv-in-a-living-room-19866439/",
    directAssetSource: "https://images.pexels.com/photos/19866439/pexels-photo-19866439.jpeg?auto=compress&cs=tinysrgb&w=1800",
    creator: "Lisa Anna",
    gravity: "center",
    notes: "Real modern living-room TV photograph selected for the Smart TV apps article."
  },
  "how-to-fix-iptv-buffering-freezing": {
    file: "iptv-buffering-real-wireless-router-hero.webp",
    alt: "White wireless router with four antennas lit by blue and pink light",
    sourcePage: "https://www.pexels.com/photo/modern-wireless-router-with-antennas-29711663/",
    directAssetSource: "https://images.pexels.com/photos/29711663/pexels-photo-29711663.jpeg?auto=compress&cs=tinysrgb&w=1800",
    creator: "Jakub Zerdzicki",
    gravity: "center",
    notes: "Real wireless router photograph selected for network and buffering troubleshooting relevance."
  }
};

function download(url, destination) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(destination);
    get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        download(response.headers.location, destination).then(resolve, reject);
        return;
      }
      if (response.statusCode !== 200) {
        file.close();
        reject(new Error(`Download failed with ${response.statusCode}: ${url}`));
        return;
      }
      response.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", (error) => {
      file.close();
      reject(error);
    });
  });
}

function runMagick(input, output, gravity) {
  const result = spawnSync("magick", [
    input,
    "-auto-orient",
    "-resize",
    "1200x630^",
    "-gravity",
    gravity,
    "-extent",
    "1200x630",
    "-strip",
    "-quality",
    "82",
    "-define",
    "webp:method=6",
    output
  ], { stdio: "inherit" });

  if (result.status !== 0) {
    throw new Error(`ImageMagick failed for ${output}`);
  }
}

mkdirSync(outputDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

const articles = JSON.parse(readFileSync(blogDataPath, "utf8"));
const sourceRecords = [];

for (const article of articles) {
  const plan = imagePlan[article.slug];
  if (!plan) continue;

  const rawPath = path.join(tmpDir, `${article.slug}.jpg`);
  const localRelative = `/images/blog/${plan.file}`;
  const localPath = path.join(root, "public", localRelative);

  console.log(`Downloading ${article.slug}`);
  await download(plan.directAssetSource, rawPath);
  runMagick(rawPath, localPath, plan.gravity);

  article.images.hero = {
    src: localRelative,
    width: 1200,
    height: 630,
    alt: plan.alt
  };
  article.images.inline = [];

  sourceRecords.push({
    localFile: localRelative,
    article: article.slug,
    sourcePage: plan.sourcePage,
    directAssetSource: plan.directAssetSource,
    creator: plan.creator,
    license,
    licenseUrl,
    downloadDate,
    notes: `${licenseNotes} ${plan.notes}`
  });
}

writeFileSync(blogDataPath, `${JSON.stringify(articles, null, 2)}\n`);
writeFileSync(path.join(outputDir, "image-sources.json"), `${JSON.stringify(sourceRecords, null, 2)}\n`);

for (const record of sourceRecords) {
  const size = statSync(path.join(root, "public", record.localFile)).size;
  console.log(`${record.localFile} ${(size / 1024).toFixed(1)} KB`);
}

console.log(`Sourced and optimized ${sourceRecords.length} real web images.`);
