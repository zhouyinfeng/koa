const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const app = new Koa();

app.use(async(ctx,next) => {
    console.log(`process ${ctx.request.method} ${ctx.request.url}`)
    await next();
});

router.get('/hello/:name',async(ctx,next) => {
    var name =ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!!!</h1>`;
});

router.get('/',async(ctx,next) => {
    ctx.response.body = '<div align="center"><h1>Index</h1> <form action="/sigin" method="post">' +
        '<p> Name:<input name="name" value="zyf"></p>' +
        '<p> Password:<input name="password" type="password"></p>' +
        '<p><input type="submit" value="Submit"></p>' +
        '</form></div>';
});

router.post('/sigin',async(ctx,next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
        console.log(`sigin with name: ${name},password:${password}`);
        if(name === 'zyf'  &&  password === '12345'){
            ctx.response.body = `<h3 align="center"> Welcome,${name}!</h3>`
        }else{
            ctx.response.body = `<h1>Login failed!!!</h1> <p><a href="/">Please try again!!!</a></p>`;
        }
});

app.use(bodyParser());
app.use(router.routes());
app.listen(3000);
console.log('app started at port 3000')