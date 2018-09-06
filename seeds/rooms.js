exports.seed = (knex, Promise)=> {
  return knex('Rooms').del()
  .then(function () {
    return knex('Rooms').insert([
      {
        id: 1,
        room_name: 'string',
        available: true,
        description: 'string',
        capacity: 2,
        img: 'string of url'
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
        room_name: 'Psychedelic Sixties Suite',
        available: true,
        description: 'Take a portal back in time and luxuriate in the soulful Sixties vibe. The room comes fully equipped with modern-retro furnishings, along with a vintage Pioneer record player and accompanying speakers, a small but eclectic record collection, vintage guitars and amps, and a host of memorabilia on the walls. Oh, and the Union Jack-themed king size bed is so comfy you may never want to leave! Groovy baby!',
        capacity: 2,
        img: 'http://www.theverbhotel.com/see.html'
      }
    ])
  })
}
