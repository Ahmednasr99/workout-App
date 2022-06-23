# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


#users
u1 = User.create(name: 'Louis', email: 'louis@gmail.com', admin: true, password: "password")
u2 = User.create(name: 'Grace', email: 'grace@gmail.com', admin: true, password: "password")
u3 = User.create(name: "ahmed", email: 'ahmed@gmail.com', admin: true, password: "ahmed")
u4 = User.create(name: "me", email: 'me@gmail.com', admin: true, password: "password")
#diets
# Diet.create('name')
# Meal.create(content: '150 g oatmeal, 5 eggs', done: false, diet_id)
d1 = Diet.create(
      user_id: u1.id)

d2 = Diet.create(
     user_id:u2.id)

d3 = Diet.create(
     user_id:u3.id)

     

m1 = Meal.create(content: '150 g otsmeal , 5 eggs ', ongoing: false, diet_id:d1.id)
m2 = Meal.create(content: '150 g rice , 150 g chicken,40 g vegtables', ongoing: false, diet_id:d1.id)
m3 = Meal.create(content: '150 g rice , 150 g steak,40 g vegtables', ongoing: false, diet_id:d1.id)
m4 = Meal.create(content: '150 g potats , 150 g chicken,40 g vegtables', ongoing: false, diet_id:d1.id)
m5 = Meal.create(content: '150 g potats , 150 g chicken,40 g vegtables', ongoing: false, diet_id:d1.id)
m6 = Meal.create(content: '150 g otsmeal , 5 eggs ', ongoing: false, diet_id:d1.id)
m7 = Meal.create(content: '150 g otsmeal , 5 eggs ', ongoing: false, diet_id:d2.id)
m8 = Meal.create(content: '150 g rice , 150 g chicken,40 g vegtables', ongoing: false, diet_id:d2.id)
m9 = Meal.create(content: '150 g rice , 150 g steak,40 g vegtables', ongoing: false, diet_id:d2.id)
m10 = Meal.create(content: '150 g potats , 150 g chicken,40 g vegtables', ongoing: false, diet_id:d2.id)
m11 = Meal.create(content: '150 g potats , 150 g chicken,40 g vegtables', ongoing: false, diet_id:d2.id)
m12 = Meal.create(content: '150 g otsmeal , 5 eggs ', ongoing: false, diet_id:d2.id)
m13 = Meal.create(content: '150 g otsmeal , 5 eggs ', ongoing: false, diet_id:d3.id)
m14 = Meal.create(content: '150 g rice , 150 g chicken,40 g vegtables', ongoing: false, diet_id:d3.id)
m15 = Meal.create(content: '150 g rice , 150 g steak,40 g vegtables', ongoing: false, diet_id:d3.id)
m16 = Meal.create(content: '150 g potats , 150 g chicken,40 g vegtables', ongoing: false, diet_id:d3.id)
m17 = Meal.create(content: '150 g potats , 150 g chicken,40 g vegtables', ongoing: false, diet_id:d3.id)
m18 = Meal.create(content: '150 g otsmeal , 5 eggs ', ongoing: false, diet_id:d3.id)










w1=Workout.create(monday: "chest",
tuesday: "back",
wednesday: "legs",
thursday: "Arms",
friday: "chest",
saturday: "shoulders",
sunday: "rest",
user_id:u1.id)
    
w2=Workout.create(monday: "chest and biceps",
      tuesday: "back and triceps",
      wednesday: "legs and shoulders",
      thursday: "rest",friday: "chest and biceps",
      saturday: "back and triceps",
      sunday: "legs and shoulders",
      user_id:u2.id)
    

w3=Workout.create(monday: "chest and biceps",
tuesday: "back and triceps",
wednesday: "legs and shoulders",
thursday: "rest",
friday: "chest and biceps",
saturday: "back and triceps",
sunday: "legs and shoulders",
user_id:u3.id)


Champion.create(name:"Arnold Schwarzenegger",
image_url:"https://media.newyorker.com/photos/624f484bb8900d61c847f8d7/master/pass/Long-Butler-09.jpg",
birthDate:"July 30, 1947",
weight:235,
category:"open weight",
nationality:"American Austrian",
height:188)

Champion.create(name:"Ronnie Coleman",
      image_url:"https://i.pinimg.com/originals/f3/0a/2e/f30a2e4d4780caa6f88f4617aa70f165.jpg",
      birthDate:"May 13, 1964",
      weight:297,
      category:"open weight",
      nationality:"American",
      height:180)
    
Champion.create(name:"Big Ramy",
      image_url:"https://pbs.twimg.com/media/EpqGn6rVQAAc3-6.jpg",
      birthDate:"September 16, 1984",
      weight:295,
      category:"open weight",
      nationality:"Egyptien",
      height:175)

Champion.create(name:"Franco Columbu",
  image_url:"https://mennohenselmans.com/wp-content/uploads/2016/01/Franco-Columbu-1976-0.jpg",
  birthDate:"August 7, 1941",
  weight:187,
  category:"open weight",
  nationality:"American",
  height:165)
          
Champion.create(name:"Dorian Yates",
  image_url:"https://www.muscleandfitness.com/wp-content/uploads/2019/06/Dorian-Yates-Biceps-BW.jpg?w=1109&h=614&crop=1&quality=86&strip=all",
  birthDate:"19 April 1962",
  weight:265,
  category:"open weight",
  nationality:"British",
  height:178) 

Champion.create(name:"Phil Heath",
        image_url:"https://wallpapercave.com/wp/wp2945276.jpg",
        birthDate:"December 18, 1979",
        weight:240,
        category:"open weight",
        nationality:"American",
        height:175)
      
Champion.create(name:"Frank Zane",
        image_url:"https://worthly.com/wp-content/uploads/2015/11/Frank-Zane.png",
        birthDate:"September 16, 1984",
        weight:200,
        category:"open weight",
        nationality:"American",
        height:175)
Champion.create(name:"Flex Wheeler",
    image_url:"https://external-preview.redd.it/qowsrGZWe_3ND6f8u4CIEt0lUyhwWQtFj-QiW9i6ObY.jpg?auto=webp&s=84953b410e26998460ecaed2766f1a7bd1bb4859",
    birthDate:"August 23, 1965",
    weight:240,
    category:"open weight",
    nationality:"American",
    height:178)
            
Champion.create(name:"Gary Strydom",
    image_url:"https://i0.wp.com/physicalculturestudy.com/wp-content/uploads/2017/04/gary-with-about-us1.png?fit=636%2C800&ssl=1",
    birthDate:"September 16, 1960",
    weight:283,
    category:"open weight",
    nationality:"Egyptien",
    height:188) 
      
puts "seeds done "