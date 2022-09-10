import { experienceData } from './experience'
import { specialtiesData } from './specialties'
export const navigationItems = [
  'about',
  'specialties',
  'experience',
  'github',
  'contact'
]
export const hero = {
  heading1: 'hello!',
  heading2: "i'm dan popovic",
  heading3: 'nice to meet you :)',
  buttonText: 'who am i?'
}
export const about = {
  heading: 'who am i?',
  content: `i'm a software engineer based in toronto, with experience working 
  on consumer level applications using frameworks such as react and react 
  native. i'm passionate about writing clean and concise code and test 
  driven development using tools such as jest and appium. furthermore, i have 
  experience building backend applications using the serverless framework and have 
  recently worked with gopuff, leading the implementation of integration
  tests using appium on react native.`
}
export const specialties = {
  heading: 'what are my specialties?',
  data: specialtiesData
}
export const experience = {
  heading: 'who have i worked with?',
  data: experienceData
}
export const github = {
  heading: 'check out my work on github!',
  buttonText: 'danpops/github',
  url: 'https://github.com/danpops'
}
export const contact = {
  heading: "let's get in touch!",
  content: `i'm open to answering questions or providing advice. feel free to 
  contact me!`,
  linkedin: 'https://www.linkedin.com/in/danpops',
  email: 'mailto:dan-popovic@hotmail.com'
}
