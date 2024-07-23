# [Trail Valle de Samuño](www.trailvallesamu%C3%B1o.es)
Second iteration of a static website for the Trail Valle de Samuño, arguably the best trail running race in Asturias (northern Spain). First version was created using Ruby's Middleman static site generator ([original repo](https://github.com/guitarranalon/trailvallesamuno)) now giving a try to Javascript's Astro.
  
 ## Environment
 **node:** v22.4.1  
## 🚀 Project Structure

  

Inside of your Astro project, you'll see the following folders and files:

  

```text

/

├── public/

├── src/

│ └── pages/

│ └── index.astro

└── package.json

```

  

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

  

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

  

Any static assets, like images, can be placed in the `public/` directory.

  

## 🧞 Commands

  

All commands are run from the root of the project, from a terminal:

  

| Command | Action |

| :------------------------ | :----------------------------------------------- |

| `npm install` | Installs dependencies |

| `npm run dev` | Starts local dev server at `localhost:4321` |

| `npm run build` | Build your production site to `./dist/` |

| `npm run build:css` | Build stylesheets to `/public/stylesheets` |

| `npm run build:css-prod` | Build **compressed** stylesheets to `/public/stylesheets` |

| `npm run build:pro` | Build production site and styles to `./dist` |

| `npm run preview` | Preview your build locally, before deploying |

| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

| `npm run astro -- --help` | Get help using the Astro CLI |

| `npx rollup -c` | Bundles all javascripts imported in `/scripts/index.js` to `/public/scripts/bundle.js` and `/public/scripts/bundle.min.js` which is the same code but compressed |