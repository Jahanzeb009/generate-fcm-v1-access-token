const admin = require('firebase-admin');
const serviceAccount = require("./service-account.json");
const getAccessToken = require('./app');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


let token = '804a1581ccc87afb66282f686b474b3508e0576a629c142c7e3592d674fa33b92129602c75f41f8683eae47d23b3b53e05a94f6de6cfce9b64e6d606b24355e5130e79c30879c5948d31ab37e92a76b6'
let title = 'title'
let body = 'body'
let access_token = "ya29.c.c0AY_VpZhuwWgjFMOwF3609s6BD_5sEwSllb1MIXniQqvW3nyDTv4J17ip2KGM9Vp6l_IKb6RnrYdRZIUJCzbzePzHPOwALCdL1VX8hBdS2Wzf8yUQEIvODV0mO_Cndd3TkhnOFLlU2c5-GK9t_2OLv8BbhZwDgu9t3UApH1R18k0-BV80GjXGvnKMNW9acOJRqDfSR4kO-laknY6rYE9PsU2TaKSx9hO8Zl-VjZ4Ej7ykkKANL4H1qmoVwEzQGzIWIehhwp9PdBpTv2qW3PBdFqa2VjebBTQtv_pR0zN7KZc9S_v5YY-IFmt_XC0DVmeagOuyd3z-lewCos1dSvsQpSNRyss8XU88k4jM03s8jhc9qi7_3dmgZK-_H385KzQSnlaFwhWXkVWenthlnguWyWZ6W0BkXzQk-F6lgz_jYesvd4uZ9x1QbzFSwfUuju0BncRJgxxzzmgVFzQlXJvR_xYR5WqkgXY5FVXhz4jFyplO6VRY7kh27Mu3WsegMvYXcjl6YV7cO4eSZ0bZ9gajOmsUXz8zpl48bBRxuqmUV_11f8cqQUmjlctoZXq3junu893kp12w3ObRljMBrI__Y6xrQ4kRtz2Jm5yreB7aR0bj7jdF0phtOWWvz0m5q2VqxF14qQZ7Bifbuxh8fSlajyiVF_c9tSzMxW1FtSiYetlWIc555l8yZJ5c3Sq_qQuplZceoehJmMqJh_X_5OyRhvQ7_QY8I80y0SasdBv_ws5pU1UsyoFsQmQ8-Bo4ZyQ_6YRnt1ms7tjjgbUsBpOBj_iZ6_gpvcp0rgaY54uv1Ute_kgMb9hUc5353nI1amX9yuJFWsuZ3F1f0az_oVseVJhmtzqJ31afRrcI7tbw3g6O_2Q9lcqxW__x_begM_0s-nFxwB7Mf6kY-52ZiOR88Y1YhXXj44302636k6IyF6vdZesttQy2fX0_yRYwMORFS3jR2d3ZbzqVB0J9SpBwesljip9qWIcI2kjR_kg-uQ1bpX6grtqzvFX"

let d = {
    experienceId: '@jahanzeb009/app51',
    scopeKey: '@jahanzeb009/app51'
}
let data = JSON.stringify(d)
fetch('https://fcm.googleapis.com/v1/projects/testproject-579e9/messages:send', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer ' + access_token
    },
    body: JSON.stringify({
        message: {
            token, // Use 'topic' instead of 'token' if sending to a topic
            notification: {
                title: 'title',
                body: 'body',
            },
            data: {
                experienceId: '@jahanzeb009/app51',
                scopeKey: '@jahanzeb009/app51'
            }, // Custom data to send with the notification
        }
    })

}).then(res => res.json()).then(res => console.log(res))

