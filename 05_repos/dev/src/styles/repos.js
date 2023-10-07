import styled from "styled-components"
import { Tabs as wsTabs, TabList as wsTabList, Tab as wsTab, TabPanel as wsTabPanel } from 'react-tabs'


export const Tabs = styled(wsTabs)`
    padding: 30px 20px;
`
export const TabList = styled(wsTabList)`
    display: flex;
    list-style-type: none;
    li:last-child{
        border-right: 1px solid black;
    }
`
export const Tab = styled(wsTab)`
    font-size: 30px;
    padding: 20px 20px 5px 20px;
    cursor: pointer;
    border-top: 2px solid black;
    border-left: 2px solid black;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    transition: background-color ease 0.3s;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
    &:hover {
        background-color: #ddd;
    }
    &.is-selected {
        background-color: white;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
`
export const TabPanel = styled(wsTabPanel)`
    margin: 40px 0 0 20px;
`

const style = {
    selected: {
        height: "500px"
    }
}


export default style