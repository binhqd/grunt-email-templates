'use strict';
module.exports = function(grunt) {
  return {
    options : {
      subject : 'Test email template from Binh',
      transport : grunt.file.readJSON('config/nodemailer-transport.json'),

      message : {
        from : '<Binh Quan> binhqd@greenglobal.vn',
        attachments : [
          { // data uri as an attachment
            filename : 'ideapod-text.png',
            filePath : '<%= paths.src %>/images/ideapod-text.png',
            cid : 'ideapod-text@png' // same cid value as in the html img src
          },
          { // data uri as an attachment
            filename : 'logo.png',
            filePath : '<%= paths.src %>/images/logo.png',
            cid : 'logo@png' // same cid value as in the html img src
          },
          {
            filePath : '<%= paths.src %>/images/avatar.jpg',
            cid : 'avatar@jpg',
            filename : 'avatar.jpg'
          }
        ]
      },
      // HTML and TXT email
      // A collection of recipients
      recipients : [
        {
          email : 'binhqd@greenglobal.vn',
          name : 'Binh Quan'
        },
        {
          email : 'tinhh@greenglobal.vn',
          name : 'Tin Ha Huu'
        },
        {
          email : 'binhqd@hotmail.com',
          name : 'Binh Quan'
        },
        {
          email : 'justin@ideapod.com',
          name : 'Justin Brown'
        },
        {
          email : 'gergo@ideapod.com',
          name : 'Gergo Erdosi'
        }
      ]
    },

    dist : {
      src : [
        '<%= paths.dist %>/<%= paths.email %>'
      ]
    },

    dev : {
      src : [
        '<%= paths.tmp %>/<%= paths.email %>'
      ]
    },

    email1 : {
      src : [
        '<%= paths.tmp %>/response_email_template_png.html'
      ],
      options : {
        subject : '[Ideapod - Test] - Response email template test from Binh',
        message : {
          from : '<Binh Quan> binhqd@greenglobal.vn',
          attachments : [
            { // data uri as an attachment
              filename : 'ideapod-text.png',
              filePath : '<%= paths.src %>/images/ideapod-text.png',
              cid : 'ideapod-text@png' // same cid value as in the html img src
            },
            { // data uri as an attachment
              filename : 'logo.png',
              filePath : '<%= paths.src %>/images/logo.png',
              cid : 'logo@png' // same cid value as in the html img src
            },
            {
              filePath : '<%= paths.src %>/images/avatar.jpg',
              cid : 'avatar@jpg',
              filename : 'avatar.jpg'
            }
          ]
        },
      }
    },
    email2 : {
      src : [
        '<%= paths.tmp %>/welcome_email_template_png.html'
      ],
      options : {
        subject : '[Ideapod - Test] - Welcome email template test from Binh',
        message : {
          from : '<Binh Quan> binhqd@greenglobal.vn',
          attachments : [
            { // data uri as an attachment
              filename : 'ideapod-text.png',
              filePath : '<%= paths.src %>/images/ideapod-text.png',
              cid : 'ideapod-text@png' // same cid value as in the html img src
            },
            { // data uri as an attachment
              filename : 'logo.png',
              filePath : '<%= paths.src %>/images/logo.png',
              cid : 'logo@png' // same cid value as in the html img src
            }
          ]
        },
      }
    },
    email3 : {
      src : [
        '<%= paths.tmp %>/password_email_template_png.html'
      ],
      options : {
        subject : '[Ideapod - Test] - Password email template test from Binh',
        message : {
          from : '<Binh Quan> binhqd@greenglobal.vn',
          attachments : [
            { // data uri as an attachment
              filename : 'ideapod-text.png',
              filePath : '<%= paths.src %>/images/ideapod-text.png',
              cid : 'ideapod-text@png' // same cid value as in the html img src
            },
            { // data uri as an attachment
              filename : 'logo.png',
              filePath : '<%= paths.src %>/images/logo.png',
              cid : 'logo@png' // same cid value as in the html img src
            }
          ]
        }
      }
    },
    emailpng : {
      src : [
        '<%= paths.tmp %>/emailpng.html'
      ],
      options : {
        subject : '[Ideapod - Test] - Email PNG',
        message : {
          from : '<Binh Quan> binhqd@greenglobal.vn'
        },
        recipients : [
          {
            email : 'binhqd@hotmail.com',
            name : 'Binh Quan'
          }
        ]
      }
    }
  };
}