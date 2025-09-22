const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log("Successfully connected on Port 3000")
})

/*

//  iss main hum nay res.send() method use kiya hai jo kay express ka aik method hai jo kay hum ko response send karnay main help karta hai
//  ab hum res.json() method use kartay hain
app.get('/', (req, res) => {
    res.send({
        // yahan par maa issko Object bana layta hoon 
        name: "Shoaib",
        age: 15
    })
})
//  isko run karnay kay liyay maa Browse ki address bar main likhoon gaa localhost:3000 and jab hum iss parr hit karray gay too yay hum ko json ki form main output day gaa
//yay joo json format hota ha yay humassha double quotes main hota hai hali numbers hii double quotes main nahi hotay
// hum iskoo array main bhi dal saktay hain zarrori nhi ha kay object hi ho
app.get('/', (req, res) => {
    res.send(
        [Shoaib, Ali, Ahmed]
    )
})
// iss ka matlab ha kay yay jo send method ha yay hum ko HTML, JSON, Array, Object sab kuch send karnay ki JSON Format dayta hai
// ab hum res.json() method use kartay hain
app.get('/', (req, res) => {
    res.json({
        // yahan par yay json method use kar rahay hain
        name: "Shoaib",
        age: 15
    })
})

// agar maa iss json method main array of object use karoon too bhi koi masla nahi ha
app.get('/', (req, res) => {
    // yahan main aik users kay naam say variable bana rahaa hoon jismein main array of object store kar rahaa hoon
    const users = [
        { name: "Shoaib", age: 15 },
        { name: "Ali", age: 25 },
        { name: "Ahmed", age: 35 }
    ]
    res.json(users)// yahan par main iss users variable ko json method main pass kar rahaa hoon
})
// iss ko run karnay kay liyay maa Browse ki address bar main likhoon gaa localhost:3000 and jab hum iss parr hit karray gay too yay hum ko json ki form main output day gaa


// bilkul json ki hi tarah hii jsonp ka method use hota hai
app.get('/', (req, res) => {
    // yahan main aik users kay naam say variable bana rahaa hoon jismein main array of object store kar rahaa hoon
    const users = [
        { name: "Shoaib", age: 15 },
        { name: "Ali", age: 25 },
        { name: "Ahmed", age: 35 }
    ]
    res.jsonp(users)// yahan par main iss users variable ko json method main pass kar rahaa hoon
})
// iss ko run karnay kay liyay maa Browse ki address bar main likhoon gaa localhost:3000 and jab hum iss parr hit karray gay too yay hum ko json ki form main output day gaa
// jsonp ka method json ki tarah hi hota hai bas farq itna hai kay yay cross origin request main use hota hai
// cross origin request ka matlab hota hai kay agar hum apni website par kisi doosri website ka data lana chahte hain to uske liye hum jsonp ka method use karte hain
// lekin aaj kal cors ka concept zyada use hota hai is liye jsonp ka use kam hota ja raha hai

*/

// ab iskay redirect method ko samajhtay hain
// ab ma sab say pehlay aik simple redirect method use karta hoon
// ma aik /user route bana rahaa hoon jo kay about page ko redirect karay gaa
app.get('/user', (req, res) => {
    res.send("<h1>User Page</h1>")
})

// ab about ka route bana rahaa hoon yay user page ko redirect karay gaa
app.get('/about', (req, res) => {
    res.redirect('/user')// yahan par main about page ko redirect kar rahaa hoon
})
// ab maa iss ko run karnay kay liyay maa Browse ki address bar main likhoon gaa localhost:3000/about and jab hum iss parr hit karray ga too yay hum ko user page ki taraf redirect kar day gaa

// ab maa aik aur example bana rahaa hoon jismein maa aik external website par redirect karoon gaa
app.get('/google', (req, res) => {
    res.redirect('https://www.google.com')// yahan par main google ki website par redirect kar rahaa hoon
})