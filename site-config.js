const path = require('path');

module.exports = {
  name: 'OptimusDM',
  siteTitle: 'Optimus DM, Your ideal Digital Partner', // Site title.
  siteLogo: `${__dirname}/src/static/images/logo/logo.jpg`,
  siteUrl: 'https://www.optimusdm.in/', // Domain of your website without pathPrefix.
  siteKeyword: 'Digital Marketing Marketing Agency,Technology Company,Software Development,App Development,Website Development',
  siteDescription: 'Optimus DM is a global digital marketing agency which helps businesses achieve growth and profitability through digital marketing and technology services',
  siteType: 'Portfolio',
  googleAnalyticsID: 'UA-125818366-1', // GA tracking ID.
  backgroundColor: '#fff',
  themeColor: '#6AB8EE',
  ogImage: `${__dirname}/src/static/images/logo/logo.jpg`,
  services: [{
    name: '',
    description: '',
    image: '',
  }],
  contactForm: {},
  valueAddition: {},
  testimonials: [],
  pageMetaInfo: {
    about: {
      description: 'Optimus DM aims to become a leading Digital Transformation and Strategy Company globally with a solid Technology backbone to fuel business growth.',
    },
    websiteDevelopment: {
      description: 'Optimus DM designs and develops SEO friendly and mobile responsive websites which are rich in UI / UX and load very quickly.',
    },
    digitalMarketing: {
      description: 'Optimus DM propels business growth and profitability by providing Digital Marketing Services and Technology services.',
    },
    appDevelopment: {
      description: 'Optimus DM designs and develops Mobile Apps on both iOS as well as Android platforms. Our Apps are rich in UI / UX, easy to navigate, load very fast and occupy less storage space.',
    },
    outsourcedCMO: {
      description: 'Through our Outsourced CMO service we strategize, execute and optimize all your digital marketing efforts so you can focus on your core business.',
    },
    outsorucedCTO: {
      description: 'Book a free consultation to find more about our Outsourced CTO services such as Software Development, ERP, CRM, Buy Vs Build Analysis, Process Automation through Technology. ',
    },
  },
  currentOpenings: [
    {
      title: 'Web Designer and Developer',
      summary: 'A web designer / developer is responsible for designing, layout and coding of a website. They are involved with the technical and graphical aspects of a website - how the site works and how it looks. They can also be involved with the maintenance and updation of an existing site.',
      responsibilities: {
        description: 'After establishing the target audience for a website and identifying the type of content it will host, a web designer / developer will:',
        duties: [
          'Write the programming code, either from scratch or by adapting existing website software and graphics packages to meet business requirements',
          'Test the website and identify any technical problems',
          'Upload the site onto a server and register it with different search engines.',
        ],
        footer: 'If you enjoy these things, do apply',
      },
    },
  ],
  MAC: {},
};
