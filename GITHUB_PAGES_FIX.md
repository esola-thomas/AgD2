# GitHub Pages Deployment Fix

## Issue
After deploying to GitHub Pages, all assets returned 404 errors:
- Images (hero-bg.png, logo, team photos)
- CSS files
- All public assets

## Root Cause
The `base` URL in `astro.config.mjs` was set to `/` instead of `/AgD2/`.

When deploying to GitHub Pages at `https://esola-thomas.github.io/AgD2/`, Astro needs to know the subdirectory path to generate correct asset URLs.

## Solution

### Updated astro.config.mjs

**Before** (INCORRECT):
```js
export default defineConfig({
  site: 'https://esola-thomas.github.io',
  base: '/',  // ❌ Wrong - causes 404s
  // ...
});
```

**After** (CORRECT):
```js
export default defineConfig({
  site: 'https://esola-thomas.github.io',
  base: '/AgD2',  // ✅ Correct - matches GitHub Pages subdirectory
  // ...
});
```

## How It Works

With `base: '/AgD2'`:
- Assets are built to: `/AgD2/hero-bg.png`
- CSS is built to: `/AgD2/_astro/index.[hash].css`
- All URLs automatically prefixed with `/AgD2`

The `import.meta.env.BASE_URL` in components automatically resolves to `/AgD2/` in production.

## Deploy Steps

1. **Fix the config** (✅ Done):
   ```bash
   # astro.config.mjs
   base: '/AgD2'
   ```

2. **Rebuild**:
   ```bash
   npm run build
   ```

3. **Commit and push**:
   ```bash
   git add astro.config.mjs
   git commit -m "Fix: Set correct base URL for GitHub Pages"
   git push
   ```

4. **Wait for GitHub Actions**:
   - Action will automatically trigger
   - Build and deploy (~2-3 minutes)
   - Check: https://esola-thomas.github.io/AgD2/

## Verification

After deployment, verify:
- ✅ All images load
- ✅ CSS applies correctly
- ✅ Team photos display
- ✅ Logo shows in header/footer
- ✅ No 404 errors in console

## Alternative: Custom Domain

If using a custom domain (e.g., `agd2.com`):

```js
export default defineConfig({
  site: 'https://agd2.com',
  base: '/',  // Root domain uses '/'
  // ...
});
```

Then add `CNAME` file in `/public/`:
```
agd2.com
```

## Common Mistakes

❌ **Wrong**: `base: '/AgD2/'` (trailing slash causes issues)
✅ **Correct**: `base: '/AgD2'` (no trailing slash)

❌ **Wrong**: Forgetting to rebuild after changing config
✅ **Correct**: Always run `npm run build` after config changes

❌ **Wrong**: Using absolute paths like `/image.png` in code
✅ **Correct**: Using `${import.meta.env.BASE_URL}image.png`

## Testing Locally

To test with the production base path:

```bash
npm run build
npm run preview
# Opens at: http://localhost:4321/AgD2
```

This matches the production URL structure.

## Quick Reference

| Environment | Base URL | Full URL |
|-------------|----------|----------|
| Development | `/AgD2/` | http://localhost:4322/AgD2 |
| Preview | `/AgD2/` | http://localhost:4321/AgD2 |
| Production | `/AgD2/` | https://esola-thomas.github.io/AgD2/ |

---

**Status**: ✅ Fixed
**Next Step**: Commit and push to trigger redeployment
