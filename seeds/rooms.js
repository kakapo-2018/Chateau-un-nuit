exports.seed = (knex, Promise)=> {
  return knex('Rooms').del()
  .then(function () {
    return knex('Rooms').insert([
      {
        id: 1,
        room_name: 'Penthouse',
        available: true,
        description: 'Enjoy the top room of this Hotel with a spectacular view out to the countryside. We offer 2 showers, 2 baths, free wi-fi for your gadgets like laptops and cell phones and we provide a kitchen. We also have a table tennis bench for those who like to enjoy a bit of competitive nature with room mates. You will feel at home in the penthouse',
        capacity: 5,
        img: 'https://images.unsplash.com/15/castle.JPG?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a1b757cd09c0396fc9bb409bb129680c&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 2,
        room_name: "EDA Tech Suite",
        available: true,
        description: "Enjoy a wonderful night in our highly specialised EDA Tech Suite. Our wide array of couches have room for your entire team to settle in for your all-night coding session. Are your team members likely to take short naps while their code compiles? Curl up on a spare couch! Does your team tend to charge through together and crash simultaneously at the end? A large supply of thick blankets is available to wrap up in so you all can slump over in our cushy armchairs when you have finally deployed. The carpeted floor also comes highly recommended as a substitute when your tallest teammate takes up all the couch space. A full kitchen is also available. (Note: caffeine supply is limited. We know you, developers. We can't afford your energy drinks. Bring your own.)",
        capacity: 20,
        img: "https://devacademy.co.nz/wp-content/uploads/2017/06/Dev-Academy-Space.jpg"
      },
      {
        id: 3,
        room_name: "Die Schmetterlinghaus",
        available: true,
        description: "Some rude guests have suggested that there is such a thing as too many butterflies. If you feel this way then leave IMMEDIATELY! Otherwise if you are amoung the cultured few then please enjoy everything Die Schmetterlinghaus has to offer. Drift off to sleep to the sound of incesent flapping! Wake up to find a thorax in your mouth! Desperately try not to think of thousands of creepy bug eyes watching your every move! You don't need to get hopelessly lost in a rainforest to discover these joys, book today for an experience you probably will not regret. UPDATE: The next 1 guests to book will receive a complimentary head-to-toe coating in necter by hotel staff.",
        capacity: 3,
        img: "http://www.schmetterlinghaus.at/fileadmin/_processed_/csm_Atlas_Panorama__Schmetterlinghaus_41693ed3fb.jpg"
      },
      {
        id: 4,
        room_name: "Psychedelic Sixties Suite",
        available: true,
        description: "Take a portal back in time and luxuriate in the soulful Sixties vibe. The room comes fully equipped with modern-retro furnishings, along with a vintage Pioneer record player and accompanying large speakers, a small but eclectic record collection, vintage guitars and amps, and a host of other memorabilia on the walls. Oh, and the Union Jack-themed king size bed is so comfy you may never want to leave! Groovy baby!",
        capacity: 2,
        img: "https://www.theverbhotel.com/uploads/9/8/6/9/98696408/img-2690-hdr-result_orig.jpg"
      },
      {
        id: 5,
        room_name: "Nats Play room",
        available: false,
        description: "Comes with Cocktail Bar and Waitress",
        capacity: 3,
        img: "https://i.pinimg.com/originals/2e/87/01/2e87012ab3a98797f191a67cb54296da.jpg"
      }

    ])
  })
}

