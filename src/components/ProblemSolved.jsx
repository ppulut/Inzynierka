import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link } from "react-router-dom";
import useMeasure from 'react-use-measure'
import {useSpring, animated} from 'react-spring' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

const Panel = styled.div`
  width: 400px;
  text-align: left;
  padding: 0.5rem;
`

const PanelHeading = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

const PanelContent = styled(animated.div)`
  border: 1px solid #000000;
  border-top: none;
  padding: 0px 20px;
  color: #000000;
  overflow: hidden;
  transition: height ease 0.2s;
`

const PanelContentInner = styled.div`
  padding: 20px 0;
`

const ProblemSolved = ({item}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true)

  // 2
  const [ref, bounds] = useMeasure()

  const toggleWrapperAnimatedStyle = useSpring({ transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'})
  const panelCOntentAnimatedStyle = useSpring({
    // 3
    height: isCollapsed ? 0 : bounds.height
  })

  const togglePanel = () => {
    setIsCollapsed(prevState => !prevState)
  }

  return (
    <Panel>
      <PanelHeading onClick={togglePanel}>
        <span>{item.title}</span>
        <animated.div style={toggleWrapperAnimatedStyle}>
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </animated.div>
      </PanelHeading>
      <PanelContent style={panelCOntentAnimatedStyle}>
        {/* 15 */}
        <PanelContentInner ref={ref}>
        {item.opis}
        </PanelContentInner>
      </PanelContent>
    </Panel>
  )
}

export default ProblemSolved
