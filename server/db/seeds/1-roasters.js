exports.seed = async function (knex) {
  await knex('roasters').insert([
    {
      id: 1,
      name: 'Supreme',
      location: 'Wellington, Auckland, Christchurch',
      details:
        "Better coffee for all is a constant. It's matter of doing things better than the time before and ensuring it's a better experience for all involved.",
    },
    {
      id: 2,
      name: 'Allpress',
      location: 'Auckland',
      details:
        'We invest in flavour - from our green bean selection to our roasting method and blending, all the way down to training the baristas that use our coffee in their cafes.',
    },
    {
      id: 3,
      name: 'Kokako',
      location: 'Auckland',
      details:
        "It all started in the late 90s when our founders, Helen and Christian, had this wild idea to be New Zealand's first organic coffee roasters.",
    },
    {
      id: 4,
      name: 'Mojo',
      location: 'Auckland',
      details:
        "Excellent coffee is never a rational thing; it's a drink imbued with inspiration, freedom, celebration, history, dreams. It's about experience as much as refreshment. It's about personal space, about the pursuit of perfection, about the meeting of minds, about escape and reward. That's the Mojo and it's to treasure.",
    },
    {
      id: 5,
      name: 'Flight Coffee',
      location: 'Wellington',
      details:
        'Flight Coffee is a family of driven people that work together to produce amazing coffee, while always aiming to have the best impact we can on the industry and the lives it connects',
    },
    {
      id: 6,
      name: 'Peoples Coffee',
      location: '161B Willis Street, Te Aro',
      details: 'Wellington',
    },
    {
      id: 7,
      name: 'Raglan Roast',
      location: 'Raglan',
      details:
        'Each coffee shop has organically developed its own feel and flavour thanks to the staff and community that call it home. Raglan Roast has an incredibly diverse loyal following and we are stoked to provide a space to facilitate genuine generosity, collaboration and sharing, our community are one epic bunch.',
    },
    {
      id: 8,
      name: 'Ozone Coffee',
      location: 'Auckland, New Plymouth',
      details:
        'Ozone Coffee is an international specialty coffee company. Founded over 20 years ago, our purpose is to lead enduring change in the way coffee is valued, grown, produced and enjoyed, responsibly for the future.',
    },
  ])
}
