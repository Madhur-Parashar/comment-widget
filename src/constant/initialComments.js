export const initialComments = [
  {
    message: "This is 1 level comment",
    id: 0,
    parent: null,
    userName: "Aditya",
    createdAt: new Date("May 19, 2023 03:24:00"),
  },
  {
    message: "This is 1 level comment",
    id: 1,
    parent: null,
    userName: "Abhi",
    createdAt: new Date("May 20, 2023 04:24:00"),
  },
  {
    message: "This is 2 level comment",
    id: 3,
    parent: 0,
    userName: "Akash",
    createdAt: new Date("May 20, 2023 04:24:00"),
  },
  {
    message: "This is 2 level comment",
    id: 4,
    parent: 0,
    userName: "Maddy",
    createdAt: new Date("May 20, 2023 04:24:00"),
  },
  {
    message: "This is 3 level comment",
    id: 5,
    parent: 4,
    userName: "Aditya",
    createdAt: new Date("May 20, 2023 04:24:00"),
  },
  {
    message: "This is 4 level comment",
    id: 6,
    parent: 5,
    userName: "Shree",
    createdAt: new Date("May 20, 2023 04:24:00"),
  },
  {
    message: "This is 5 level comment",
    id: 7,
    parent: 6,
    userName: "Akash",
    createdAt: new Date("May 20, 2023 04:24:00"),
  },
  {
    message: "This is 2 level comment",
    id: 8,
    parent: 1,
    userName: "Maddy",
    createdAt: new Date("May 20, 2023 04:24:00"),
  },
];

// comments: [
//   {
//       message:'This is 1 level comment',timeStamp:'',
//       comments:[
//           {
//               message:'This is 2 level comment',timeStamp:'',
//               comments:[
//                   {
//                       message:'This is 3 level comment',timeStamp:'',
//                       comments:[
//                           {
//                               message:'This is 4 level comment',timeStamp:'',
//                               comments:[
//                                   {
//                                       message:'This is 5 level comment',timeStamp:'',
//                                       comments:[]
//                                   }
//                               ]
//                           }
//                       ]
//                   }

//               ]
//           },
//           {
//               message:'This is 2 level comment',timeStamp:'',
//               comments:[]
//           }
//       ]
//   },
//   {
//       message:'This is 1 level comment',timeStamp:'',
//       comments:[
//           {
//               message:'This is 2 level comment',timeStamp:'',
//               comments:[]
//           }
//       ]
//   }
// ]

// [
//   {
//       message:'This is 1 level comment',timeStamp:'',id:0
//       children:[3,4]
//   },
//   {
//       message:'This is 1 level comment',timeStamp:'',id:1
//       children:[8]
//   },
//   {
//       message:'This is 2 level comment',timeStamp:'',id:3
//       children:[]
//   },
//   {
//       message:'This is 2 level comment',timeStamp:'',id:4
//       children:[5]
//   },
//   {
//       message:'This is 3 level comment',timeStamp:'',id:5
//       children:[6]
//   },
//   {
//       message:'This is 4 level comment',timeStamp:'',id:6
//       children:[7]
//   },
//   {
//       message:'This is 5 level comment',timeStamp:'',id:7
//       children:[]
//   },
//   {
//       message:'This is 2 level comment',timeStamp:'',id:8
//       children:[]
//   }
// ]

// [
//   {
//       message:'This is 1 level comment',timeStamp:'',id:0
//       parent:null
//   },
//   {
//       message:'This is 1 level comment',timeStamp:'',id:1
//       parent:null,
//   },
//   {
//       message:'This is 2 level comment',timeStamp:'',id:3
//       parent:0
//   },
//   {
//       message:'This is 2 level comment',timeStamp:'',id:4
//       parent:0
//   },
//   {
//       message:'This is 3 level comment',timeStamp:'',id:5
//       parent:4
//   },
//   {
//       message:'This is 4 level comment',timeStamp:'',id:6
//       parent:5
//   },
//   {
//       message:'This is 5 level comment',timeStamp:'',id:7
//       parent:6
//   },
//   {
//       message:'This is 2 level comment',timeStamp:'',id:8
//       parent:1
//   }
// ]
