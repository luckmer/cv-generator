import React from "react";
import { Page, Text, View, Document, PDFViewer } from '@react-pdf/renderer';
import {Container} from "../css/Downloadcss"

function Download() {
    return (
        <Container>
            <PDFViewer>
                <Document>
                    <Page>
                    <View >
                        <Text>Section #1</Text>
                    </View>
                    <View >
                        <Text>Section #2</Text>
                    </View>
                    </Page>
                </Document>
            </PDFViewer>
        </Container>
    )
}

export default Download
