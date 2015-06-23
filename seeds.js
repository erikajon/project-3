// var REPL = require('repl');
// var db = require('./models');

// var repl = REPL.start('BabyPass >');
// repl.context.db = db;

// // == clear database +++++++++
// db.User.collection.remove();
// // db.Activity.collection.remove();

// // ==== activities +++++++++
// var activity1 = {
//     title: 'Active Physical Play',
//     address: "St. Hilda's Community Centre , 18 Club Row, London, E2 7PY",
//     image: 'activity1.jpg',
//     description: 'An active physcial play session for families and their children under 5 years. Set in a large hall, with a range of large soft play equipment, sit and ride toys and immaginative play resources.',
//     capacity: 20,
//     age_from: 3,
//     age_to: 6,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity1, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity2 = {
//     title: 'Early Years Soft Play Sessions',
//     address: "Mile End Children's Park, Locksley Street, London, E14 7EJ",
//     image: 'activity2.jpg',
//     description: "A soft play session with a big range of play equipment for parents / carers and children under four who live in Tower Hamlets. Come and have fun with your child, meet up with friends and meet new people.",
//     capacity: 10,
//     age_from: 2,
//     age_to: 4,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity2, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity3 = {
//     title: "Gymboree Docklands",
//     address: "95 Blackwall Way, New Providence Wharf, London, E14 9QT",
//     image: "activity3.jpg",
//     description: "You will have exclusive use of our gym studio filled with colourful custom made play equipment for under 5s in a safely matted area. A 2 hour party is hosted by an enthusiastic trained teacher and will include music, dance, games and our famous bubbles! We have themes such as farmyard animals, cars & trains, princesses or jungle safari to make your little ones birthday party extra special.",
//     capacity: 10,
//     age_from: 2,
//     age_to: 5,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity3, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity4 = {
//     title: "Mudlarks Children's Gallery",
//     address: "Museum in Docklands, No. 1 Warehouse, West India Quay, Hertsmere Road, London, E14 4AL",
//     image: "",
//     description: "Great modern museum visually telling the history of London and Docklands with a special 'Mudlarks' gallery for children. Under fives can explore the soft play area with its DLR train and giant props, while older children can get to grips with hands-on interactives that bring the history of London’s Docks to life. There are also an exciting programme of activities for chidren under five and their carers. The Gallery is suitable for all under 12's. Nappy changing facilities, a cafe and restaurant (both with high chairs). Close to child friendly pubs, restaurants and Canary Wharf shopping.",
//     capacity: 10,
//     age_from: 1,
//     age_to: 12,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity4, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity5 = {
//     title: "Tiller Leisure Centre - Little Rascal's playzone",
//     address: "Tiller Road, Isle of Dogs, London, E14 8PX",
//     image: "",
//     description: "Little Rascal's Playzone is quite a small soft play for children from 3-8. It has a smaller and a slightly larger soft play zone with two slides and a ball pit. It's incredibly clean, and since it's not known that well, very quiet!",
//     capacity: 10,
//     age_from: 3,
//     age_to: 8,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity5, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity6 = {
//     title: "Half Moon Young Peoples Theatre",
//     address: "43, White Horse Rd, London, E1 0ND",
//     image: "activity6",
//     description: "Half Moon is one of London's leading theatres for children, babies and young people. Showing professional children's shows it provides a valuable resource for the local community in Tower Hamlets and East London - from children's story classics, to innovative shows for teenagers the theatre provides high quality professional theatre in a relaxed atmosphere. Half Moon also runs five youth theatre groups across different age groups for 5-18 year olds and a specialist group for disabled teenagers.",
//     capacity: 10,
//     age_from: 2,
//     age_to: 18,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity6, function(err, activity) {
//   console.log('activity has been created for half moon');
//   console.log(activity);
// })

// var activity7 = {
//     title: "Stratford Circus",
//     address: "Theatre Square, Stratford, Stratford, E15",
//     image: "",
//     description: "Stratford Circus - A performing arts venue, putting our community centre stage. 'Stratford Circus is an incubator for young imaginations and if imagination is celebrated and nurtured it will provide the next generation of performance makers and audiences.’Paloma Faith, Artistic Ambassador for Stratford Circus",
//     capacity: 10,
//     age_from: 2,
//     age_to: 4,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity7, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity8 = {
//     title: "Christchurch Toy Library",
//     address: "The Parish Room, Christchurch, Manchester Road, Isle of Dogs, Isle of dogs , London, E14 9BN",
//     image: "",
//     description: "This play session is for carers and 0 - 2 1/2 year olds. You can then borrow the toys for a 3 week period. There are toys, crafts (eg playdough) and books, with songtime at the end. In good weather the group has use of the next-door, large, vicarage lawn. Pushchairs are left in the church entrance hall downstairs.",
//     capacity: 10,
//     age_from: 0,
//     age_to: 3,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity8, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity9 = {
//     title: "Columbia Primary School Toy Library",
//     address: "Columbia Primary School, Columbia Road, Tower Hamlets, London, E2 7RG",
//     image: "",
//     description: "Toyhouse provides a range of play based, supportive services for children and their parents / carers to enjoy together!",
//     capacity: 10,
//     age_from: 1,
//     age_to: 4,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity9, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity10 = {
//     title: "STAY & PLAY with TOY LIBRARY",
//     address: "The Toyhouse Centre, 92 St. paul's Way, London, E3 4AL",
//     image: "",
//     description: "Here at Toyhouse we have a wide range of good quality, educational toys for families with children under 5 yrs to borrow and take home for the week. There is a small charge of 30p to borrow a toy. Toys can be borrow during any of our play sessions, so please contact us for full details or drop by for a chat",
//     capacity: 10,
//     age_from: 0,
//     age_to: 5,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity10, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity11 = {
//     title: "Toy Library Stay & Play",
//     address: "St Mary & St Micheal primary school, St Mary & St Michael Church Hall, London, E1 0AA",
//     image: "",
//     description: "Stay and play Toy Library, Come along and have fun with your children, Meet other parents, Prepare your child for school, Warm, safe and welcoming environmentfree! Goody bags packed with fun idea for things to do at home. Refreshments provided",
//     capacity: 10,
//     age_from: 0,
//     age_to: 4,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity11, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity12 = {
//     title: "I Love to Swim",
//     address: "Sir John Cass Secondary School, Stepney Way, 282 Grange Road, London, GREAT BRITAIN, E1 0RH",
//     image: "",
//     description: "Small group swimming lessons for children take place at Sir John Cass School in the East London Borough of Tower Hamlets. As the Love to Swim Scheme incorporates the ASA Nation Plan for Teaching Swimming there is a clear pathway for progression. Children will not be recommended to move up a class until they have achieved the standards, this is important has children may lose confidence if they are put into a higher group and cannot complete the tasks.",
//     capacity: 10,
//     age_from: 2,
//     age_to: 16,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity12, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity13 = {
//     title: "Rio Cinema",
//     address: "107 Kingsland High Street, Hackney, London, E8 2PB",
//     image: "",
//     description: "Screenings are on most Tuesdays and Thursdays. The idea behind the Club is to enable parents with babies to visit the cinema regularly without having to find a baby sitter or worry about their babies causing disturbance. The auditorium is slightly lighter than normal and a secure space is provided for pushchairs. The Club is exclusively for parents with babies under 1 year old. Membership is free but you do need to sign up and receive a membership card to come to these screenings. Join the Club on the day or email us: mail@riocinema.org.uk giving us your name, address, telephone number and your baby's name and date of birth.",
//     capacity: 10,
//     age_from: 0,
//     age_to: 1,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity13, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity14 = {
//     title: "Discover Children's Story Centre",
//     address: "383 - 387 High Street, Stratford, London, E15 4QZ",
//     image: "activity14.jpg",
//     description: "Discover Children's Story Centre in Stratford, East London, is a place where children aged 0-11 and their families can enjoy playing, learning and making up stories together. Let your imagination soar on our indoor Story Trail exploring a secret cave or climbing a magic tower. Have an adventure in our Story Garden - sail away on a pirate ship, slide down a monster's tongue or play with giant musical instruments. Our Story Studio hosts interactive family exhibitions by famous picture book illustrators. We also have a full programme of storytelling, crafts and workshops and visits by your favourite picture book authors and illustrators.",
//     capacity: 10,
//     age_from: 2,
//     age_to: 14,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity14, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity15 = {
//     title: "Deen City Farm",
//     address: "39 Windsor Avenue, Merton Abbey, London, SW19 2RR",
//     image: "activity15.jpg",
//     description: "Set on part of the National Trust's Morden Hall Park Estate, Deen City Farm provides south Wimbledon with a healthy dose of the countryside. Meet the farmyard residents (including Milo and Kimby the alpacas), buy grass nuts to feed the animals or squeal over the newly born ducklings, chicks and lambs. With funding cuts looming, the farm is determined to stay open and is continuing to offer its Growing Garden community project and free bicycle surgeries. For kids, there is also a youngfarmers club and 'Own A Pony Days' for a taste of life on the farm.",
//     capacity: 50,
//     age_from: 2,
//     age_to: 16,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity15, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity16 = {
//     title: "Chickenshed Theatre",
//     address: "290 Chase Side, Southgate, London, N14 4PE",
//     image: "activity16.jpg",
//     description: "Chickenshed was founded in 1974, on the premise that the performing arts belong to everyone who wants to join in. This inclusive policy has attracted around 700 members from every background. Performances are held in one of four spaces including, in summer, an outdoor amphitheatre. 'Tales from the Shed' (Friday and Saturday morning) is aimed at under-sevens, bringing stories, both original and tradititional, to life.",
//     capacity: 70,
//     age_from: 1,
//     age_to: 7,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity16, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity17 = {
//     title: "V&A Museum of Childhood Sensory Pod",
//     address: "Cambridge Heath Rd, London, E2 9PA",
//     image: "activity17.jpg",
//     description: "Amid the plethora of playthings and child-related artefacts, the Sensory Pod is a cosy corner of impressions and illuminations. With an assortment of water- and bubble-filled columns and mirrors creating a dazzling mini maze, your baby will be surrounded by a kaleidoscope of colour and movement. Little ones can either sit or stand right up close to get touchy-feely and explore surfaces.",
//     capacity: 10,
//     age_from: 0,
//     age_to: 3,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity17, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity18 = {
//     title: "National Army Museum Kids' Zone",
//     address: "Royal Hospital Rd, London, SW3 4HT ",
//     image: "activity18.jpg",
//     description: "There are plenty of interactive activities on hand in this snug section designed for babies and toddlers. With everything scaled down to small proportions, tots can pull themselves up to standing position – eliciting shrieks of joy from babies and parents alike.",
//     capacity: 10,
//     age_from: 2,
//     age_to: 4,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity18, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity19 = {
//     title: "The Bee's Knees Indoor Children's Garden",
//     address: "166 Lavender Hill, Battersea, London, SW11 5TN",
//     image: "activity19.jpg",
//     description: "A gentle world of softly undulating ‘hills’, this chill-out zone conjures up a rural idyll fashioned after Teletubbies. There’s ample space for babies to practise crawling and climbing through explorative play amid the warm colours and scatter cushions.",
//     capacity: 10,
//     age_from: 2,
//     age_to: 4,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity19, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity20 = {
//     title: "Parent and Baby (PABA) Aqua Aerobics",
//     address: "Queen Elizabeth Olympic Park, E20",
//     image: "",
//     description: "The Aquakiddies/Babies PABA aqua aerobics course has been piloted over six months with several groups of mothers nationally, with all groups showing very positive results. Babies have become water confident and are learning the foundations of swimming, while Parents are taken through a carefully structured water aerobics exercise program.",
//     capacity: 10,
//     age_from: 2,
//     age_to: 4,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity20, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// var activity21 = {
//     title: "Busy Rascals",
//     address: "Queensbury Pub, 110 Walm Lane, Willesden Green NW2 4RS",
//     image: "activity21.jpg",
//     description: "Busy Rascals provide a baby and child friendly environment where parents in NW2, NW10 and in local areas can meet, socialise and participate in various activities with their little ones. Busy Rascals host parent and baby/toddler/pre-schooler mornings Monday to Friday and one Saturday per month between 9.30am-11.30am",
//     capacity: 10,
//     age_from: 0,
//     age_to: 6,
//     date: '23/06/2015'
//   };

// db.Activity.create(activity21, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// ---BLANK    ACTIVITY   BLANK   ACTIVITY   BLANK   ACTIVITY

// var activity3 = {
//     title: "",
//     address: "",
//     image: "",
//     description: "",
//     capacity: 10,
//     age_from: 2,
//     age_to: 4
//   };

// db.Activity.create(activity?, function(err, activity) {
//   console.log('activity has been created');
//   console.log(activity);
// })

// ======= create Customers with Activities +++++++++++++

// db.User.create({
//     name: 'julie morgan',
//     email: 'info@toyhouse.org.uk',
//     phone: '020 7987 7399',
//     role: 'Customer'
// }, function(err, User){
//   User.activities.push(activity1);
//   User.activities.push(activity2);
//   User.save();
//   console.log(User);
// });

// db.User.create({
//     name: 'Erika',
//     email: 'Erika@mail.com',
//     phone: '32-234-2323',
//     role: 'Customer' 
// }, function(err, User){
//   User.activities.push(activity3);
//   User.activities.push(activity4);
//   User.save();
//   console.log(User);
// });

// db.User.create({
//     name: 'Brian',
//     email: 'brian@mail.com',
//     phone: '32-234-2323',
//     role: 'Customer' 
// }, function(err, User){
//   User.activities.push(activity5);
//   User.activities.push(activity6);
//   User.save();
//   console.log(User);
// });

// db.User.create({
//     name: 'Margaret Jones',
//     email: 'madge@madgemail.com',
//     phone: '32-234-2323',
//     role: 'Customer' 
// }, function(err, User){
//   User.activities.push(activity7);
//   User.activities.push(activity8);
//   User.save();
//   console.log(User);
// });












