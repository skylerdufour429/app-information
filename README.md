# App Information

A GitHub Pages + GitHub Codespaces-ready static web application for displaying archived iOS application information.

The website provides:

* App name
* Bundle ID
* Version
* Platform
* Minimum OS
* File size
* App information dialog
* Search
* Platform filtering
* PWA installation
* iPhone/iPad Home Screen installation instructions
* Responsive mobile layout

## App Information

| App Name               | Bundle ID                                   | Version | Platform | Minimum OS | File Size |
| ---------------------- | ------------------------------------------- | ------: | -------- | ---------: | --------: |
| Animal Sounds          | `com.smartbabyapps.animalsounds`            |     2.0 | iOS      |        3.1 |   19.8 MB |
| SoundTouch             | `com.yourcompany.SoundTouch`                |     1.4 | iOS      |        3.0 |  155.5 MB |
| Tozzle                 | `com.nodeflexion.Tozzle`                    |     3.7 | iOS      |      3.1.3 |  112.6 MB |
| AutismXpress           | `X7WS995LSR.com.StudioEmotion.AutismXpress` |     1.0 | iOS      |      3.1.2 |    7.4 MB |
| Lunchbox               | `com.thup.MonkeyPreschool`                  |     1.4 | iOS      |        3.0 |   13.7 MB |
| Peek-a-Zoo             | `com.duckduckmoosedesign.peekazoo`          |   1.1.1 | iOS      |        3.0 |   19.1 MB |
| Michigan Nature Sounds | `com.yourcompany.MichiganNatureSounds`      |     1.0 | iOS      |        3.0 |   24.6 MB |
| Peek-a-Zoo             | `com.tbd.pazCLL`                            |     1.0 | iOS      |        3.0 |   24.6 MB |
| Artsee                 | `com.britejar.artsee`                       |     1.1 | iOS      |        2.2 |   12.4 MB |
| Angry Birds            | `com.rovio.AngryBirdsHalloween`             |   1.5.3 | iOS      |        3.0 |   16.8 MB |
| Farm Flip Fun          | `lv.yapp.farmflipfun`                       |     1.0 | iOS      |        3.0 |   10.6 MB |
| Farm Story             | `com.teamlava.farmstory`                    |     1.2 | iOS      |        3.0 |   19.9 MB |
| Stickers               | `com.nightanddaystudios.ericcarlestickers`  |     1.0 | iOS      |        5.0 |  206.1 MB |
| Forest                 | `com.nightanddaystudios.peekabooforest`     |   1.1.0 | iOS      |      3.1.3 |   25.6 MB |
| Virtuoso               | `com.peterb.virtuosopianofree`              |   3.1.2 | iOS      |        4.0 |   19.9 MB |
| ABC Tracer             | `com.appzoo.ABCTracer`                      |     1.8 | iOS      |      2.2.1 |   20.9 MB |
| Peek Wild              | `com.nightanddaystudios.peekaboowild`       |   2.0.1 | iOS      |      3.1.3 |    9.8 MB |
| Peekaboo               | `com.nightanddaystudios.peekaboobarn`       |     2.0 | iOS      |        2.2 |    3.6 MB |
| Finding Sight          | `my.finding3`                               |     2.1 | iOS      |        3.2 |     34 MB |
| ArtikPix               | `com.rinnapps.artikpix.iap`                 |   1.2.4 | iOS      |        3.1 |   41.4 MB |

> The original entry for **Stickers** did not specify a unit for `206.1`; this example treats it as `206.1 MB` for consistency with the other entries.

## Running with GitHub Codespaces

Create a repository and add the project files:

```text
index.html
styles.css
app.js
manifest.webmanifest
README.md
assets/icon.svg
```

Open the repository in GitHub Codespaces.

No build system is required.

The application is plain HTML, CSS, and JavaScript.

For local development, start any static HTTP server.

For example:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## GitHub Pages

Push the project to GitHub.

Open:

```text
Settings → Pages
```

Under **Build and deployment**, select:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

Save the configuration.

GitHub Pages will publish the static website at the repository's Pages address.

## Install the Web App on iPhone

The website is configured as a Progressive Web App.

On an iPhone or iPad:

1. Open the GitHub Pages website in Safari.
2. Tap the **Share** button.
3. Select **Add to Home Screen**.
4. Choose **Add**.
5. Launch **App Information** from the Home Screen.

The PWA uses:

```text
manifest.webmanifest
```

and the application metadata includes:

```html
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="App Information">
```

## IPA Files

If this project is expanded to host IPA archives, an application record can additionally contain:

```javascript
{
  name: "Example App",
  bundleId: "com.example.app",
  version: "1.0",
  platform: "iOS",
  minimumOS: "3.1",
  fileSize: "20 MB",
  ipa: "files/example.ipa"
}
```

A download button can then point to the IPA file.

However, hosting an IPA file and installing an IPA are separate things. An iOS device generally requires the application to be appropriately signed and installed through a supported distribution mechanism.

For OTA-style installation, a properly configured HTTPS manifest and signed application are required. GitHub Pages provides static HTTPS hosting but does not sign an IPA.

## Adding an App

Open:

```text
app.js
```

Add another object to the `apps` array:

```javascript
{
  name: "Example App",
  bundleId: "com.example.app",
  version: "1.0",
  platform: "iOS",
  minimumOS: "3.1",
  fileSize: "25 MB"
}
```

The application will automatically appear in the search and filtering interface.

## License

This example is provided as a starter template. Make sure you have the appropriate rights to distribute any application files, icons, trademarks, or other copyrighted materials you add to the archive.
