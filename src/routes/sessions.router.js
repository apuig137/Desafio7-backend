import { Router } from 'express';
import passport from 'passport';
import { register, failRegister, login, failLogin, logout, githubCallback } from "../controllers/sessions.controller.js"

const router = Router();

router.post('/register', passport.authenticate('register', { failureRedirect: '/failregister' }), register)

router.get('/failregister', failRegister);

router.post('/login', passport.authenticate('login', { failureRedirect: '/api/sessions/faillogin'}), login)

router.get('/faillogin', failLogin);

router.get('/logout', logout)

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }), async (req, res) => { });

router.get('/githubcallback', passport.authenticate('github', { failureRedirect: 'api/sessions/login' }), githubCallback);


export default router;