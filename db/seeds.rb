# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
curry = Player.create({ name: "Stephen Curry", bio: 'Wardell Stephen "Steph" Curry II is an American professional basketball player for the Golden State Warriors of the National Basketball Association. He plays the point guard position. Many analysts and players have called him the greatest shooter in NBA history.', team: "Golden State Warriors" })
booker = Player.create({
  "name": "Devin Booker",
  "bio": "Devin Armani Booker (born October 30, 1996) is an American professional basketball player for the Phoenix Suns of the National Basketball Association (NBA). Booker was selected by the Phoenix Suns in the first round of the 2015 NBA draft with the 13th overall pick.",
  "team": "Phoenix Suns",
})

curryMoment = Moment.create({ vid_link: "https://www.youtube.com/watch?v=GEMVGHoenXM", player: curry })
gino = User.create({
  "name": "Gino",
  "email": "g2b@gmail.com",
  "password": "12345",
})
