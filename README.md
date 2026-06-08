# Personal Portfolio

A clean, responsive single-page portfolio built with plain HTML, CSS, and JavaScript: no build step, no dependencies.

**🌐 Live at:** https://nimakhodarahmi1998.github.io/

## Updating the live site

It's hosted on GitHub Pages from the `main` branch. Any push auto-deploys (~1 min):

```bash
cd portfolio
git add -A
git commit -m "Update content"
git push
```

> Want a custom domain later (e.g. `nimakhodarahmi.dev`)? Buy it from any registrar,
> add GitHub Pages' DNS records, then set it under Repo → Settings → Pages → Custom domain.

## Preview locally

Just open `index.html` in your browser, or run a tiny local server:

```bash
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customize

Everything is meant to be edited by hand:

| What | Where |
|------|-------|
| Your name, bio, hero text | `index.html` |
| Projects (add/edit cards) | the `projects` array in `js/main.js` |
| Skills list | `index.html` → `.about__skills` |
| Email & social links | `index.html` → Contact section |
| Colors, fonts, spacing | `:root` variables at the top of `css/style.css` |
| Profile photo | drop a file at `assets/profile.jpg` |

Dark/light theme is automatic (follows system preference) and toggleable: the choice is saved in the browser.

## Deploy (free)

- **GitHub Pages**: push to a repo, enable Pages in Settings.
- **Netlify / Cloudflare Pages**: drag-and-drop the folder, or connect the repo.

No configuration needed since it's all static files.
