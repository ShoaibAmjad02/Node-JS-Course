const express = require('express')
const app = express()

// Making Server at the port 3000
app.listen(3000, () => {
    console.log("Successfully connected on Port 3000")
})

// yay jo get method ha means kay yay get method kuch page main dikhanay kay liyay hota ha 
// get method kay andar 2 parameters aatay hain (req) ka matlab ha kay joo user request day raha ha and second is (res) means response jo server as a send karray ga response
app.get('/', (req, res) => {
    res.send("<h1>Welcome to my Home Page</h1>")/* send means kay hum nay user ko koi bhi message yaa html show karni ha*/
})

// yahan maa aik naya Route create karta hoon /about kay naam say 
app.get('/about', (req, res) => {
    res.send("<h1>About Page</h1>")/* send means kay hum nay user ko koi bhi message yaa html show karni ha*/
})
// iss ko run karnay kay liyay muj ko Localhost:3000 kay sath /about likhna parray ga


// yahan par maa sub routes yanni nested route bhi bana sakta hoon 
// iss koo bana nay kay liyay muj koo /about kay sath apnay nested route ka naam likhna parray ga 
// jaisay maa baanna layta hoon user kay naam say subroute too maa likhoon ga :::
app.get('/about/user', (req, res) => {
    res.send("<h1>User Page</h1>")/* send means kay hum nay user ko koi bhi message yaa html show karni ha*/
})
// iss ko run karnay kay liyay muj ko Localhost:3000 kay sath /about kay sath /user likhna parray ga


//  yay joo route hotay hain inn kay andar maa special keyword bhi use kar sakta hoon jaisay ( . @  $ aur kuch bhi) etc.
app.get('/about/random.text', (req, res) => {
    res.send("<h1>Random Page</h1>")/* send means kay hum nay user ko koi bhi message yaa html show karni ha*/
})
// iss ko run karnay kay liyay muj ko Localhost:3000 kay sath /random.text pooraa likhna parray ga


// abb joo manay about naam say route banaya tha maa chahtaa hoon kay user iss main koi value send kar sakay
// too uss kay liyay muj koo /about kay sath ma lagaaoon ka /:id
app.get('/about/:id', (req, res) => {
    res.send(req.params)/* abb iskoo print karnay kay bohut saaray methods hain jaisay manay likha ha req.params */
})
// iss ko run karnay kay liyay muj ko Localhost:3000 kay sath /about / agay phi koi bhi value bhejj nhi haa



//  abb iskoo thorraa complicated yaani subroutes yani nested route kayb sth banata hoon 
// iss main app ko kabhi space nhi lagani ha 
// jaisay maa likh taa hoon about/ kay sath :userid and phirr maa aiik orr bana layta hoon jaisay :bookid 
app.get('/about/:userid/book/:bookid', (req, res) => {
    res.send(req.params)/* abb iskoo print karnay kay bohut saaray methods hain jaisay manay likha ha req.params */
})
// iss main ap hali numeric value nhi likhtay balkay kuch bhi alphabets bhi numbers bhi etc.
// iss ko run karnay kay liyay muj ko Localhost:3000 kay sath /about kay baad /user agay phi koi bhi value bhejj nhi haa phir agay /book agay phir koi value bhej nii ha


// iss main koi zarroori nhi ha kay multiples route banaye balkay app iss main aik route main bhi multiple values send kar saktay hain 
// uss kay liyay muj ko :userid kay sath - aur :bookid likhna ha 
app.get('/about/:userid-:bookid', (req, res) => {
    res.send(req.params)/* abb iskoo print karnay kay bohut saaray methods hain jaisay manay likha ha req.params */
})
// iss ko run karnay kay liyay muj ko Localhost:3000 kay sath /about kay baad /user agay phi koi bhi value bhejj nhi haa phir agay - lagana ha agay phir koi value bhej nii ha


//   yahan par inn values koo send karnay kaa aik orr bhi method haa
//  jaisaay maa Localhost:3000 kay sath search naam ka aik route ha uss kay sath maa laaga doo ga ?name= phi koi bhi value dal doo gaa
// iss koo bananay kay liyay hum query params ka use kartay hain 
app.get('/search', (req, res) => {
    res.send(req.query)/* abb iskoo print karnay kay bohut saaray methods hain jaisay manay likha ha req.query likha haa */
})
// iss ko run karnay kay liyay muj ko Localhost:3000 kay sath /search kay sath ? mark dal  agay phi koi bhi value bhejj nhi haa 
// humm iss maain aik say zayda hi value bhi send kar saktay hain 
// agar apko iss main multiple query bhej nhi haa too apko har bar iskay sath & ka sign lagana paray ga
