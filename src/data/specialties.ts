import appium from '../assets/icons/appium.png'
import cloudformation from '../assets/icons/cloudformation.png'
import github from '../assets/icons/github.png'
import graphql from '../assets/icons/graphql.png'
import java from '../assets/icons/java.png'
import javascript from '../assets/icons/javascript.png'
import jest from '../assets/icons/jest.png'
import native from '../assets/icons/reactnative.png'
import neo4j from '../assets/icons/neo4j.png'
import nodejs from '../assets/icons/nodejs.png'
import python from '../assets/icons/python.png'
import reactjs from '../assets/icons/reactjs.png'
import redux from '../assets/icons/redux.png'
import serverless from '../assets/icons/serverless.png'
import swm from '../assets/icons/swm.png'
import typescript from '../assets/icons/typescript.png'

const languages = [
  {
    image: javascript,
    alt: 'javascript icon',
    name: 'JavaScript',
    href: 'https://www.javascript.com'
  },
  {
    image: typescript,
    alt: 'typescript icon',
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org'
  },
  {
    image: java,
    alt: 'java icon',
    name: 'Java',
    href: 'https://www.java.com/en/'
  },
  {
    image: python,
    alt: 'python icon',
    name: 'Python',
    href: 'https://www.python.org'
  }
]

const frontend = [
  {
    image: reactjs,
    alt: 'reactjs icon',
    name: 'ReactJS',
    href: 'https://reactjs.org'
  },
  {
    image: native,
    alt: 'react-native icon',
    name: 'React Native',
    href: 'https://reactnative.dev'
  },
  {
    image: redux,
    alt: 'redux icon',
    name: 'Redux',
    href: 'https://redux.js.org'
  },
  {
    image: swm,
    alt: 'swm icon',
    name: 'Reanimated',
    href: 'https://docs.swmansion.com/react-native-reanimated/'
  }
]

const backend = [
  {
    image: nodejs,
    alt: 'nodejs icon',
    name: 'NodeJS',
    href: 'https://nodejs.org/en/'
  },
  {
    image: serverless,
    alt: 'serverless icon',
    name: 'Serverless',
    href: 'https://www.serverless.com'
  },
  {
    image: cloudformation,
    alt: 'cloudformation icon',
    name: 'CloudFormation',
    href: 'https://aws.amazon.com/cloudformation/'
  },
  {
    image: graphql,
    alt: 'graphql icon',
    name: 'GraphQL',
    href: 'https://graphql.org'
  }
]

const more = [
  {
    image: jest,
    alt: 'jest icon',
    name: 'JestJS',
    href: 'https://jestjs.io/'
  },
  {
    image: appium,
    alt: 'appium icon',
    name: 'Appium',
    href: 'https://appium.io'
  },
  {
    image: neo4j,
    alt: 'neo4j icon',
    name: 'Neo4j',
    href: 'https://neo4j.com/'
  },
  {
    image: github,
    alt: 'github icon',
    name: 'GitHub',
    href: 'https://github.com'
  }
]

export const specialties = {
  languages: {
    title: 'languages',
    data: languages
  },
  frontend: {
    title: 'frontend',
    data: frontend
  },
  backend: {
    title: 'backend',
    data: backend
  },
  more: {
    title: 'more',
    data: more
  }
}
