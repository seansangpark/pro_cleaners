import images from './images';

const dry_cleanings = [
  {
    title: '3/4 Coat',
    price: '$13.99',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Blanket',
    price: '$17.99',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Blazer',
    price: '$6.99',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Blouse',
    price: '$5.25',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Comforter',
    price: '$35.00',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Dress',
    price: '$11.99',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Golf Shirt',
    price: '$4.75',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Jacket',
    price: '$6.99',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Jeans',
    price: '$5.75',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Jersey',
    price: '$4.99',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Pants',
    price: '$5.23',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Robe',
    price: '$12.99',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Shirt',
    price: '$4.25',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Shorts',
    price: '$4.75',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Skirt',
    price: '$5.75',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Suit 2PC',
    price: '$12.99',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Suit 3PC',
    price: '$16.50',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Sweater',
    price: '$6.00',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'T-Shirt',
    price: '$4.79',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
  {
    title: 'Vest',
    price: '$3.99',
    tags: 'Fresh Laundry | Cleaned and Pressed',
  },
];

const repairs = [
  {
    title: 'Trousers',
    price: 'from $12.99',
    tags: 'Zips',
  },
  {
    title: 'Skirts',
    price: 'from $12.99',
    tags: 'Zips',
  },
  {
    title: 'Dresses',
    price: 'from $13.99',
    tags: 'Zips',
  },
  {
    title: 'Jacket / Coat',
    price: 'from $15.99',
    tags: 'Zips',
  },
  {
    title: 'Leather Jacket',
    price: 'from $36.99',
    tags: 'Zips',
  },
  {
    title: 'Shorten',
    price: 'from $12.99',
    tags: 'Trousers | Turn-up',
  },
  {
    title: 'Lengthen',
    price: 'from $12.99',
    tags: 'Trousers',
  },
  {
    title: 'Taper',
    price: 'from $14.99',
    tags: 'Trousers',
  },
  {
    title: 'Waist Amend',
    price: 'from $14.99',
    tags: 'Trousers',
  },
  {
    title: 'New Half Pocket',
    price: 'from $8.99',
    tags: 'Trousers',
  },
  {
    title: 'New Full Pocket',
    price: 'from $14.99',
    tags: 'Trousers | New Half Pocket also available',
  },
  {
    title: 'Shorten',
    price: 'from $12.99',
    tags: 'Dresses & Skirts | Plain & Lined',
  },
  {
    title: 'Shorten - 2 + Pleats',
    price: 'from $14.80',
    tags: 'Dresses & Skirts',
  },
  {
    title: 'Waist Amend',
    price: 'from $16.30',
    tags: 'Dresses & Skirts',
  },
  {
    title: 'Take in',
    price: 'from $15.20',
    tags: 'Dresses & Skirts | Plain & Lined',
  },
  {
    title: 'Shortened & Lengthened',
    price: 'from $3.60',
    tags: 'Curtains | per foot',
  },
  {
    title: 'Sleeve',
    price: 'from $19.99',
    tags: 'Jackets | Shortened | Lengthened',
  },
  {
    title: 'Coats',
    price: 'from $22.00',
    tags: 'Jackets | Shorten',
  },
  {
    title: 'Jackets',
    price: 'from $26.99',
    tags: 'Jackets | Shorten',
  },
  {
    title: 'Shoulder Pads',
    price: 'from $15.99',
    tags: 'Jackets | Removed',
  },
];

const customer_reviews = [
  {
    author: 'Ritz L',
    author_detail: 'Local Guide | 71 reviews',
    stars: 5,
    review:
      "A good small business that the owners work at and even staff the counter. Cleaning and alterations are top notch and pricing is reasonable. They say if you find a good cleaner and alterations place, you should keep it... well, this is my keeper (and right next to Sammy's bar and nail salon).",
  },
  {
    author: 'Sang Park',
    author_detail: 'Local Guide | 27 reviews',
    stars: 5,
    review: 'Excellent Service! Best one in town.',
  },
  {
    author: 'Reginald Allen',
    author_detail: 'Local Guide | 25 reviews',
    stars: 5,
    review:
      'The staff is very friendly, courteous & professional. They fixed my buttonless shorts immediately at no charge. This is definitely a business that thinks long term and I will be taking all my dry cleaning here going forward!',
  },
  {
    author: 'Catherine Martin',
    author_detail: 'Local Guide | 7 reviews',
    stars: 5,
    review:
      'We love this place! They do stellar work and are always so kind. Highly recommend!',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { dry_cleanings, repairs, awards, customer_reviews };
