# public/assets/projects/

Ide kerülnek a projekt-screenshotok/képek, mappánként a projekt slugja szerint,
pl. `public/assets/projects/my-anki/screenshot-1.png`.

Ha felteszel egy képet, a hozzá tartozó `.md` fájlban (`src/content/projects/<slug>.md`)
az `image:` mezőt állítsd a kép elérési útjára, pl.:

```yaml
image: "/assets/projects/my-anki/screenshot-1.png"
```

Ez a fájl csak azért van itt, hogy a git ne hagyja ki az üres mappát — nyugodtan
törölheted, amint van benne legalább egy valódi kép.
