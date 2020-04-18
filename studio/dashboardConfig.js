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
                  buildHookId: '5e9b0dd09df17c1372468aa3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-az1o9tqq',
                  apiId: '8368bedd-6c14-421f-9bd5-0220c2484e88'
                },
                {
                  buildHookId: '5e9b0dd17824fa2bfe7526ff',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qc23r3gw',
                  apiId: 'abac93bc-fc03-4e00-a525-6b1d5beb1496'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sgilliam15/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qc23r3gw.netlify.app', category: 'apps'}
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
