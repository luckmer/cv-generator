import React, { useContext } from "react";
import { Page, Text, Document, PDFViewer } from "@react-pdf/renderer";
import { StoreContext } from "../store/index";

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
        ID,
        DATA: [table],
    } = useContext(StoreContext);
    const { data, BasicData } = table;

    return (
        <Container>
            {data.map((task) => {
                if (ID === task.id) {
                    return (
                        <PDFViewer key={task.id}>
                            <Document>
                                <Page>
                                    <Text>{task.title}</Text>
                                    <Text>
                                        {task.BasicData.map((task) => (
                                            <Text key={task.id}>
                                                <Text>
                                                    Country : {task.country}
                                                    dataOfBirth :
                                                    {task.dataOfBirth}
                                                    livingPlace :
                                                    {task.livingPlace}
                                                    name : {task.name}
                                                    surname: {task.surname}
                                                    phoneNumber:
                                                    {task.phoneNumber}
                                                </Text>
                                            </Text>
                                        ))}
                                    </Text>
                                </Page>
                            </Document>
                        </PDFViewer>
                    );
                }
            })}
        </Container>
    );
}

export default Download;
