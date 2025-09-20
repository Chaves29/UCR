#!/usr/bin/env python3
import pdfplumber
import sys

def extract_text_from_pdf(pdf_path):
    text = ""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n\n"
    except Exception as e:
        print(f"Error al extraer texto: {e}")
        return None
    return text

if __name__ == "__main__":
    pdf_path = "/Users/imac/Desktop/blog curricular-/DOCUMENTOS/Posteo 2.pdf"
    output_path = "/Users/imac/Desktop/blog curricular-/DOCUMENTOS/Posteo2_contenido.txt"
    
    print(f"Extrayendo texto de: {pdf_path}")
    text = extract_text_from_pdf(pdf_path)
    
    if text and text.strip():
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Texto extraído exitosamente y guardado en: {output_path}")
        print(f"Longitud del texto: {len(text)} caracteres")
    else:
        print("No se pudo extraer texto del PDF o el PDF está vacío")