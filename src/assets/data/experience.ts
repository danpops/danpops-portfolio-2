import tribalscale from '../images/tribalscale.png'
import gopuff from '../images/gopuff.png'
import freshouse from '../images/freshouse.png'
import mccain from '../images/mccain.png'
import { IExperience, IExperienceData } from '../../types'

export const experienceData: IExperienceData[] = [
  {
    company: 'TribalScale',
    image: tribalscale,
    url: 'https://tribalscale.com'
  },
  { company: 'McCain', image: mccain, url: 'https://mccain.ca' },
  { company: 'Gopuff', image: gopuff, url: 'https://gopuff.com' },
  { company: 'Freshouse', image: freshouse, url: 'https://freshouse.ca' }
]
export const experienceCards: IExperience[] = [
  {
    company: 'McCain Foods - TribalScale',
    title: 'Backend Engineer',
    date: 'Oct 2022 - Present',
    notes: [
      'Anchor backend engineer on the digital transformation project for McCain, a global leader in manufacturing, successfully revolutionizing their backend systems and enhancing operational efficiency.',
      'Developed a sensor-triggered solution using Azure Functions to automate the tracking of equipment sensors, resulting in real-time updates and eliminating manual intervention.',
      'Conducted Domain Discovery and Event Storming sessions to align project goals and requirements, contributing to the successful delivery of a tailored solution.',
      'Received exceptional feedback from stakeholders, paving the way for the global scalability of the application and highlighting its significant impact on productivity and cost savings.',
      'Implemented comprehensive integration tests using Cucumber Gherkin, ensuring the high quality and reliability of the APIs.',
      'Enabled data-driven decision-making for product runs, empowering McCain to optimize costs based on previous data analysis.'
    ]
  },
  {
    company: 'GoPuff - TribalScale',
    title: 'React Native Engineer',
    date: 'Oct 2021 - May 2022',
    notes: [
      'Worked on the GoPuff project, focusing on user registration/login functionality, utilizing React Native for frontend development and implementing GraphQL APIs on the backend.',
      'Implemented end-to-end integration tests using Appium, ensuring high-quality software delivery.',
      'Implemented Single Sign-On (SSO) login, integrated reCAPTCHA, and validated user registration information, contributing to an enhanced user experience.',
      'Demonstrated strong problem-solving and debugging skills while working on complex web applications serving a global user base.'
    ]
  }
]
