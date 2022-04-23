exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fish').del()
    .then(function () {
      // Inserts seed entries
      return knex('fish').insert([
        {
          id: 1,
          family: 'Angelfish',
          species: '6 Banded Angelfish',
          image: '/images/fish/6banded_angelfish.jpeg',
          sizeRange: 'up to 45cm',
          morphology: 'Deep laterally compressed body, similar to butterfly fish expcept larger',
          info: 'Corallivore'
        },
        {
          id: 2,
          family: 'Butterflyfish',
          species: '8 Banded Butterflyfish',
          image: '/images/fish/8banded_butterflyfish.jpeg',
          sizeRange: 'max. length 12cm',
          morphology: 'Laterally compressed, disk-shaped body, with a pointed snout. Yellow colouration with 8 black stripes across body',
          info: 'Corallivore. They have small home ranges, some can even be found in the branches of Acropora. Form heterosexual pairs.'
        },
        {
          id: 3,
          family: 'Butterflyfish',
          species: 'Bannerfish',
          image: '/images/fish/bannerfish_butterflyfish.jpeg',
          sizeRange: '18 - 21cm',
          morphology: 'Laterally compressed, long white dorsal fin, short snout with small terminal mouth. Not to be confused with the Moorish Idol from Finding Nemo.',
          info: 'Corallivore. Can form schools.'
        },
        {
          id: 4,
          family: 'Grouper',
          species: 'Spotted Coral Grouper',
          image: '/images/fish/barcheek.jpeg',
          sizeRange: '~ 35cm',
          morphology: 'Elongate and robust body with large mouth and emarginate tail. Pale brownish colour with bright blue spots.',
          info: 'Carnivore. Bottom dwelling ambush predators feeding on reef fish and crustaceans, and can swallow prey whole. Not built for long distance, fast swimming.'
        },
        {
          id: 5,
          family: 'Barracuda',
          species: 'Chevron Barracuda',
          image: '/images/fish/barracuda.jpg',
          sizeRange: '~ 90cm',
          morphology: 'Elongate with a large mouth and and long knife-like teeth.',
          info: 'Carnivore. Active hunters of other fish, and found in large schools.'
        },
        {
          id: 6,
          family: 'Batfish',
          species: 'Longfin Batfish',
          image: '/images/fish/batfish.jpeg',
          sizeRange: '25 - 60cm',
          morphology: 'Very distinctive spade shape, with long yellow pectoral fins, and 2 dark bands across the front of the body.',
          info: 'Omnivore. Eating plankton, sessile invertebrates, small invertebrates, macroalge. Mostly found in large schools. Some species (Platax pinnatus) are known to play important functional roles in ecosystems by eating algae other herbivores will not touch.'
        },
        {
          id: 7,
          family: 'Snapper',
          species: 'Big Eye Snapper',
          image: 'images/fish/bigeye_snapper.jpg',
          sizeRange: '35cm',
          morphology: 'Fusiform, slender body with a gently sloped forehead, and a truncate tail. Distinct brown stripe through eye & body.',
          info: 'Carnivore. Predators of fish and crustaceans. Found in large schools.'
        },
        {
          id: 8,
          family: 'Trevally',
          species: 'Big Eye Trevally',
          image: '/images/fish/bigeye_trevally.jpeg',
          sizeRange: '~ 60cm',
          morphology: 'Compressed bodies, very narrow caudal peduncle and a forked tail. Silvery appearance with a white tip on its dorsal fin.',
          info: 'Carnivore. Fast swimming predators in open water or above reefs. Form large schools.'
        },
        {
          id: 9,
          family: 'Grouper',
          species: 'Blacktip Grouper',
          image: '/images/fish/blacktip_grouper.jpeg',
          sizeRange: '~ 22cm',
          morphology: 'Elongate and robust body with large mouth and emarginate tail. Pale reddish colour with darker bands along the body, and black tips on the dorsal fin spines.',
          info: 'Carnivore. Bottom dwelling ambush predators feeding on reef fish and crustaceans, and can swallow prey whole. Not built for long distance, fast swimming.'
        },
        {
          id: 10,
          family: 'Parrotfish',
          species: 'Bluebarred Parrotfish - male',
          image: '/images/fish/bluebarred_parrotfish_male.jpeg',
          sizeRange: '~ 46cm',
          morphology: 'Blue-green colouration with light pink on its belly, dorsal and anal fin. Known for their parrot-like beak used to scrape algae from coral and rocky substrate.',
          info: 'Herbivore. Parrotfish show sexual dimorphism, where males are usually very brightly coloured, whereas females are dull in colour. Can form shoals, or feeding packs with other Parrotfish or Rabbitfish. Can also form harems, where one male presides over several females and can aggressively assert this position against other males.'
        },
        {
          id: 11,
          family: 'Grouper'
        }
      ])
    })
}
