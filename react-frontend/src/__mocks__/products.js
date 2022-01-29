import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2020',
    tags: '#malaysia #agriculture',
    description: 'Meta Platforms, Inc., doing business as Meta and formerly known as Facebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company is the parent organization of Facebook, Instagram, and WhatsApp, among other subsidiaries.',
    media: '/static/images/logos/meta.png',
    title: 'Meta',
    ticker: 'FB',
    totalDownloads: 'DHRRA Malaysia'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    tags: '#taiwan #sustainable',
    description: 'Netflix, Inc. is an American subscription streaming service and production company. Launched on August 29, 1997, it offers a library of films and television series through distribution deals as well as its own productions, known as Netflix Originals',
    media: '/static/images/logos/netflix.png',
    title: 'Netflix',
    ticker: 'NFLX',
    totalDownloads: 'TaiwanDHRRA'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    tags: '#international',
    description: 'The Boeing Company is an American multinational corporation that designs, manufactures, and sells airplanes, rotorcraft, rockets, satellites, telecommunications equipment, and missiles worldwide. The company also provides leasing and product support services.',
    media: '/static/images/logos/boeing.png',
    title: 'The Beoing Company',
    ticker: 'BA',
    totalDownloads: 'World'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    tags: '',
    description: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services.',
    media: '/static/images/logos/apple.png',
    title: 'Apple Inc.',
    ticker: 'AAPL',
    totalDownloads: 'ThaiDHRRA'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    tags: '#international #innovation',
    description: 'Cipla Limited is an Indian multinational pharmaceutical company, headquartered in Mumbai, India. Cipla primarily develops medicines to treat respiratory, cardiovascular disease, arthritis, diabetes, weight control and depression; other medical conditions',
    media: '/static/images/logos/cipla.png',
    title: 'Cipla Ltd',
    ticker: 'CIPLA',
    totalDownloads: 'World'
  },
  {
    id: uuid(),
    tags: '#korea #foodwaste',
    createdAt: '04/04/2019',
    description: 'The Goldman Sachs Group, Inc. is an American multinational investment bank and financial services company headquartered in New York City. Goldman Sachs offers services in investment banking, securities underwriting, asset management and investment management, and prime brokerage.',
    media: '/static/images/logos/gs.png',
    title: 'The Goldman Sachs Group, Inc.',
    ticker: 'GS',
    totalDownloads: 'KoDHRRA'
  },
  {
    id: uuid(),
    tags: '#korea #foodwaste',
    createdAt: '04/04/2019',
    description: 'JPMorgan Chase & Co. is an American multinational investment bank and financial services holding company headquartered in New York City. JPMorgan Chase is incorporated in Delaware.',
    media: '/static/images/logos/jpm.png',
    title: 'JPMorgan Chase & Co.',
    ticker: 'JPM',
    totalDownloads: 'KoDHRRA'
  }
];