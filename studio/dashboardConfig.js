export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6176cc88d1fb6b7d6f613c1c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g9tnsnnf',
                  apiId: 'd89d836b-e767-4b3d-acc8-536358f895ce'
                },
                {
                  buildHookId: '6176cc88ba2adfb5a6c00523',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rr9tz57c',
                  apiId: '1e8a61af-9ba4-4637-8b96-7a05a1f4824a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suryapramodhd/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rr9tz57c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
