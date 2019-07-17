export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d2e976b1247edf37ab34dc7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ynn16yif',
                  apiId: '681087eb-dbe0-4167-9e45-4f88f7fb48d0'
                },
                {
                  buildHookId: '5d2e976b8c0e673cf39bab39',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-z4wjcgv3',
                  apiId: '54046950-6645-433f-b474-cfd8accdc399'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ksmithbaylor/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-z4wjcgv3.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
