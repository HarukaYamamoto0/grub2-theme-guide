// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'GRUB2 Theme Guide',
        social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/HarukaYamamoto0/grub-theme-guide'}],
        sidebar: [
            {label: 'Introdução', items: [{autogenerate: {directory: 'introduction'}}]},
            {label: 'Primeiros passos', items: [{autogenerate: {directory: 'getting-started'}}]},
            {label: 'Arquivo do tema', items: [{autogenerate: {directory: 'theme-file'}}]},
            {label: 'Aparência', items: [{autogenerate: {directory: 'appearance'}}]},
            {label: 'Componentes', items: [{autogenerate: {directory: 'components'}}]},
            {label: 'Organização visual', items: [{autogenerate: {directory: 'layout'}}]},
            {label: 'Decorações gráficas', items: [{autogenerate: {directory: 'decorations'}}]},
            {label: 'Tema completo', items: [{autogenerate: {directory: 'complete-theme'}}]},
            {label: 'Testes e depuração', items: [{autogenerate: {directory: 'testing-and-debugging'}}]},
            {label: 'Distribuição', items: [{autogenerate: {directory: 'distribution'}}]},
            {label: 'Reference', items: [{autogenerate: {directory: 'reference'}}]}
        ],
        editLink: {
            baseUrl: 'https://github.com/HarukaYamamoto0/grub2-theme-guide.git',
        },
    })],
    site: "https://grubtheme.com"
});
