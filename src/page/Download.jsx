import React from "react";
import { Page,  Document, PDFViewer } from "@react-pdf/renderer";

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
                
            
                    </Page>
                </Document>
            </PDFViewer>
        </Container>
    );
}

export default Download;
