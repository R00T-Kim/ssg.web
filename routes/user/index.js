const express = require('express')
const {alertMove} = require('../../util/alertMove.js')
const user = require('../../models/user.js')
const router = express.Router();

router.get('/login', (req,res)=>{
    res.render('user/login.html')
})

router.post('/login', (req, res)=>{
    const {userid, userpw} = req.body;
    const [data] = user.filter(v => (v.userid === userid &&v.userpw === userpw));
    console.log('data: ', data);
    if (data != undefined) {
        req.session.user = {...data}
        res.redirect('/')
    } else{
        res.send(alertMove("아이디와 패스워드가 없습니다.", "/user/login"))
    }
})

router.get('/profile', (req, res) => {
    res.render('user/profile.html', {user});
});

router.get('/logout', (req,res) => {
    req.session.destroy(()=>{
        req.session
    })
    console.log(req.session)
    res.send(alertMove('로그아웃이 완료되었습니다.', '/'))
})

module.exports = router;