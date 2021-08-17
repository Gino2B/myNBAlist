# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
curry = Player.create({
  name: "Stephen Curry",
  bio: 'Wardell Stephen "Steph" Curry II is an American professional basketball player for the Golden State Warriors of the National Basketball Association. He plays the point guard position. Many analysts and players have called him the greatest shooter in NBA history.',
  team: "Golden State Warriors",
  image_url: "https://pyxis.nymag.com/v1/imgs/8e0/18c/e542fefcbd4d20b608d37fcd882615f997-steph-curry.rsquare.w1200.jpg",
})
booker = Player.create({
  name: "Devin Booker",
  bio: "Devin Armani Booker (born October 30, 1996) is an American professional basketball player for the Phoenix Suns of the National Basketball Association (NBA). Booker was selected by the Phoenix Suns in the first round of the 2015 NBA draft with the 13th overall pick.",
  team: "Phoenix Suns",
  image_url: "https://cdn.vox-cdn.com/thumbor/3T1NsyolyYSvYx7UFaALCSJWsxI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22305545/usa_today_15576738.jpg",
})
lebron = Player.create({
  name: "LeBron James",
  bio: 'LeBron Raymone James Sr. is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). Nicknamed "King James", he is widely considered one of the greatest players in NBA history and is frequently compared to Michael Jordan in debates over the greatest basketball player ever. The only player to have won NBA championships with three franchises (the Cleveland Cavaliers, the Miami Heat, and the Lakers) as NBA Finals MVP,',
  team: "Los Angeles Lakers",
  image_url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
})
durant = Player.create({
  name: "Kevin Durant",
  bio: "Kevin Wayne Durant also known simply by his initials KD, is an American professional basketball player for the Brooklyn Nets of the National Basketball Association (NBA). He played one season of college basketball for the Texas Longhorns, and was selected as the second overall pick by the Seattle SuperSonics in the 2007 NBA draft.",
  team: "Brooklyn Nets",
  image_url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ece6f50938ec500060aac25%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D3648%26cropY1%3D133%26cropY2%3D3784",
})
giannis = Player.create({
  name: "Giannis Antetokounmpo",
  bio: "Giannis Sina Ugo Antetokounmpo is a Greek professional basketball player for the Milwaukee Bucks of the National Basketball Association (NBA). Antetokounmpo''s nationality, in addition to his size, speed and ball-handling skills have earned him the nickname 'Greek Freak'",
  team: "Milwaukee Bucks",
  image_url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032977.png&w=350&h=254",
})
harden = Player.create({
  name: "James Harden",
  bio: "James Edward Harden Jr. is an American professional basketball player for the Brooklyn Nets of the National Basketball Association (NBA). He is one of the NBA's most prolific scorers and has been called the best shooting guard in the NBA, as well as one of the top overall players in the league.",
  team: "Brooklyn Nets",
  image_url: "https://cdn.nba.com/headshots/nba/latest/1040x760/201935.png",
})
kawhi = Player.create({
  name: "Kawhi Leonard",
  bio: "Kawhi Anthony Leonard is an American professional basketball player for the Los Angeles Clippers of the National Basketball Association. He played two seasons of college basketball for the San Diego State Aztecs and was named a consensus second-team All-American as a sophomore.",
  team: "Los Angeles Clippers",
  image_url: "https://cdn.theathletic.com/app/uploads/2021/05/26072741/GettyImages-1233110503-1024x682.jpg",
})
ad = Player.create({
  name: "Anthony Davis",
  bio: "Anthony Marshon Davis Jr., also known by his initials AD, is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association. He plays the power forward and center positions.",
  team: "Los Angeles Lakers",
  image_url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png",
})
luka = Player.create({
  name: "Luka Doncic",
  bio: "Luka Dončić is a Slovenian professional basketball player for the Dallas Mavericks of the National Basketball Association. He also represents the Slovenian national team.",
  team: "Dallas Mavericks",
  image_url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png",
})
jokic = Player.create({
  name: "Nikola Jokić",
  bio: "Nikola Jokić is a Serbian professional basketball player for the Denver Nuggets of the National Basketball Association who plays the center position. The three-time NBA All-Star has been named to the All-NBA Team on three occasions, and has won the NBA Most Valuable Player Award for the 2020–21 NBA season.",
  team: "Denver Nuggets",
  image_url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3112335.png",
})
embiid = Player.create({
  name: "Joel Embiid",
  bio: "Joel Hans Embiid is a Cameroonian professional basketball player for the Philadelphia 76ers of the National Basketball Association. After one year of college basketball with the Kansas Jayhawks, he was drafted with the third overall pick in the 2014 NBA draft by the 76ers.",
  team: "Philadelphia 76ers",
  image_url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png",
})

curryMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=GEMVGHoenXM", player: curry })
curryMoment2 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=1o2jn8OoNvs&ab_channel=NBA", player: curry })
curryMoment3 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=VFMCLa4FdX0", player: curry })
curryMoment4 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=xSs4yUZhb-I", player: curry })
curryMoment5 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=8dA8y2tZZ0Q", player: curry })

bookerMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=Pan_1zX0RPE", player: booker })

lebronMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=VkvTLOhm-TQ", player: lebron })

durantMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=frlcdGncTVM", player: durant })

giannisMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=wHPLeWsAQw4", player: giannis })

hardenMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=5sB8cXmR-bY", player: harden })

kawhiMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=5yxFKDf2I2o", player: kawhi })

adMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=TsLt0pwXs-s", player: ad })

lukaMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=bMZZJiUVvHw", player: luka })

jokicMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=DSLKWjQ9npg", player: jokic })

embiidMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=-sRA8q4reos", player: embiid })

gino = User.create({
  name: "Gino",
  email: "g2b@gmail.com",
  password: "12345",
  image_url: "https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg",
})
