// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      headers: {
        /* Required for CORS support to work */
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        data: {
          working:' YEAH', 
          work: [
            {
              "company": "Okta",
              "url": "http://okta.com/",
              "title": "Senior Software Engineer",
              "summary": "Working on Backbone JS, SASS, HTML5, CSS3, Webpack, npm, opensource Projects",
              "period": "Nov 2016 - current"
            },
            {
              "company": "Jobvite",
              "url": "http://recruiting.jobvite.com/",
              "title": "Software UI Engineer",
              "summary": "Working on Angular JS, SASS, HTML5, CSS3.",
              "period": "Jan 2012 - Nov 2016"
            },
            {
              "company": "Gala-Net Inc",
              "url": "http://company.webzen.com/eng/",
              "title": "Front End Web Developer",
              "summary": "PHP, Javascript, HTML, CSS, jQuery",
              "period": "Oct 2010 - Jan 2012"
            },
            {
              "company": "Eyemagine",
              "url": "http://www.eyemaginetech.com/",
              "title": "Jr Software Developer",
              "summary": "Worked on Magento Ecommerce framework (PHP), Elgg(open source social networking engine), Javascript, HTML, CSS, jQuery",
              "period": "June 2010 - Oct 2010"
            }
          ],
          resume: [
            {
              "title": "Web Technologies",
              "skills": "JavaScript, HTML, CSS, JAVA, Spring, Webpack, Node.js, npm, Yarn, HTML5, CSS3, SASS, JSP"
            },
            {
              "title": "Javascript Frameworks",
              "skills": "jQuery, Angular JS, Backbone JS, React, VueJS"
            },
            {
              "title": "Database",
              "skills": "MySQL, MS Access,mongolab, mongo DB"
            },
            {
              "title": "Servers and Tools",
              "skills": "Git, Svn, JIRA, VS Code, Sublime Text, Apache Tomcat, Intellij"
            },
            {
              "title": "Operating System ",
              "skills": "Mac OS, Unix, Windows"
            }
          ]
        } 
      }),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
