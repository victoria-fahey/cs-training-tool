exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bleach').del()
    .then(function () {
      // Inserts seed entries
      return knex('bleach').insert([
        {
          id: 1,
          bleach: 'Massive - Fully Bleached',
          info: '',
          image: '/images/bleach/astreopora_bleached.png'
        },
        {
          id: 2,
          bleach: 'Branching - Not Bleached',
          info: 'Tips of branching Acropora are white (the axial corallite), this is normal as its the site of new tissue growth.',
          image: '/images/bleach/acropora.png'
        },
        {
          id: 3,
          bleach: 'Plate-like - Partially Bleached',
          info: '',
          image: '/images/bleach/montipora_pb.png'
        },
        {
          id: 4,
          bleach: 'Branching - Partially Bleached',
          info: '',
          image: '/images/bleach/acropora_pb.png'
        },
        {
          id: 5,
          bleach: 'Massive - Not Bleached',
          info: '',
          image: '/images/bleach/cyphastrea.png'
        },
        {
          id: 6,
          bleach: 'Massive - Fully Bleached',
          info: '',
          image: '/images/bleach/porites_fb.png'
        },
        {
          id: 7,
          bleach: 'Massive - Not Bleached',
          info: 'Lobophyllia polyps starting to "pale" but not quite bleached.',
          image: '/images/bleach/lobophyllia_nb.png'
        },
        {
          id: 8,
          bleach: 'Massive - Partially Bleached',
          info: '',
          image: '/images/bleach/porites_pb.png'
        },
        {
          id: 9,
          bleach: 'Massive - Not Bleached',
          info: 'Not coral bleaching, these are Parrotfish bite marks.',
          image: 'images/bleach/parrotfish_bite.png'
        },
        {
          id: 10,
          bleach: 'Branching - Partially Bleached',
          info: '',
          image: '/images/bleach/acropora_fb.png'
        },
        {
          id: 11,
          bleach: 'Massive - Partially Bleached',
          info: '',
          image: '/images/bleach/galaxea_bleached.png'
        },
        {
          id: 12,
          bleach: 'Massive - Not Bleached',
          info: 'This pale colouration is normal for Favia colonies.',
          image: '/images/bleach/favia.jpg'
        },
        {
          id: 13,
          bleach: 'Massive - Partially Bleached',
          info: '',
          image: '/images/bleach/lobophyllia_pb2.png.png'
        },
        {
          id: 14,
          bleach: 'Massive - Partially Bleached',
          info: '',
          image: '/images/bleach/porites_pb4.png'
        },
        {
          id: 15,
          bleach: 'Massive - Not Bleached',
          info: '',
          image: '/images/bleach/galaxea.png'
        },
        {
          id: 16,
          bleach: 'Massive - Not Bleached',
          info: 'This is a diseased Porites and not from coral bleaching.',
          image: '/images/bleach/porites_nb.jpg'
        },
        {
          id: 17,
          bleach: 'Massive - Partially Bleached',
          info: '',
          image: '/images/bleach/lobophyllia_pb.png'
        },
        {
          id: 18,
          bleach: 'Massive - Not Bleached',
          info: 'This is normal and the calcium carbonate skeleton of Goniopora when its polyps are retracted.',
          image: '/images/bleach/goniopora_nb.png'
        },
        {
          id: 19,
          bleach: 'Massive - Partially Bleached',
          info: '',
          image: '/images/bleach/porites_pb3.png'
        },
        {
          id: 20,
          bleach: 'Massive - Not Bleached',
          info: 'Lobophyllia polyps starting to "pale" but not quite bleached.',
          image: '/images/bleach/lobophyllia_nb2.png'
        },
        {
          id: 21,
          bleach: 'Massive - Partially Bleached',
          info: '',
          image: '/images/bleach/porites_pb2.png'
        }
      ])
    })
}
