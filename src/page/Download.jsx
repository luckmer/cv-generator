import React from "react";
import { Page, Text, Document, PDFViewer } from '@react-pdf/renderer';
import {Container} from "../css/Downloadcss"

function Download() {
    return (
        <Container>
            <PDFViewer>
                <Document>
                    <Page>
                        <Text>das</Text>
                    </Page>
                </Document>
            </PDFViewer>
        </Container>
    )
}

export default Download
