const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

var nodemailer = require('nodemailer');

app.post("/send-mail", (req, res)=>{
    const to = req.body.to
    const mailData= {
        from:"",
        to:to,
        subject:"Your payment is due!!",
        html:`<p>
                Hello${name},
              </p>
              <p>
                This is a remainder email that your payment of amount-${amount} is due on
              </p>
              <p>
                Kindly make the payment before the due date to avoid any inconvenience.
              </p>
              <p>
                Thanks as Regards,
              </p>`
    };
    transporter.sendMail(mailData, (erroe, infoe=>{
        if(error){
            return console.log(error);
        }
        res.status(200).send({message:"Invitation sent!", message_id: info.message_id})
    }));
})

const transporter = nodemailer.createTransport({
    port: 465,
    host:"smtp.gmail.com",
    auth:{
        user:'',
        pass:'',
    },
    secure: true,
})