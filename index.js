import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()
const postsFolder = path.join(process.cwd(), 'views/posts');


const posts = fs.readdirSync(postsFolder)
  .filter(file => file.endsWith('.ejs'))
  .map(file => file.replace('.ejs', ''));

//app config
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.render('home', {posts})
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})
