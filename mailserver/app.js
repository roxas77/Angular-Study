const nodemailer = require('nodemailer');
const smtpPool = require('nodemailer-smtp-pool');
// smtpPool는 smtp서버를 사용하기 위한 모듈로
// transporter객체를 만드는 nodemailer의 createTransport메소드의 인자로 사용된다.

const config = {
  mailer: {
    service: 'Gmail',
    host: 'localhost',
    port: '465',
    user: 'ssms.ngensoft.co.kr@gmail.com',
    password: 'utfclkybnaszemid',
  },
};

const from = 'FROM < genesigzero@gmail.com >';
const to = 'roxas77@ngensoft.co.kr';
const subject = 'This is title';
const html = '<p>This is paragraph.</p>';
// const text = 'This is just text.';

const mailOptions = {
  from,
  to,
  subject,
  html,
  // text,
};
// 본문에 html이나 text를 사용할 수 있다.

const transporter = nodemailer.createTransport(smtpPool({
  service: config.mailer.service,
  host: config.mailer.host,
  port: config.mailer.port,
  auth: {
    user: config.mailer.user,
    pass: config.mailer.password,
  },
  tls: {
    rejectUnauthorize: false,
  },
  maxConnections: 5,
  maxMessages: 10,
}));

// 메일을 전송하는 부분
transporter.sendMail(mailOptions, (err, res) => {
  if (err) {
    console.log('failed... => ', err);
  } else {
    console.log('succeed... => ', res);
  }

  transporter.close();
});
