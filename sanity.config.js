import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity';

export const config = defineConfig({
    projectId: "hf6s0p0z",
    dataset: "production",
    title: "Blogs",
    apiVersion: '2023-11-23',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemaTypes }

})