// const jwt = require('jsonwebtoken');
// import { useNavigate } from 'react-router-dom';
// // const User = require('../models/User');

// const RequireAuth = () => {
//     const token = localStorage.getItem("token");
//     const jwt_secret = process.env.JWT_SECRET;
//     const navigate = useNavigate();
//     // check json web token exists & is verified
//     if (token) {
//         jwt.verify(token, jwt_secret, (err, decodedToken) => {
//             if (err) {
//                 console.log(err.message);
//                 navigate('/login');
//             } else {
//                 console.log(decodedToken);
//                 return (decodedToken);


//             }
//         });
//     } else {
//         navigate('/login');
//     }
// };

// // check current user
// // const checkUser = (req, res, next) => {
// //   const token = req.cookies.jwt;
// //   if (token) {
// //     jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
// //       if (err) {
// //         res.locals.user = null;
// //         next();
// //       } else {
// //         let user = await User.findById(decodedToken.id);
// //         res.locals.user = user;
// //         next();
// //       }
// //     });
// //   } else {
// //     res.locals.user = null;
// //     next();
// //   }
// // };


// // module.exports = { requireAuth };
// export default RequireAuth();