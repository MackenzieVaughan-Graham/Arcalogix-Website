# Arcalogix platform scroll and services cleanup

## Recommended installation

Copy only these three files over your existing Arcalogix Next.js project:

1. `components/PlatformJourney.tsx`
2. `components/ServicesScrollScene.tsx`
3. `app/globals.css`

Test: `npm run dev`, scroll through **01 / The Platform** and **03 / Platform + Services**.
Production check: `npm run build`.

Deploy:

```bash
git add components/PlatformJourney.tsx components/ServicesScrollScene.tsx app/globals.css
git commit -m "Stabilize platform story and simplify service indicators"
git push origin main
```

The full-source archive is a reconstructed local copy; it has not been fetched directly from the live GitHub repository.
