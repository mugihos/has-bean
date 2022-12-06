const connection = require('./connection')

module.exports = {
  getBeans,
}

function getBeans(db = connection) {
  return db('beans')
    .join('roasters', 'roasters.id', 'beans.roaster_id')
    .select(
      'beans.id as id',
      'beans.roaster_id as roaster_id',
      'beans.name as beanName',
      'beans.region as region',
      'beans.process as process',
      'beans.roast_degree as roast_degree',
      'beans.flavour_profile as flavour_profile',
      'roasters.name as roasterName',
      'roasters.image_url as roaster_image'
    )
}
