import React,{useContext} from "react";
import { Page,Text,Document, PDFViewer } from "@react-pdf/renderer";
import {StoreContext} from "../store/index"
import styled from "styled-components";
const Container = styled.div`
    iframe {
        width: 100vw;
        height: 100vh;
        display: flex;
    }
`;

function Download() {
    const {
        DATAUPDATE: [editData],
    } = useContext(StoreContext)

    return (
        <Container>
            <PDFViewer>
                <Document>
                    <Page>
                    <Text>
                        {editData.basicData.map((task)=>(
                            <Text key ={task.id}>
                                country : {task.country}
                                data of Birth : {task.dataOfBirth}
                                living place : {task.livingPlace}
                                name : {task.name}
                                surname : {task.surname}
                                phone number :{task.phoneNumber}
                            </Text>
                        ))}
                    </Text>
                    </Page>
                </Document>
            </PDFViewer>
        </Container>
    );
}

export default Download;
