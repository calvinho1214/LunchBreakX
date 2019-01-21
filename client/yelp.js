import axios from 'axios'

// const GOOGLE_API_KEY = 

// const api = axios.create({
//     baseURL: 'https://maps.googleapis.com/maps/api/place/nearbysearch/?',
//     headers: {
//         Authorization:
//     }
// })

// const getRestaurants = userLocation => {
//     return api.get('/', {
//         params: {
//             limit: 10,
//             categories: 'restaurant, food',
//             ...userLocation
//         }
//     })
//     .then(res =>
//         res.data.businesses.map(business => {
//             return {
//                 name: business.name,
//                 coords: business.coordinates
//             }
//         })
//     )
//     .catch(error => console.error(error))
// }

// export default {
//     getRestaurants
// }