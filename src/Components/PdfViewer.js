import React from 'react';

const PdfViewer = ({ base64 }) => {
    // Asegúrate de eliminar el prefijo si existe
    const base64Data = base64.startsWith('data:application/pdf;base64,')
        ? base64.split(',')[1]
        : base64;

    // Prepara la URL del PDF en Base64
    const pdfUrl = `data:application/pdf;base64,${base64Data}`;

    return (
        <iframe
            src={pdfUrl}
            width="100%" // Ajusta el tamaño según sea necesario
            height="100%" // Ajusta el tamaño según sea necesario
            title="PDF Viewer"
            style={{
                border: 'none', // Sin bordes
                overflow: 'hidden', // Sin scroll
                display: 'block', // Eliminar el espacio en blanco
            }}
            scrolling="no" // Desactivar el scroll
        />
    );
};

export default PdfViewer;
