import {Router} from 'https://deno.land/x/oak@v5.2.0/mod.ts';
import * as planets from './models/planets.ts';

const router = new Router();

router.get('/', (ctx) => {
	ctx.response.body = `//////////////////////////////
	/////////////////////////////////////////////////////`;
});

router.get('/planets', (ctx) => {
	ctx.response.body = planets.getAll();
});

export default router;
