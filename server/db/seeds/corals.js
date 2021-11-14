exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('corals').del()
    .then(function () {
      // Inserts seed entries
      return knex('corals').insert([
        {
          id: 1,
          genus: 'Diploastrea',
          image: '/images/corals/diploastrea.png',
          lifestyle: 'Colony',
          growthForm: 'Massive',
          coralliteWall: 'Separate walls - volcano-like corallites',
          info: "Can form large colonies of up to 2m high and 5m wide. It's typical habitat is in silty environments and can be found on both exposed and protected reefs."
        },
        {
          id: 2,
          genus: 'Acropora',
          image: '/images/corals/acropora.png',
          lifestyle: 'Colony',
          growthForm: 'Branching',
          coralliteWall: 'Separate walls - only genus with the presence of a an axial corallite located on the branch tip',
          info: 'Different Acropora species can form plates or long branches (Staghorn coral). Acropora are extremely susceptible to bleaching when stressed and thrive in habitats with less wave action.'
        },
        {
          id: 3,
          genus: 'Pachyseris',
          image: '/images/corals/pachyseris.png',
          lifestyle: 'Colony',
          growthForm: 'Plate-like',
          coralliteWall: 'Parallel walls from edge',
          info: 'Pachyseris colonies can get quite large spreading several metres across. Colony plates are usually horizontal but can develop upright ridges.'
        },
        {
          id: 4,
          genus: 'Goniopora',
          image: '/images/corals/goniopora.png',
          lifestyle: 'Colony',
          growthForm: 'Massive',
          coralliteWall: 'Separate walls - daytime extended polyps with 24 tentacles surrounding mouth',
          info: "Despite it's soft extended polyps, Goniopora are a genus of hard stony corals that are commonly found in turbid water conditions. Gonipora also rely heavily on active predation using their tentacles."
        },
        {
          id: 5,
          genus: 'Fungia',
          image: '/images/corals/fungia.png',
          lifestyle: 'Solitary',
          growthForm: 'Solitary - single polyp',
          coralliteWall: 'No distinct walls - ragged, teeth-like septa',
          info: "Fungia form round discs where the central mouth is a slit surrounded by tentacles. Fungia can also capture planktonic food particles through active predation using their tentacles. Fungia can actively move and are known to form large aggregates with other Fungiid's"
        },
        {
          id: 6,
          genus: 'Favites',
          image: '/images/corals/favites.png',
          lifestyle: 'Colony',
          growthForm: 'Massive',
          coralliteWall: 'Shared walls',
          info: 'Favites colonies can be encrusting but are usually massive and dome-shaped.'
        },
        {
          id: 7,
          genus: 'Porites',
          image: '/images/corals/porites.png',
          lifestyle: 'Colony',
          growthForm: 'Massive',
          coralliteWall: 'Separate walls - very small corallites',
          info: 'Porites are one of the most dominant corals on the reef and have a high tolerance to salinity shifts. Porites species come in all shapes from massive, branching and plates.'
        },
        {
          id: 8,
          genus: 'Favia',
          image: '/images/corals/favia.png',
          lifestyle: 'Colony',
          growthForm: 'Massive',
          coralliteWall: 'Separate walls - cookie-like corallites',
          info: 'Favia are massive or encrusting corals that can either be dome-shaped or flat. '
        },
        {
          id: 9,
          genus: 'Platygyra',
          image: '/images/corals/platygyra.png',
          lifestyle: 'Colony',
          growthForm: 'Massive',
          coralliteWall: 'Shared walls - meandering',
          info: 'Commonly known as  brain corals.'
        }
      ])
    })
}
