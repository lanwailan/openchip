# OpenChip

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

OpenChip is an open-source documentation hub dedicated to providing comprehensive technical documentation for semiconductor chips and microcontrollers.

## Features

- **Multi-language Support** - Documentation available in English and Chinese
- **Full-text Search** - Powered by Pagefind
- **Organized Structure** - Clean, hierarchical organization of manuals and guides
- **Dynamic Content** - Auto-generated manufacturer cards from content
- **Responsive Design** - Works on desktop and mobile devices

## Supported Manufacturers

- **Infineon** - AURIX microcontrollers, power management chips, and automotive electronics
- **STMicroelectronics (ST)** - Microcontrollers, sensors, and power devices
- **NXP** - Automotive, industrial, and IoT solutions

## 🚀 Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── en/          # English documentation
│   │   │   └── zh/          # Chinese documentation
│   │   └── i18n/            # Translation files
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight's docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

## Contributing

We welcome contributions! Please visit our [GitHub repository](https://github.com/lanwailan/openchip) for more information.

---

*OpenChip - Making chip documentation accessible to everyone.*
