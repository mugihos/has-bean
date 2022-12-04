exports.seed = async function (knex) {
  await knex('roasters').insert([
    {
      id: 1,
      name: 'Coffee Supreme',
      location: 'Wellington, Auckland, Christchurch',
      details:
        "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
      url: 'https://coffeesupreme.com/',
      image_url: 'https://tinyurl.com/3afx7e7m',
    },
    {
      id: 2,
      name: 'Allpress Espresso',
      location: 'Auckland',
      details:
        'We invest in flavour - from our green bean selection to our roasting method and blending, all the way down to training the baristas that use our coffee in their cafes.',
      url: 'https://www.allpressespresso.com/',
      image_url: 'https://tinyurl.com/3e73p5we',
    },
    {
      id: 3,
      name: 'KoKōkako Organic Coffee',
      location: 'Auckland',
      details:
        "It all started in the late 90s when our founders, Helen and Christian, had this wild idea to be New Zealand's first organic coffee roasters.",
      url: 'https://www.kokako.co.nz/',
      image_url: 'https://tinyurl.com/3h47r3a4',
    },
    {
      id: 4,
      name: 'Mojo Coffee Roasters',
      location: 'Wellington',
      details:
        "Excellent coffee is never a rational thing; it's a drink imbued with inspiration, freedom, celebration, history, dreams. It's about experience as much as refreshment. It's about personal space, about the pursuit of perfection, about the meeting of minds, about escape and reward. That's the Mojo and it's to treasure.",
      url: 'https://mojo.coffee/',
      image_url: 'https://tinyurl.com/33he697p',
    },
    {
      id: 5,
      name: 'Flight Coffee',
      location: 'Wellington',
      details:
        'Flight Coffee is a family of driven people that work together to produce amazing coffee, while always aiming to have the best impact we can on the industry and the lives it connects',
      image_url:
        'https://cdn.shopify.com/s/files/1/0104/2682/files/logo_gold-06_395x.png?v=1638386421',
    },
    {
      id: 6,
      name: 'Peoples Coffee',
      location: 'Wellington',
      details:
        'A simple but beautiful interaction that enables us to come together over a cup of coffee. An interaction that now needs an immediate response from ourselves. A response that provides assurances that the quality we experience in the cup is wedded not only to taste but environmental responsibility and fair prices paid to farmers.',
      url: 'https://peoplescoffee.co.nz/',
      image_url: 'https://tinyurl.com/43rrm95a',
    },
    {
      id: 7,
      name: 'Raglan Roast',
      location: 'Raglan',
      details:
        'Each coffee shop has organically developed its own feel and flavour thanks to the staff and community that call it home. Raglan Roast has an incredibly diverse loyal following and we are stoked to provide a space to facilitate genuine generosity, collaboration and sharing, our community are one epic bunch.',
      url: 'https://raglanroast.co.nz/',
      image_url: 'https://tinyurl.com/29vkvtt2',
    },
    {
      id: 8,
      name: 'Ozone Coffee',
      location: 'Auckland, New Plymouth',
      details:
        'Ozone Coffee is an international specialty coffee company. Founded over 20 years ago, our purpose is to lead enduring change in the way coffee is valued, grown, produced and enjoyed, responsibly for the future.',
      url: 'https://ozonecoffee.co.nz/',
      image_url:
        'https://www.westcoastcocoa.com/wp-content/uploads/2019/07/Artboard-21.png',
    },
    {
      id: 9,
      name: 'Ark Coffee',
      location: 'Auckland',
      details:
        "All of Ark's beans are ethically produced by a handful of exceptional growers. This translates into confidence and pride in every cup and love for ARK coffee across New Zealand.",
      url: 'https://arkcoffee.live/',
      image_url: 'https://tinyurl.com/mv44y93h',
    },
    {
      id: 10,
      name: "Miller's Coffee",
      location: 'Auckland',
      details:
        'Millers has become a favourite for those who know good coffee and appreciate the importance of every step in making it the right beans, the right equipment, the right style of roasting and the right barista skills .',
      url: 'https://millerscoffee.co.nz/',
      image_url: 'https://tinyurl.com/5n8v323t',
    },
    {
      id: 11,
      name: 'Atomic Coffee',
      location: 'Auckland',
      details:
        'Atomic Coffee Roasters opened its doors on Ponsonby Road in 1992 – back before café culture was a thing. We were the scruffy kid, pumping out live music and top-notch coffee from between fine-dining restaurants. As we hit full steam, the queues grew longer than our slice of the strip could handle. So in 1995 we made the move to Kingsland, finding our groove as part of this creative, eclectic community.',
      url: 'https://atomiccoffee.co.nz/',
      image_url: 'https://tinyurl.com/2p886wba',
    },
    {
      id: 12,
      name: 'Eighthirty Coffee Roasters',
      location: 'Auckland',
      details:
        "In the early days of Eighthirty it was just a crew of two, roasting out of a small shop on Karangahape Rd. Starting as a passion project concevied by our very own Glenn Bell, Owner and operator, what transpired over the next 10 years was a mixture of hard work, extensive sourcing research, and an unchangeable ethos of sticking to what we know best - a damn good brew. 10 years on and we now supply to over 60+ cafe's and eateries around New Zealand. We've been able to grow and expand organically, but only with the help of our dedicated Eighthirty community.",
      url: 'https://www.eighthirty.com/',
      image_url: 'https://tinyurl.com/2mknbr5u',
    },
    {
      id: 13,
      name: 'Red Rabbit Coffee',
      location: 'Auckland',
      details:
        'When Steve started Red Rabbit in 2013, the mission was clear to him: ‘Show coffee lovers in Aotearoa how one simple ingredient, the seed of a fruit, can reveal flavours that may seem impossible to get from a single cup of coffee.’',
      url: 'https://redrabbitcoffee.co.nz/',
      image_url: 'https://tinyurl.com/3b57zjx7',
    },
    {
      id: 14,
      name: 'Mt Atkinson Coffee Roasters',
      location: 'Auckland',
      details:
        'Having a coffee can represent so much more than enjoying a caffeinated beverage. It can be a moment with friends, time on your own, connection with people outside of work or even your first date. Coffee has become such an ingrained part of our society. And for many, coffee is a way of life. Coffee is universal, it connects people from many different walks of life. That has been the founding principle of the Mt Atkinson coffee roaster crew. As a crew, we are rewriting the usual coffee story. Won’t you join us?',
      url: 'https://mtatkinson.co.nz/',
      image_url: 'https://tinyurl.com/4n668zje',
    },
    {
      id: 15,
      name: 'Espresso Workshop Coffee Roasters',
      location: 'Auckland',
      details:
        'Espresso Workshop was founded in 2007 on the principle of unlocking the flavour potential of specialty coffee, advocating the merits of unique flavour profiles and the promotion of premium single origin coffee. The goal of Espresso Workshop is to demonstrate that coffee is not just a product but an experience. Coffee obsessed, sometimes fanatical, but we reckon that this  focus on the product only inspires us to produce better coffee.',
      url: 'https://www.espressoworkshop.co.nz/',
      image_url: 'https://tinyurl.com/659ajkry',
    },
    {
      id: 16,
      name: 'Grey Roasting Co.',
      location: 'Hamilton',
      details:
        "We're a quality-focused coffee company founded by 2-time NZ barista champ Dove Chen.",
      url: 'https://greyroastingco.com/',
      image_url: 'https://tinyurl.com/26kd9hdu',
    },
    {
      id: 17,
      name: 'Toasted Coffee Roasters',
      location: 'Auckland',
      details:
        'We hand roast, hand deliver and hand craft to ensure we produce the best possible coffee. No single person can undertake every step it takes to get the coffee from the fincas (farms) to the flat white.  At Toasted Coffee Roasters, we make the most of our people and partners to bring you better coffee, together.',
      url: 'https://toasted.co.nz/',
      image_url: 'https://tinyurl.com/bdf7xd8v',
    },
    {
      id: 18,
      name: 'Rocket Coffee',
      location: 'Hamilton',
      details:
        'We have a network of coffee professionals around the globe that help us overcome the tyranny of distance to be able to source the wonderful raw materials which we can then apply 21 years of learning & love to roasting these gems so they may tell their story in the best possible way.',
      url: 'https://rocketcoffee.co.nz/',
      image_url: 'https://tinyurl.com/5n94whec',
    },
    {
      id: 19,
      name: 'Rich Coffee Roasters',
      location: 'Wellington',
      details:
        'Rich Coffee Roasters is a roasting company based in Wellington New Zealand . It was founded by Cameron McClure and Richie Russell with many years of local and international experience in the specialty coffee industry, spanning countless hours of barista work and extensive coffee training to importing, cupping and sensory analysis of green beans to a wealth of roasting experience, we love what we do.',
      url: 'https://richcoffee.co.nz/',
      image_url: 'https://tinyurl.com/27z9v69s',
    },
    {
      id: 20,
      name: 'Hawthorne Coffee Roasters',
      location: 'Havelock North',
      details:
        "Our beans come from all over the world, each with very different characteristics and unique flavour profiles. Our blends represent something of a 'roast-spectrum' - from the rich, dark Hawthorne Blend down to the light and fragrant Te Mata Triple Blend. Each of our blends possess properties which are best appreciated with particular brewing styles, but this isn't to say that our coffee is delicious any way you choose to prepare it.",
      url: 'https://hawthornecoffee.co.nz/',
      image_url: 'https://tinyurl.com/yc8hzkkj',
    },
  ])
}
