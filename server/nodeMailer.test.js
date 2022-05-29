// // [GET] /nodemailer
// nodeMail(req, res, next) {
//     var transporter = nodemailer.createTransport({ // config mail server
//         host: 'smtp.gmail.com', // config mail server
//         port: 587,
//         secure: false,
//         requireTLS: true,
//         service: 'gmail',
//         auth: {
//             user: 'tranhoangkhang9899@gmail.com',
//             pass: 'tranhoangkhang1212'
//         }
//     });
//     var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
//         from: 'tranhoangkhang9899@gmail.com',
//         to: 'tranhoangkhang1200@gmail.com',
//         subject: 'Test Nodemailer',
//         text: 'You recieved message from ',
//         html: '<div><h2 style="color: red;">Hello Khang nè</h2></div>'
//     }
//     transporter.sendMail(mainOptions, function (err, info) {
//         if (err) {
//             console.log(err);
//             res.redirect('/')
//         } else {
//             console.log('Message sent: ' + info.response);
//             res.redirect('/')
//         }
//     });
// }