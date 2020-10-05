import React from "react";
import { Page, Text, Document, PDFViewer } from "@react-pdf/renderer";

import styled from "styled-components";
const Container = styled.div`
    iframe {
        width: 100vw;
        height: 100vh;
        display: flex;
    }
`;

function Download() {
    return (
        <Container>
            <PDFViewer>
                <Document>
                    <Page>
                        <Text>soon</Text>
                    </Page>
                </Document>
            </PDFViewer>
        </Container>
    );
}

export default Download;
