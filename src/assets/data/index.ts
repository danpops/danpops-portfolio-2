import { experienceData } from './experience'
import { specialtiesData } from './specialties'
export const navigationItems = [
  'About',
  'Specialties',
  'Experience',
  'Github',
  'Contact'
]
export const hero = {
  heading1: 'Hello,',
  heading2: "I'm Dan Popovic.",
  typewriterText: [
    'Software Developer.',
    'JavaScript Enthusiast.',
    'Functional Programmer.',
    'Problem Solver.'
  ],
  buttonText: 'About me'
}
export const about = {
  heading: 'About me',
  content: `I'm a Software Engineer based out of Toronto, with experience working 
  in consumer level and manufacturing applications using JavaScript and Cloud Technologies. 
  I'm passionate about writing clean and concise code and test driven development. I also have 
  experience building backend applications using the Serverless Framework and have 
  recently worked with McCain Foods on their digital transformation initiative.`
}
export const specialties = {
  heading: 'My specialties',
  data: specialtiesData
}
export const experience = {
  heading: 'Who have I worked with?',
  data: experienceData
}
export const github = {
  heading: 'Check out my work on Github!',
  buttonText: 'danpops/github',
  url: 'https://github.com/danpops'
}
export const contact = {
  heading: "Let's connect 😃 !",
  content: `I'm open to answering questions or providing advice. feel free to 
  contact me!`,
  linkedin: 'https://www.linkedin.com/in/danpops',
  email: 'mailto:dan-popovic@hotmail.com'
}
