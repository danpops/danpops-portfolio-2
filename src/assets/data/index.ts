import { experienceCards } from './experience'
import { specialtiesData } from './specialties'
export const sections = {
  HERO: 'hero',
  ABOUT: 'about',
  SPECIALTIES: 'specialties',
  EXPERIENCE: 'experience',
  CONTACT: 'contact'
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
    "I am Dan Popovic, a highly skilled and motivated Full Stack Engineer, driven by a passion for functional programming and JavaScript. I take pride in my dedication to delivering top-notch products that prioritize business value and address clients' primary pain points. I take a comprehensive approach to testing by employing both TDD and BDD methodologies to ensure the highest quality standards."
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
  text1:
    "I'm more than happy to answer any questions you may have or provide advice.",
  text2: 'Please feel free to reach out to me anytime!',
  linkedin: 'https://www.linkedin.com/in/danpops',
  email: 'mailto:dan-popovic@hotmail.com',
  github: 'https://www.github.com/danpops'
}
