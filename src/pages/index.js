import React from "react";
import '../style.css'
import {mx} from '../reactstyle'
import { Heading, Flex, Column, Box, Container, Link, Text } from 'rebass'
import { Wrapper, SmallerWrapper, Icon, Medium, SocialMedia, Paragraph,
   Project, ProjectTitle, ProjectDesc, ProjectFinish, Footer } from '../components/components'
import styled from 'styled-components'
import Helmet from 'react-helmet'

export default () => (
  <React.Fragment>
    <Wrapper>
      <Helmet
          title='❤️ Matthew Stanciu'
          meta={[
          {
            name: 'description',
            content: 'Development portfolio',
          },
          {
            name: 'keywords',
            content: 'reactjs, javascript, front-end, web development',
          },
        ]}
      />
      <HeaderBlock>
          <Hello>Hi, I'm Matthew.</Hello>
          <Flex>
            <SocialMedia href="https://github.com/MatthewStanciu" icon="github" />
            <Medium href="https://medium.com/@MatthewStanciu"/>
            <SocialMedia href="https://twitter.com/MatthewStanciu" icon="twitter" />
            <SocialMedia href="https://instagram.com/matthewstanciu" icon="instagram" />
          </Flex>
      </HeaderBlock>
      <HeaderBlock>
        <Left flexDirection='column'>
          <Box width={350}>
            <Subhead>My Recent Projects</Subhead>
          </Box>
          <Project href="https://anonbotwl.glitch.me" title="Anonbot WL" desc="An Instagram bot for students at my school to submit confessions and announce anonymously"></Project>
          <Project href="http://thewritersblock.tech" title="The Writer's Block" desc="A decentralized writing platform that allows users to easily reward their favorite authors with Ethereum. Made at Hack Chicago 2018"></Project>
          <ProjectFinish href="https://sideb-textgen.glitch.me" title="Side B Text Gen" desc="Pretty title and block quote generator to give a nice touch to Medium articles"></ProjectFinish>
        </Left>
      </HeaderBlock>
    </Wrapper>
    <SmallerWrapper>
      <CenteredBox>
        <CenteredBlock>
        <HeaderBlock>
          <SmallerHello>Lover of words and software.</SmallerHello>
          <Paragraph>My name is Matthew, and I'm a high school junior at the West Lafayette
            Junior/Senior High School in West Lafayette, Indiana.
            I first discovered my love for computers when I was 6 years old. My mom gave me an old laptop
            from her work that nobody used anymore. Instead of being thrown away, it became my computer,
            meaning that I had full access and admin priveleges. I quickly filled it with viruses and
            eventually, the screen burnt out. Instead of fixing it, my mom found two more old laptops
            and gave them to me. I eventually broke those, as well. This was such an important time of
            development because it showed me that I loved how computers worked and I wanted to keep learning
            how they work. <br/><br/>

            At the same time, I took an interest in writing. When I was in 4th
            grade, I wrote my first book called The Power Necklace (which is still published online) in addition
            to countless imaginative short stories. I have spent much of my life writing and playing with
            computers. <br/><br/>

            I learned to code on Codecademy when I was 11. But I  always longed to be a part of something greater.
            When I was almost 12, in December 2013, I started
            my first Minecraft server called MCFun Central and began to learn how to make Minecraft server plugins.
            MCFun Central turned into <Link target="_" href="https://extrillius.wordpress.com/" color="#afaeae">The Extrillius Network</Link> in January 2015, a project that I kept going for
            two years before ultimately shutting it down. <br/><br/>

            I now run a <Link target="_" href="https://hackclub.com" color="red">Hack Club</Link> at my school, as well as a new school
            publication, <Link target="_" href="http://sideb.media" color="#CA4A3B">Side B</Link>, at my school.
            I'm passionate about spreading computer science to everyone and enacting social change through community organzing. <br/><br/>

            I love what I do and I hope I can do great things in the future.</Paragraph>
          <Paragraph color="black" text="_" />
          <Paragraph color="white" text="At the same time, I took an interest in writing. When I was in 4th
            grade, I wrote my first book called The Power Necklace (which is still published online) in addition
            to countless imaginative short stories. I have spent much of my life writing and playing with
            computers." />
          <Paragraph color="black" text="_" />
          <Paragraph color="white" text="I learned to code on Codecademy when I was 11. But I  always longed to be a part of something greater.
            When I was almost 12, in December 2013, I started
            my first Minecraft server called MCFun Central and began to learn how to make Minecraft server plugins.
            MCFun Central turned into The Extrillius Network in January 2015, a project that I kept going for
            two years before ultimately shutting it down." />
        </HeaderBlock>
      </CenteredBlock>
      </CenteredBox>
    </SmallerWrapper>
    <SmallerWrapper>
      <CenteredBox>
        <Box width={350}>
          <Subhead>My Positions</Subhead>
          <Project href="https://wlcat.club" title="CAT Club President" desc="CAT Club is West Lafayette Jr/Sr High School's Hack Club. Students get together in a hackathon-like structure and learn to code by making amazing projects." />
          <Project href="http://sideb.media" title="Side B President" desc="Side B is a new club and student publication at my high school, aiming to give every student a voice and become a better writer through a strong local community and the freedom to write whatever they want."/>
          <Project href="https://codeday.org/indianapolis" title="CodeDay Indianapolis Regional Manager" desc="CodeDay is a fun, nationwide hackathon aimed toward beginners that strengthens local communities and gets students interested in coding. I am the regional manager for Indianapolis." />
          <ProjectFinish href="https://altheamesh.com" title="AltheaMesh West Lafayette Ambassador" desc="Althea aims to give local communities the power to provide internet to themselves through a cryptocurrency-powered mesh network. I am in charge of deploying an Althea network in West Lafayette." />
        </Box>
      </CenteredBox>
    </SmallerWrapper>
    <Footer />
    <Footer>Sorry if things are broken, especially on mobile! This site is a WIP.</Footer>
  </React.Fragment>
)

const Hello = Heading.extend.attrs({f: 6, m: 0, fontSize: 70, textAlign: "left"})`
  line-height: 1.5;
  color: white;
  font-family: 'Averta-Bold';
`
const SmallerHello = Heading.extend.attrs({fontSize: 45, textAlign: "center"})`
  line-height: 1.5
  color:white;
  font-family: 'Averta-Bold';
`
const Subhead = Heading.extend.attrs({f: 6, m: 0, fontSize: 30, textAlign: "center"})`
  line-height: 2;
  color: white;
  font-family: 'Averta-Bold';
`
const Left = Flex.extend.attrs({})`
  position: relative;
  left: -30px;
`
const CenteredBox = Column.extend.attrs({})`
  display: flex;
  justify-content: center;
`

const HeaderBlock = Column.extend.attrs({ py: 2, pl: [null, 5] })`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const SmallerBlock = Column.extend.attrs({ py: 1, pl: [null, 5]})`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const CenteredBlock = Column.extend.attrs({ py: 2, ml: [-65, 225], mr: [-35, 225]})`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
