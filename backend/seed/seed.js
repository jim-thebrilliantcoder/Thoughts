require('dotenv').config();
const mongoose = require('mongoose');
const Home = require('../models/Home');
const About = require('../models/About');
const Project = require('../models/Project');
const Service = require('../models/Service');

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Home.deleteMany();
  await About.deleteMany();
  await Project.deleteMany();
  await Service.deleteMany();

  await Home.create({
    backgroundImage: '/uploads/home-bg.jpg',
    tagline: 'Building the future, one project at a time'
  });

  await About.create({
    vision:
      'To support and build our Community by being a Versatile organization that relies on sustainable engineering, thorough practices, efficient management skills and team work.',
    companyInfo: {
      name: 'Thoughts Consultants Jaipur Pvt. Ltd.',
      empanelment: 'Empanelled Consultants with MoRTH, Govt. of India & UDH Dept. Govt. of Rajasthan',
      profile:
        'Thoughts Consultants Jaipur Pvt. Ltd. is a premier multi-disciplinary Engineering, Planning and Consulting company, empanelled with MoRTH, Govt. of India, and various State PWDs. We provide total solutions to suit exacting requirements of the projects from conception to implementation.',
      regdOffice: 'D-13, Shanti Path, Tilak Nagar, Jaipur - 302004 (INDIA)',
      testHouse: '13, Gol Market, Jawahar Nagar, Jaipur - 302004 (INDIA)',
      phone: '0141-4049864, 9829055330',
      email: 'thoughts.jaipur@gmail.com'
    },
    // Source: company profile deck, pages 65-67. Page 64's 5 logos had no
    // captions in the deck, so they're intentionally left out here rather
    // than guessed — add them manually once you have their names.
    clients: [
      { name: 'PWD Rajasthan', logo: '/uploads/clients/PWD-Rajasthan.png' },
      { name: 'PWD Haryana', logo: '/uploads/clients/PWD-Haryana.png' },
      { name: 'Jaipur Development Authority', logo: '/uploads/clients/Jaipur-Development-Authority.png' },
      { name: 'Rajasthan State Industrial Development & Investment Corporation Ltd.', logo: '/uploads/clients/RIICO.png' },
      { name: 'Jodhpur Development Authority', logo: '/uploads/clients/Jodhpur-Development-Authority.png' },
      { name: 'Rajasthan State Road Dev. & Const. Corp. Ltd.', logo: '/uploads/clients/RSRDC.png' },
      { name: 'Project Development Company of Rajasthan Ltd.', logo: '/uploads/clients/PDCOR.png' },
      { name: 'Road Infrastructure Development Company of Rajasthan Ltd.', logo: '/uploads/clients/RIDCOR.png' },
      { name: 'Infrastructure Leasing & Financial Services', logo: '/uploads/clients/ILFS.png' },
      { name: 'Consulting Engineering Services (India) Pvt. Ltd.', logo: '/uploads/clients/CES.png' },
      { name: 'Louis Berger Group Inc.', logo: '/uploads/clients/LB.png' },
      { name: 'Rajasthan Urban Infrastructure Development Project', logo: '/uploads/clients/RUIDP.png' },
      { name: 'Urban Mass Transit Company Limited', logo: '/uploads/clients/UMTC.png' },
      { name: 'D K Infrastructure Pvt. Ltd.', logo: '/uploads/clients/DK-Infra.png' },
      { name: 'G R Infra Projects Limited', logo: '/uploads/clients/GRIL.png' },
      { name: 'Om Metal Infra Projects Ltd.', logo: '/uploads/clients/OMIP.png' },
      { name: 'NCC Ltd.', logo: '/uploads/clients/NCC.png' },
      { name: 'Larsen & Toubro Limited', logo: '/uploads/clients/LT.png' },
      { name: 'PRL Projects & Infrastructure Ltd.', logo: '/uploads/clients/PRL.png' }
    ],
    team: [
      { name: 'Jane Doe', role: 'CEO', photo: '/uploads/jane.jpg' },
      { name: 'John Smith', role: 'CTO', photo: '/uploads/john.jpg' }
    ]
  });

  await Project.insertMany([
    {
      title: 'Project Alpha',
      icon: '/uploads/icons/alpha.svg',
      shortDesc: 'A short summary of Project Alpha.',
      details: 'Full detailed description of Project Alpha goes here.',
      images: ['/uploads/projects/alpha1.jpg', '/uploads/projects/alpha2.jpg']
    },
    {
      title: 'Project Beta',
      icon: '/uploads/icons/beta.svg',
      shortDesc: 'A short summary of Project Beta.',
      details: 'Full detailed description of Project Beta goes here.',
      images: ['/uploads/projects/beta1.jpg']
    }
  ]);

  await Service.insertMany([
    {
      title: 'Web Development',
      icon: '/uploads/icons/web.svg',
      subtext: 'We build fast, modern, responsive websites.'
    },
    {
      title: 'Consulting',
      icon: '/uploads/icons/consulting.svg',
      subtext: 'Expert advice to grow your business.'
    }
  ]);

  console.log('Database seeded successfully');
  await mongoose.disconnect();
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
