import { experienceCards } from './experience'
import { specialtiesData } from './specialties'
export const sections = {
  ABOUT: 'About',
  SPECIALTIES: 'Specialties',
  EXPERIENCE: 'Experience',
  CONTACT: 'Contact'
}
export const navigationItems = [
  sections.ABOUT,
  sections.SPECIALTIES,
  sections.EXPERIENCE,
  sections.CONTACT
]
export const hero = {
  heading1: 'Hello,',
  heading2: "I'm Dan Popovic.",
  typewriterText: ['software developer.'],
  buttonText: 'About me'
}
export const about = {
  heading: 'About',
  content:
    "I'm Dan Popovic, a highly skilled and motivated Senior Full Stack Engineer with a deep passion for functional programming and JavaScript. With a strong belief in the power of functional composition, I specialize in building robust web applications and backend servers using JavaScript and TypeScript. Leveraging my expertise in functional programming concepts, I strive to write clean and concise code that follows best practices. With extensive experience in serverless technology, Azure Cloud Services, and comprehensive integration testing, I have successfully delivered innovative solutions that prioritize user needs."
}
export const specialties = {
  heading: 'Specialties',
  data: specialtiesData
}
export const experience = {
  heading: 'Experience',
  data: experienceCards
}
export const github = {
  heading: 'Check out my work on Github!',
  buttonText: 'danpops/github',
  url: 'https://github.com/danpops'
}
export const contact = {
  heading: 'Contact',
  content:
    "I'm more than happy to answer any questions you may have or provide advice. Please feel free to reach out to me anytime—I'm here to help!",
  linkedin: 'https://www.linkedin.com/in/danpops',
  email: 'mailto:dan-popovic@hotmail.com',
  github: 'https://www.github.com/danpops'
}
