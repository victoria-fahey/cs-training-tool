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
          family: 'Serranidae',
          species: 'Spotted Coral Grouper',
          image: '/images/fish/barcheek_grouper.png',
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
          image: 'images/fish/bigeye_snapper.png',
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
          family: 'Serranidae',
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
          family: 'Serranidae',
          species: 'Blue Lined Grouper',
          image: 'images/fish/bluelined_grouper.png',
          sizeRange: '34cm',
          morphology: 'Elongate and robust body with large mouth and rounded tail. Brownish colouration with bright blue lines along body.',
          info: 'Carnivore. Bottom dwelling ambush predators feeding on reef fish and crustaceans, and can swallow prey whole. Not built for long distance, fast swimming.'
        },
        {
          id: 12,
          family: 'Angelfish',
          species: 'Bluering Angelfish',
          image: '/images/fish/bluering_angelfish.jpeg',
          sizeRange: '45cm',
          morphology: 'Deep laterally compressed body, similar to butterfly fish expcept larger',
          info: 'Omnivore. Mainly feed on zooplankton, sponges, filamentous algae and tunicates.'
        },
        {
          id: 13,
          family: 'Serranidae',
          species: 'Brown Banded Grouper',
          image: '/images/fish/brownbanded_grouper.jpeg',
          sizeRange: '30cm',
          morphology: 'Elongate and robust body with large mouth and rounded tail. Brownish colouration with darker brown bands vertically along body.',
          info: 'Carnivore. Bottom dwelling ambush predators feeding on reef fish and crustaceans, and can swallow prey whole. Not built for long distance, fast swimming.'
        },
        {
          id: 14,
          family: 'Parrotfish',
          species: 'Bluebarred Parrotfish - female',
          image: 'images/fish/bluebarred_parrotfish_female.png',
          sizeRange: '~ 46cm',
          morphology: 'Females are dull yellowish to orange-brown with irregular blue bars along its side. Known for their parrot-like beak used to scrape algae from coral and rocky substrate.',
          info: 'Herbivore. Parrotfish show sexual dimorphism, where males are usually very brightly coloured, whereas females are dull in colour. Can form shoals, or feeding packs with other Parrotfish or Rabbitfish. Can also form harems, where one male presides over several females and can aggressively assert this position against other males.'
        },
        {
          id: 15,
          family: 'Cardinal fish',
          species: 'Five Lined Cardinal fish',
          image: 'images/fish/cardinalfish.png',
          sizeRange: '13cm',
          morphology: 'Elongate, dorsal fin split into 2 separate fins with distinctive black dot on caudal peduncle.',
          info: 'Planktivore. Nocturnal, spending the day in dark crevices within the reef, and at night feed on zooplankton. Form large schools.'
        },
        {
          id: 16,
          family: 'Wrasse',
          species: 'Diamond Wrasse',
          image: 'images/fish/diamond_wrasse.png',
          sizeRange: '13cm',
          morphology: 'Pale greenish wrasse with interconnected reddish-brown bars along the side.',
          info: 'Carnivore. Feed on small benthic invertebrates & crustaceans.'
        },
        {
          id: 17,
          family: 'Rabbitfish',
          species: 'Double bar Rabbitfish',
          image: 'images/fish/doublebar_rabbitfish.png',
          sizeRange: '20 - 30cm',
          morphology: 'Deep, laterally compressed body, with a small rabbit-like mouth. Body of this species is pale with a silvery white belly, yellow back and caudal fin with 2 distinct dark bars diagonally across the eye.',
          info: 'Herbivore. Feed on benthic algae and can form shoals/feeding packs with other herbivores such as Parrotfish. All species have venom glands in their dorsal fin spines.'
        },
        {
          id: 18,
          family: 'Rabbitfish',
          species: 'Golden Rabbitfish',
          image: 'images/fish/golden_rabbitfish.png',
          sizeRange: '~ 25cm',
          morphology: 'Deep, laterally compressed body, with a small rabbit-like mouth. Body of this species is dusky blue with yellow complex patterns on body. Has a distinct yellow spot near the caudal fin.',
          info: 'Herbivore. Feed on benthic algae and can form shoals/feeding packs with other herbivores such as Parrotfish. All species have venom glands in their dorsal fin spines.'
        },
        {
          id: 19,
          family: 'Wrasse',
          species: 'Hoeven Wrasse',
          image: 'images/fish/hoevens_wrasse.png',
          sizeRange: '13cm',
          morphology: 'Can have all sorts of bright colouration, mainly with horizontal stripes and have a distinct spot on the caudal fin.',
          info: 'Carnivore. Feed on small benthic invertebrates & crustaceans.'
        },
        {
          id: 20,
          family: 'Rabbitfish',
          species: 'Goldspotted Rabbitfish',
          image: 'images/fish/goldspotted_rabbitfish.png',
          sizeRange: '20 - 30cm',
          morphology: 'Deep, laterally compressed body, with a small rabbit-like mouth. Body of this species is dark with bright orange/gold spots',
          info: 'Herbivore. Feed on benthic algae and can form shoals/feeding packs with other herbivores such as Parrotfish. All species have venom glands in their dorsal fin spines.'
        },
        {
          id: 21,
          family: 'Serranidae',
          species: 'Honeycomb Grouper',
          image: 'images/fish/honeycomb_grouper.png',
          sizeRange: '32cm',
          morphology: 'Elongate and robust body with large mouth and rounded tail. Body is ochre to light brown covered in small brown hexagons.',
          info: 'Carnivore. Bottom dwelling ambush predators feeding on reef fish and crustaceans, and can swallow prey whole. Not built for long distance, fast swimming.'
        },
        {
          id: 22,
          family: 'Rabbitfish',
          species: 'Java Rabbitfish',
          image: 'images/fish/java_rabbitfish.png',
          sizeRange: '30 -  53cm',
          morphology: 'Deep, laterally compressed body, with a small rabbit-like mouth. Body of this species is silvery grey with white complex patterns. The cheek, mouth, dorsal and anal fin are all yellow in colour.',
          info: 'Herbivore. Feed on benthic algae and can form shoals/feeding packs with other herbivores such as Parrotfish. All species have venom glands in their dorsal fin spines.'
        },
        {
          id: 23,
          family: 'Butterflyfish',
          species: 'Lined Butterflyfish',
          image: 'images/fish/lined_butterflyfish.png',
          sizeRange: '30cm',
          morphology: 'Laterally compressed body with small protruding terminal mouth. They are white in colour with thin black lines which join a thick black band at the base of the tail and dorsal fin. The tail, dorsal, and anal fins are yellow.',
          info: 'Corallivore. Can be found in heterosexual pairs or swimming alone. Have small home ranges and are known to be territorial.'
        },
        {
          id: 24,
          family: 'Wrasse',
          species: 'Moon Wrasse - blue',
          image: 'images/fish/moon_wrasse_blue.png',
          sizeRange: 'up to 45cm',
          morphology: 'Body blue to green, with crescent shaped caudal fin that is bright yellow, very rounded pectoral fins with a pinkish colour.',
          info: 'Carnivore. Feed on small benthic invertebrates & fish eggs. Moon wrasses are active fish often found zipping around the reef. They are protogynous hermaphrodites, all starting off as females and changing to males which only takes 10 days.'
        },
        {
          id: 25,
          family: 'Butterflyfish',
          species: 'Copperband Butterflyfish',
          image: 'images/fish/longbeaked_butterflyfish.png',
          sizeRange: 'up to 20cm',
          morphology: 'Latterally compressed body with long protruding terminal mouth, distinc yellow vertical bands across body and black eye-spot on the dorsal fin. ',
          info: 'Corallivore. Can be found in heterosexual pairs or swimming alone. Have small home ranges and are known to be territorial.'
        },
        {
          id: 26,
          family: 'Unicornfish',
          species: 'Orangespine Unicornfish',
          image: 'images/fish/orangespine_unicornfish.png',
          sizeRange: '15 - 40cm',
          morphology: 'Distinctive blade-like orange spines on either side of the caudal peduncle, which are very sharp. This fish has a dark body with orange lips and dorsal fin.',
          info: 'Herbivore. Feed on benthic algae and sometimes feed in large aggregations, but mostly found in pairs. Uniquely found in Unicornfish, this fish has a special bacteria in its gut to help it with digestion of algae.'
        },
        {
          id: 27,
          family: 'Wrasse',
          species: 'Moon Wrasse - green',
          image: 'images/fish/moon_wrasse.png',
          sizeRange: 'up to 45cm',
          morphology: 'Green body with pink markings, crescent shaped caudal fin that is bright yellow, very rounded pectoral fins with a pinkish colour.',
          info: 'Carnivore. Feed on small benthic invertebrates & fish eggs. Moon wrasses are active fish often found zipping around the reef. They are protogynous hermaphrodites, all starting off as females and changing to males which only takes 10 days.'
        },
        {
          id: 28,
          family: 'Trevally',
          species: 'Orange Spotted Trevally',
          image: 'images/fish/orangespotted_trevally.png',
          sizeRange: 'up to 55cm',
          morphology: 'Compressed body with characteristic orange-yellow spots on its sides, very narrow caudal peduncle with forked tail.',
          info: 'Carnivores. Very fast swimming predators feeding on a variety of small fish, nekton, and crustaceans. Found in open water or above reefs, and either in pairs or schools.'
        },
        {
          id: 29,
          family: 'Bream',
          species: 'Pearly Monocle Bream',
          image: 'images/fish/pearly_monocle_bream.png',
          sizeRange: '15 - 30cm',
          morphology: 'Upper body olive, white below, yellowish spots below lateral line. Small mouth with big eyes',
          info: 'Carnivores. Found hovering above sand bottoms close to reefs and feed on crustaceans, polychaete worms, mollusks and small fish.'
        },
        {
          id: 30,
          family: 'Queenfish',
          species: 'Talang Queenfish',
          image: 'images/fish/queenfish.png',
          sizeRange: '~ 90cm',
          morphology: 'Has a single row of 5-6 large dark silvery spots on its side above the lateral line. Blunt and rounded snout with large mouth full of very sharp teeth. Very slender caudal peduncle with deeply forked tail.',
          info: 'Carnivore. Pelagic mid-water swimming species that feeds on fishes, cephalopods, small invertebrates, and other pelagic prey. This species is an important commercial & recreational fishery.'
        },
        {
          id: 31,
          family: 'Wrasse',
          species: 'Red Breasted Wrasse',
          image: 'images/fish/redbreasted_wrasse.png',
          sizeRange: 'up to 40cm',
          morphology: 'Olive green head, followed by a distinctive red/orange band near its gills, followed by white and black stripes.',
          info: 'Carnivore. Feeds on crustaceans, sea urchins, hard shelled invertebrates and molluscs. Found in areas of the reef where there is rubble, sand and coral.'
        },
        {
          id: 32,
          family: 'Fusiler',
          species: 'Robust Fusiler',
          image: 'images/fish/robust_fusiler.png',
          sizeRange: 'up to 60cm',
          morphology: 'Deep and laterally compressed fusiform body (very streamlined). The rear of the back, caudal fin, and the dorsal surface of the caudal peduncle are yellow. Rest of the body is silvery.',
          info: 'Planktivore. Specially adapted for feding on zooplankton - their mouth is able to extend forward and swallow prey. They are fast swimming, mid-water fish, occurring in large schools.'
        },
        {
          id: 33,
          family: 'Snapper',
          species: ' Russels Snapper',
          image: 'images/fish/russels_snapper.png',
          sizeRange: '~ 30cm',
          morphology: 'Moderately deep body with sloping forehead and flat chin. Very distinctive black spot before the caudal peduncle and above the lateral line. Yellow pectoral and anal fins.',
          info: 'Carnivore. Predatory schooling fish which feeds on benthic fishes and invertebrates. Is a target species in artisanal fishing.'
        },
        {
          id: 34,
          family: 'Fusiler',
          species: 'Scissortail Fusiler',
          image: 'images/fish/scissortail_fusiler.png',
          sizeRange: '~ 25cm',
          morphology: 'Elongated, fusiform body with bluish colouration changing to white on the underside. There is a distinct yellow stripe over the lateral line. Highly forked caudal fin with a black spot at the end of the fin.',
          info: 'Planktivore. Specially adapted for feding on zooplankton - their mouth is able to extend forward and swallow prey. They are fast swimming, mid-water fish, occurring in large schools.'
        },
        {
          id: 35,
          family: 'Serranidae',
          species: 'Barred Soapfish',
          image: 'images/fish/soapfish.png',
          sizeRange: '16 - 25cm',
          morphology: 'Moderately deep, compressed yellow body with a small dark band over the eye and a larger dark band before the caudal peduncle.',
          info: 'Carnivore. Solitary predator that feeds on suprisingly large prey such as fish and crustaceans. Similar to Groupers, they can swallow their prey whole through expandable jaws. Under stress they can secrete toxin that is similar to lathered soap, protecting them from predators.'
        },
        {
          id: 36,
          family: 'Parrotfish',
          species: 'Surf Parrotfish - female',
          image: 'images/fish/surf_parrotfish_female.png',
          sizeRange: '20 - 40cm',
          morphology: 'Females are grey to greyish-brown. Known for their parrot-like beak used to scrape algae from coral and rocky substrate.',
          info: 'Herbivore. Parrotfish show sexual dimorphism, where males are usually very brightly coloured, whereas females are dull in colour. Can form shoals, or feeding packs with other Parrotfish or Rabbitfish. Can also form harems, where one male presides over several females and can aggressively assert this position against other males.'
        },
        {
          id: 37,
          family: 'Bream',
          species: 'Whitecheek Monocle Bream',
          image: 'images/fish/whitecheek_monocle_bream.png',
          sizeRange: '15 - 25cm',
          morphology: 'Reddish body with distinct white band over its cheek. Small mouth with small eyes.',
          info: 'Carnivores. Found hovering above sand bottoms close to reefs and feed on benthic crustaceans, polychaete worms, mollusks and small fish.'
        },
        {
          id: 38,
          family: 'Holocentridae',
          species: 'Pinecone Soldierfish',
          image: 'images/fish/soldierfish.png',
          sizeRange: '18 - 30cm',
          morphology: 'Pale silvery body with red colouring on the margins of its scales. Very large eyes adapted for nocturnal living.',
          info: 'Planktivore. Nocturnal fish that hide in crevices and caves during the day, emerging at night to feed on plankton such as crab larvae.'
        },
        {
          id: 39,
          family: 'Snapper',
          species: 'Spanish flag Snapper',
          image: 'images/fish/spanishflag_snapper.png',
          sizeRange: '~ 30cm',
          morphology: 'Moderately deep body with sloping forehead and flat chin. Silvery bodied fish with yellow or golden brown horizontal stripes across body and yellow fins.',
          info: 'Carnivore. Predatory schooling fish that uses ambush tactics to catch smaller fishes and crustaceans. Is an important species for artisanal, commercial and recreational fisheries.'
        },
        {
          id: 40,
          family: 'Holocentridae',
          species: 'Redcoat Squirrelfish',
          image: 'images/fish/squirrelfish.png',
          sizeRange: '15 - 40cm',
          morphology: 'Distinctive large eyes with red and white horizontal stripes across its body.',
          info: 'Carnivore. Nocturnal fish that hide in crevices and caves during the day, emerging at night to feed on small fish and benthic invertebrates. In the same family as Soldierfish.'
        },
        {
          id: 41,
          family: 'Parrotfish',
          species: 'Surf Parrotfish - male',
          image: 'images/fish/surf_parrotfish_male.png',
          sizeRange: '20 - 40cm',
          morphology: 'Males recognised by the orange patch on the cheek and gill cover with green/blue/pinkish colouration on the rest of the body, and green pectoral fins. Known for their parrot-like beak used to scrape algae from coral and rocky substrate.',
          info: 'Herbivore. Parrotfish show sexual dimorphism, where males are usually very brightly coloured, whereas females are dull in colour. Can form shoals, or feeding packs with other Parrotfish or Rabbitfish. Can also form harems, where one male presides over several females and can aggressively assert this position against other males.'
        },
        {
          id: 42,
          family: 'Wrasse',
          species: 'Blackeye Thicklip Wrasse',
          image: 'images/fish/thicklip_wrasse.png',
          sizeRange: 'up to 50cm',
          morphology: 'Large headed fish with very distinctive thick lips and half and half colouration with a white front half and darker green rear. Has a classic wrasse truncate caudal fin.',
          info: 'Carnivore. Benthic predator that feeds on small crustaceans, molluscs, worms and echinoderms. Can be solitory or form small groups.'
        },
        {
          id: 43,
          family: 'Bream',
          species: 'Whitestreak Monocle Bream',
          image: 'images/fish/whitestreak_monocle_bream.png',
          sizeRange: '~ 10cm',
          morphology: 'Silvery pale body with a white stripe just below the dorsal fin, and a row of golden yellow spots above the pectoral fins.',
          info: 'Carnivores. Found hovering above sand bottoms close to reefs and feed on benthic invertebrates and small fish.'
        },
        {
          id: 44,
          family: 'Butterflyfish',
          species: 'Wiebels Butterflyfish',
          image: 'images/fish/wiebels_butterflyfish.png',
          sizeRange: '19cm',
          morphology: 'Laterally compressed, disk shaped body with a small pointed, terminal mouth. Colouration is mainly yellow with a black band over the eye, with a white bar in the middle and then another black band on its forehead. End of the caudal fin is black with a white stripe after.',
          info: 'Corallivore. Can be found in heterosexual pairs or swimming alone. Have small home ranges and are known to be territorial.'
        }
      ])
    })
}
