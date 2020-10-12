import React,{useContext} from "react";
import { Page,Text,Document, PDFViewer } from "@react-pdf/renderer";
import {Container} from "../css/Downloadcss"
import styled from '@react-pdf/styled-components';
import {StoreContext} from "../store/index"


const Body = styled.Page`
  padding-top: 35px;
  padding-bottom: 65px;
  padding-right: 35px;
  padding-left: 35px;
`;

const Header = styled.Text`
  color: grey;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;
const Contact = styled.Text `
    margin: 12px;
    font-size: 14px;
    text-align:center;
    flexDirection:column;
    font-family: 'Times-Roman';
`
const BornData = styled.Text `
    font-size: 14px;
    text-align:center;
    flexDirection:column;
    font-family: 'Times-Roman';
    margin: 4px;
`
const Margin = styled.Text `
    margin:12px;
`
const TypeView = styled.Text `
  color: grey;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom:5px;
 border:1px solid black;
`


const Test = ({task})=>{
    return(
        <>
        <Contact>
            {task.name} {task.surname}
        </Contact>
        <BornData>
            Data of birth: {task.dataOfBirth}
        </BornData>
        <BornData>
            country: {task.country}
        </BornData>
        <TypeView>
            Work Experience
        </TypeView>
        <TypeView>
            Education
        </TypeView>
        <TypeView>
            knowledge of languages
        </TypeView>
        <TypeView>
            training courses certificates
        </TypeView>
        <TypeView>
            interests
        </TypeView>
        </>
    )
}

function Download() {
    const {
        DATAUPDATE: [editData],
    } = useContext(StoreContext)

    return (
        <Container>
            <PDFViewer>
                <Document>
                    <Body>
                        <Header> - CV -</Header>
                            {editData.basicData.map((task)=>(
                                <Test task ={task} key={task.id}/>
                            ))}
                    </Body>
                </Document>
            </PDFViewer>
        </Container>
    );
}

export default Download;
