# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Note.create(title: "Notes!", content: 'A note app! Try it out!', deleted: false, liked: true)
Note.create(title: "CRUDdy app!", content: 'Enjoy that you can delete your mistakes and change your mind too!' )
Note.create(title: "Redux!", content: 'Is awesome!', liked: true)
Note.create(title: "Thin", content: "It's pretty simple!")
Note.create(title: "Stylin", content: "But it's got some styling!")
Note.create(title: "Loading", content: "It's got a little loading page you might see!")
Note.create(title: "Confirmations", content: "And when you delete or update a note, you'll know it!")
Note.create(title: "Trash test", content:"Deleted is true by default", deleted: true)