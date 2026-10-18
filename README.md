# GRUB2 Theme Guide

**A comprehensive, hands-on guide to creating and understanding GNU GRUB2 themes.**

GRUB2 offers a surprisingly flexible theming system, allowing you to customize boot menus with images, fonts, graphical
components, progress indicators, and custom layouts.

However, understanding how these features work isn't always straightforward. Documentation is often scattered,
incomplete, or focused on providing ready-made configurations without explaining the underlying behavior.

**GRUB2 Theme Guide** aims to make the process easier to understand by providing practical examples, detailed
explanations, and a step-by-step approach to building a theme from scratch.

## What you'll learn

This guide covers the fundamentals of GRUB2 theming and gradually introduces more advanced concepts.

- **Getting started:** Set up your environment, understand the theme directory structure, and create your first working
  theme.
- **Theme configuration:** Learn the syntax of `theme.txt`, global properties, data types, and component definitions.
- **Graphical components:** Work with images, labels, boot menus, progress indicators, and containers.
- **Layout and positioning:** Understand coordinates, dimensions, alignment, scaling, and screen resolutions.
- **Graphical decorations:** Create custom borders, backgrounds, and nine-slice decorations.
- **Fonts and typography:** Convert fonts to PF2 and use them in your themes.
- **Testing and debugging:** Test themes safely, identify configuration issues, and troubleshoot unexpected behavior.

The goal isn't just to teach you which properties to change, but to explain **why they work and how they interact**.

## Documentation structure

The documentation is divided into four main sections:

| Section             | Description                                                                   |
|---------------------|-------------------------------------------------------------------------------|
| **Getting Started** | Introduction, environment setup, and your first theme.                        |
| **Tutorial**        | A progressive, hands-on walkthrough for building a complete theme.            |
| **Concepts**        | In-depth explanations of the GRUB2 theming system and its behavior.           |
| **Reference**       | Technical information about components, properties, data types, and commands. |

The tutorial follows a single project throughout its chapters, introducing new components and techniques as the theme
evolves.

The reference section is designed for quick lookups without requiring you to follow the tutorial.

## Project status

> **Work in progress**
>
> This guide is under active development. Some sections may be incomplete, and the documentation structure may change as
> new content is added.

The documentation is currently being written in **Brazilian Portuguese (pt-BR)**, with an English translation planned
for the future.

## Running locally

This documentation website is built using [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

You'll need Node.js and npm installed.

Clone the repository:

```bash
git clone https://github.com/HarukaYamamoto0/grub2-theme-guide.git
cd grub2-theme-guide
```

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun dev
```

Astro will start a local development server, usually available at `http://localhost:4321`.

To generate a production build:

```bash
bun build
```

To preview the production build locally:

```bash
bun preview
```

Documentation pages are written primarily in Markdown (`.md`), with MDX (`.mdx`) used when additional components or
interactive elements are needed.

## Contributing

Contributions, corrections, and suggestions are welcome.

Whether you've found an undocumented GRUB2 behavior, noticed an inaccurate explanation, or have an example worth
sharing, your input can help improve this guide.

You can contribute by:

- Reporting documentation errors or outdated information.
- Suggesting improvements or new topics.
- Adding examples and clarifying existing explanations.
- Helping test configurations across different Linux distributions.
- Contributing translations.

For significant changes, consider opening an issue first to discuss the proposed approach.

## References

This project is informed by the official GNU GRUB documentation, available source code, and practical experimentation.

- [GNU GRUB Manual](https://www.gnu.org/software/grub/manual/grub/)
- [GRUB Theme File Format](https://www.gnu.org/software/grub/manual/grub/html_node/Theme-file-format.html)
- [GNU GRUB Source Code](https://git.savannah.gnu.org/cgit/grub.git/)

## Disclaimer

GRUB2 is a bootloader, and incorrect configuration changes can affect your system's ability to boot.

Always keep a backup of your existing configuration and, whenever possible, test themes in a virtual machine before
applying them to your main system.

This is an independent community documentation project and is not affiliated with or officially endorsed by the GNU GRUB
project.