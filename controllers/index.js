var fn_index = async(ctx,next) => {
    ctx.response.body = '<div align="center"><h1>登录系统</h1> <form action="/sigin" method="post">' +
        '<p> Name:<input name="name" value="zyf"></p>' +
        '<p> Password:<input name="password" type="password"></p>' +
        '<p><input type="submit" value="Submit"></p>' +
        '</form></div>';
};


var fn_sigin = async(ctx,next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`sigin with name: ${name},password:${password}`);
    if(name === 'zyf'  &&  password === '12345'){
        ctx.response.body = `<h3 align="center"> Welcome,${name}!</h3>`
    }else{
        ctx.response.body = `<h1>Login failed!!!</h1><p><a href="/">Please try again!!!</a></p>`;
    }
};

module.exports = {
    'GET/':fn_index ,
    'POST/sigin':fn_sigin
}

