import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`
const Pokemon = styled.div`
  font-size: 60%;
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hey, <br /> I'm Isaac Hall.
        </BigTitle>
        <Subtitle>I am an aspiring developer currently getting my hands dirty with Javascript frameworks.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="SpongeBob Taproom"
            link="https://github.com/IsaacCDHall/Kegger-React"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            My most recent work practicing state management in React.js.
          </ProjectCard>
          <ProjectCard
            title="Du son Jardin"
            link="https://github.com/IsaacCDHall/du-son-Jardin"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I lead a team to create a music visualizer/ MIDI board.
          </ProjectCard>
          <ProjectCard
            title="Goyard"
            link="https://github.com/IsaacCDHall/GoHardGoyard"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Replica of Goyard's Home Page using just CSS and HTMl
          </ProjectCard>
          <ProjectCard
            title="DocTalk"
            link="https://github.com/IsaacCDHall/DocTalk"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Find local doctors - utilizes BetterDoctor api call.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Isaac Hall" />
          <AboutSub>
            <em>"I want to be the very best <br/> Like no one ever was. <br/> To catch bugs is my real test <br/> To debug is my cause!"</em>
            <br/><br/>
            <Pokemon>Pokémon&copy;</Pokemon>
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I am an aspiring developer currently getting my hands dirty with Javascript frameworks. My experience in marketing, branding, and developing teams inspires me to create beautiful user experiences and efficient apps. I am excited to elevate my skills to the next level through code.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            <a href="mailto:isaachalldev@gmail.com">Email</a> or find me on other platforms:{' '}
            <a href="https://github.com/IsaacCDHall">Github</a> &{' '}
            <a href="https://www.linkedin.com/in/isaacdev/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Isaac Hall.{' '}
          <a href="https://github.com/IsaacCDHall/GatsbyPortfolio">Github Repository</a>. Inspired by{' '}
          <a href="https://www.awwwards.com/websites/parallax/">awwards&trade; </a>Parallax designs.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
