# App Information

A GitHub Pages + GitHub Codespaces-ready Progressive Web App for displaying application metadata.

## Features

* App Information archive
* Search applications
* Filter by platform
* App name
* Bundle ID
* Version
* Platform
* Minimum OS
* File size
* Responsive design
* App Information modal
* PWA support
* Install App button
* Add to Home Screen instructions
* Offline caching through a service worker
* No database or backend required

## Included Apps

The example database contains:

* Animal Sounds
* SoundTouch
* Tozzle
* AutismXpress
* Lunchbox
* Peek-a-Zoo
* Michigan Nature Sounds
* Artsee
* Angry Birds
* Farm Flip Fun
* Farm Story
* Stickers
* Forest
* Virtuoso
* ABC Tracer
* Peek Wild
* Peekaboo
* Finding Sight
* ArtikPix

## Run in GitHub Codespaces

Create a Codespace from this repository.

Then start a local static server.

For example:

```bash
python3 -m http.server 8080
```

Open port `8080` in the Codespaces Ports panel.

The application can then be previewed in the browser.

## GitHub Pages

Push the project to GitHub.

Go to:

**Repository → Settings → Pages**

Under **Build and deployment**:

* Source: Deploy from a branch
* Branch: `main`
* Folder: `/ (root)`

Save the configuration.

GitHub Pages will publish the application.

## Adding an App

Open `app.js` and add another object to the `apps` array:

```javascript
{
  name: "Example App",
  bundleId: "com.example.app",
  version: "1.0",
  platform: "iOS",
  minimumOS: "5.0",
  fileSize: "25.4 MB"
}
```

## Important

The **Install App** / **Add to Home Screen** feature installs this website as a Progressive Web App.

It does not automatically install an archived iOS IPA.

An actual iOS application installation requires an appropriate iOS distribution and signing mechanism.

## iPhone / iPad Home Screen

On iPhone or iPad:

1. Open the GitHub Pages website in Safari.
2. Tap the Share button.
3. Select **Add to Home Screen**.
4. Tap **Add**.

The App Information website will appear on the Home Screen.

## License

Use and modify this example according to the license you choose for your repository.
