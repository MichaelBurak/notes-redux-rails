# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Note.create(title: 'Notes!', body: 'A note app! Try it out!', deleted: false)
Note.create(title: "CRUDdy app!", body: 'Enjoy that you can delete your mistakes and change your mind too!' )
Note.create(title: "Redux!", body: 'Is awesome!')
Note.create(title: "Thin", body: "It's pretty simple!")
Note.create(title: "Stylin", body: "But it's got some styling!")
Note.create(title: "Loading", body: "It's got a little loading page you might see!")
Note.create(title: "Confirmations", body: "And when you delete or update a note, you'll know it!")
Note.create(title: "Trash test", body:"Deleted is true by default", deleted: true)