import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import * as sapper from '@sapper/server';

const fileStore = sessionFileStore(session);

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		session({
			secret: 'conduit',
			resave: false,
			saveUninitialized: true,
			cookie: {
				maxAge: 31536000
			},
			store: new fileStore({
				path: process.env.NOW ? `/tmp/sessions` : `.sessions`
			})
		})
	)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => ({
				user: req.session && req.session.user
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
