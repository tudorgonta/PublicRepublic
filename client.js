// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '9n9rrysx', // you can find this in sanity.json
  apiVersion: '2022-04-19',
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})