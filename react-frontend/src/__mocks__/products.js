import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2020',
    tags: '#malaysia #agriculture',
    description: 'For SMEs that are business enterprises in the primary agriculture sector and registered in Malaysia',
    media: '/static/images/products/product_1.png',
    title: 'Primary agriculture Sector, Maybank Malaysia',
    totalDownloads: 'DHRRA Malaysia'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    tags: '#taiwan #sustainable',
    description: 'Convergence awards a feasibility study grant to the Wildlife Conservation Society (WCS) to develop a blended finance solution in Taiwan that increases access to credit and training for smallholder coffee farmers to engage in sustainable agriculture',
    media: '/static/images/products/product_2.png',
    title:  'Sustainable Agriculture in Taiwan',
    totalDownloads: 'TaiwanDHRRA'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    tags: '#international',
    description: 'The International Fund for Agricultural Development (IFAD) is an international financial institution and a specialized agency of the United Nations dedicated to eradicating poverty and hunger in rural areas of developing countries.',
    media: '/static/images/products/product_3.png',
    title: 'The International Fund for Agricultural Development (IFAD)',
    totalDownloads: 'World'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    tags: '#urban #agriculture',
    description: 'Grants to nourish communities with fresh, healthy food; teach generations the joy and fulfillment of farming and partnerships; and produce environmental benefits by reducing food waste and creating compost that can be used in a variety of farming operations.',
    media: '/static/images/products/product_4.png',
    title: 'Urban Agriculture Grants in Thailand',
    totalDownloads: 'ThaiDHRRA'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    tags: '#international #innovation',
    description: 'The Urban Agriculture and Innovative Production (UAIP) Competitive Grants Program supports a wide range of activities through two grant types, which are Planning Projects and Implementation Projects. Activities include operating community gardens and nonprofit farms, increasing food production and access in economically distressed communities, providing job training and education and developing business plans and zoning.',
    media: '/static/images/products/product_5.png',
    title: 'The Urban Agriculture and Innovative Production (UAIP) Competitive Grants',
    totalDownloads: 'World'
  },
  {
    id: uuid(),
    tags: '#korea #foodwaste',
    createdAt: '04/04/2019',
    description: 'Through Community Compost and Food Waste Reduction (CCFWR) Projects, USDA is investing approximately $1.92 million in 24 pilot projects to develop and implement strategies for municipal compost plans and food waste reduction plans. USDA prioritized projects that anticipate or demonstrate economic benefits, incorporate plans to make compost easily accessible to farmers, including community gardeners, integrate other food waste strategies, including food recovery efforts and collaborate with multiple partners.',
    media: '/static/images/products/product_6.png',
    title: 'Through Community Compost and Food Waste Reduction (CCFWR) Projects in Korea',
    totalDownloads: 'KoDHRRA'
  }
];